import { useState, useEffect, useRef, useCallback } from 'react'
import { io, Socket } from 'socket.io-client'

interface UseVoiceConversationOptions {
  onAudioLevel?: (level: number) => void
  onTranscript?: (text: string, isFinal: boolean) => void
  onAssistantMessage?: (text: string) => void
  onLeadQualified?: (lead: any) => void
  onAppointmentBooked?: (appointment: any) => void
  onStateChange?: (state: string) => void
}

export function useVoiceConversation(options: UseVoiceConversationOptions) {
  const [isConnected, setIsConnected] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  
  const socketRef = useRef<Socket | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioStreamRef = useRef<MediaStream | null>(null)
  const audioElementRef = useRef<HTMLAudioElement | null>(null)
  
  const {
    onAudioLevel,
    onTranscript,
    onAssistantMessage,
    onLeadQualified,
    onAppointmentBooked,
    onStateChange
  } = options

  // Initialize socket connection
  useEffect(() => {
    const socket = io(window.location.origin, {
      path: '/socket.io',
      transports: ['websocket', 'polling']
    })
    
    socket.on('connect', () => {
      console.log('Socket connected')
      setIsConnected(true)
      onStateChange?.('ready')
    })
    
    socket.on('disconnect', () => {
      console.log('Socket disconnected')
      setIsConnected(false)
      setIsRecording(false)
      onStateChange?.('idle')
    })
    
    socket.on('transcript', (data: { text: string; isFinal: boolean }) => {
      onTranscript?.(data.text, data.isFinal)
    })
    
    socket.on('assistant-message', (data: { text: string }) => {
      onAssistantMessage?.(data.text)
    })
    
    socket.on('lead-qualified', (lead: any) => {
      onLeadQualified?.(lead)
    })
    
    socket.on('appointment-booked', (appointment: any) => {
      onAppointmentBooked?.(appointment)
    })
    
    socket.on('audio_chunk', (data: { audio: ArrayBuffer }) => {
      playAudioChunk(data.audio)
    })
    
    socketRef.current = socket
    
    return () => {
      socket.disconnect()
    }
  }, [])

  // Audio level monitoring
  const startAudioLevelMonitoring = useCallback((stream: MediaStream) => {
    audioContextRef.current = new AudioContext()
    analyserRef.current = audioContextRef.current.createAnalyser()
    analyserRef.current.fftSize = 256
    
    const source = audioContextRef.current.createMediaStreamSource(stream)
    source.connect(analyserRef.current)
    
    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    
    const checkLevel = () => {
      if (!analyserRef.current) return
      
      analyserRef.current.getByteFrequencyData(dataArray)
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length
      const level = Math.min(1, average / 128)
      
      onAudioLevel?.(level)
      
      if (isRecording) {
        requestAnimationFrame(checkLevel)
      }
    }
    
    checkLevel()
  }, [isRecording, onAudioLevel])

  // Play audio chunk from server
  const playAudioChunk = useCallback(async (audioData: ArrayBuffer) => {
    try {
      const audioBlob = new Blob([audioData], { type: 'audio/mp3' })
      const audioUrl = URL.createObjectURL(audioBlob)
      
      if (!audioElementRef.current) {
        audioElementRef.current = new Audio()
      }
      
      audioElementRef.current.src = audioUrl
      await audioElementRef.current.play()
      
      onAudioLevel?.(0.5) // Show speaking state during playback
      onStateChange?.('speaking')
      
      audioElementRef.current.onended = () => {
        onAudioLevel?.(0)
        if (isRecording) {
          onStateChange?.('listening')
        }
      }
    } catch (error) {
      console.error('Error playing audio:', error)
    }
  }, [isRecording, onAudioLevel, onStateChange])

  // Start conversation
  const startConversation = useCallback(async () => {
    try {
      onStateChange?.('connecting')
      
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      })
      
      audioStreamRef.current = stream
      startAudioLevelMonitoring(stream)
      
      // Create MediaRecorder
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      })
      
      mediaRecorder.ondataavailable = async (event) => {
        if (event.data.size > 0 && socketRef.current?.connected) {
          const arrayBuffer = await event.data.arrayBuffer()
          socketRef.current.emit('audio_input', {
            audio: arrayBuffer,
            sampleRate: 16000
          })
        }
      }
      
      mediaRecorder.start(100) // Send chunks every 100ms
      mediaRecorderRef.current = mediaRecorder
      setIsRecording(true)
      onStateChange?.('listening')
      
      // Notify server to start a new conversation
      socketRef.current?.emit('start_conversation', {
        voiceConfig: {
          provider: 'elevenlabs',
          voiceId: 'rachel' // Default voice
        }
      })
      
    } catch (error) {
      console.error('Error starting conversation:', error)
      onStateChange?.('idle')
      throw error
    }
  }, [startAudioLevelMonitoring, onStateChange])

  // Stop conversation
  const stopConversation = useCallback(async () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
    
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach(track => track.stop())
    }
    
    if (audioContextRef.current) {
      audioContextRef.current.close()
    }
    
    setIsRecording(false)
    onAudioLevel?.(0)
    onStateChange?.('idle')
    
    socketRef.current?.emit('stop_conversation')
  }, [onAudioLevel, onStateChange])

  // Send text message
  const sendMessage = useCallback((message: string) => {
    socketRef.current?.emit('text_message', { text: message })
  }, [])

  // Stream audio from text (TTS)
  const streamAudio = useCallback(async (text: string) => {
    socketRef.current?.emit('synthesize_speech', { text })
  }, [])

  return {
    isConnected,
    isRecording,
    startConversation,
    stopConversation,
    sendMessage,
    streamAudio
  }
}
