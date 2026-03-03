import { useState, useEffect, useRef, useCallback } from 'react'
import { useVoiceConversation } from '../hooks/useVoiceConversation'
import './VoiceAssistant.css'

interface VoiceAssistantProps {
  onStatusChange: (status: string) => void
  onTranscriptUpdate: (entry: {role: 'user' | 'assistant', content: string}) => void
  onLeadQualified: (lead: any) => void
}

type ConversationState = 'idle' | 'connecting' | 'ready' | 'listening' | 'speaking' | 'processing'

export default function VoiceAssistant({ 
  onStatusChange, 
  onTranscriptUpdate,
  onLeadQualified 
}: VoiceAssistantProps) {
  const [state, setState] = useState<ConversationState>('idle')
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0)
  const [messages, setMessages] = useState<Array<{type: 'user' | 'assistant', text: string}>>([])
  const [appointmentData, setAppointmentData] = useState<any>(null)
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  
  const {
    isConnected,
    isRecording,
    startConversation,
    stopConversation,
    sendMessage,
    streamAudio
  } = useVoiceConversation({
    onAudioLevel: (level) => setVolume(level),
    onTranscript: (text, isFinal) => {
      if (isFinal && text.trim()) {
        onTranscriptUpdate({ role: 'user', content: text })
        setMessages(prev => [...prev, { type: 'user', text }])
      }
    },
    onAssistantMessage: (text) => {
      onTranscriptUpdate({ role: 'assistant', content: text })
      setMessages(prev => [...prev, { type: 'assistant', text }])
    },
    onLeadQualified: (lead) => {
      onLeadQualified(lead)
    },
    onAppointmentBooked: (appointment) => {
      setAppointmentData(appointment)
    },
    onStateChange: (newState) => {
      setState(newState)
      onStatusChange(newState)
    }
  })

  // Audio visualization
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const draw = () => {
      const width = canvas.width
      const height = canvas.height
      
      ctx.clearRect(0, 0, width, height)
      
      if (state === 'listening' || state === 'speaking') {
        const bars = 40
        const barWidth = width / bars - 2
        const baseAmplitude = volume * 50
        
        for (let i = 0; i < bars; i++) {
          const x = i * (barWidth + 2)
          const randomHeight = Math.random() * baseAmplitude
          const barHeight = Math.max(4, baseAmplitude + randomHeight)
          const y = (height - barHeight) / 2
          
          const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight)
          gradient.addColorStop(0, '#00d4ff')
          gradient.addColorStop(0.5, '#7c3aed')
          gradient.addColorStop(1, '#00d4ff')
          
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.roundRect(x, y, barWidth, barHeight, 4)
          ctx.fill()
        }
      } else {
        // Idle state - subtle pulse
        ctx.fillStyle = 'rgba(124, 58, 237, 0.3)'
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, 60 + Math.sin(Date.now() / 1000) * 10, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.fillStyle = 'rgba(0, 212, 255, 0.2)'
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, 40, 0, Math.PI * 2)
        ctx.fill()
      }
      
      animationRef.current = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [state, volume])

  const handleToggleCall = async () => {
    if (isConnected) {
      await stopConversation()
    } else {
      await startConversation()
    }
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  const getStateDisplay = () => {
    switch (state) {
      case 'idle': return 'Click to start'
      case 'connecting': return 'Connecting...'
      case 'ready': return 'Ready'
      case 'listening': return 'Listening...'
      case 'speaking': return 'Speaking...'
      case 'processing': return 'Processing...'
      default: return state
    }
  }

  return (
    <div className="voice-assistant">
      <div className="voice-container">
        <canvas 
          ref={canvasRef} 
          className="audio-visualizer"
          width={400}
          height={150}
        />
        
        <div className="call-button-container">
          <button 
            className={`call-button ${isConnected ? 'active' : ''}`}
            onClick={handleToggleCall}
            disabled={state === 'connecting' || state === 'processing'}
          >
            <span className="button-icon">
              {isConnected ? '⬛' : '🎙️'}
            </span>
          </button>
          
          <div className="call-actions">
            {isConnected && (
              <>
                <button 
                  className={`action-button ${isMuted ? 'muted' : ''}`}
                  onClick={handleMuteToggle}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>
                
                <button 
                  className="action-button end-call"
                  onClick={stopConversation}
                  title="End call"
                >
                  📞
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="state-display">
          <div className={`state-indicator ${state}`}></div>
          <span>{getStateDisplay()}</span>
        </div>
      </div>

      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h4>Appointment Booking</h4>
          <p>AI schedules appointments naturally</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h4>Lead Qualification</h4>
          <p>Qualifies leads in real-time</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h4>Multi-channel</h4>
          <p>WhatsApp & Email integration</p>
        </div>
      </div>

      {appointmentData && (
        <div className="appointment-confirmation">
          <h4>✅ Appointment Confirmed</h4>
          <p>{appointmentData.date} at {appointmentData.time}</p>
          <p className="appointment-detail">{appointmentData.type}</p>
        </div>
      )}
    </div>
  )
}
