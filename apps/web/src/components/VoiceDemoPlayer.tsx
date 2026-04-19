"use client";

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function VoiceDemoPlayer({ audioUrl = "/assets/audio/medspa_demo_stitched.mp3", title = "Listen: Reactivation Engine AI" }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'rgba(0, 245, 212, 0.4)',
        progressColor: '#00F5D4',
        cursorColor: '#00DFC1',
        barWidth: 3,
        barGap: 3,
        barRadius: 3,
        height: 60,
        normalize: true,
        url: audioUrl,
      });

      wavesurfer.current.on('ready', () => setIsReady(true));
      wavesurfer.current.on('play', () => setIsPlaying(true));
      wavesurfer.current.on('pause', () => setIsPlaying(false));
      wavesurfer.current.on('finish', () => setIsPlaying(false));
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
        wavesurfer.current = null;
      }
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (wavesurfer.current && isReady) {
      wavesurfer.current.playPause();
    }
  };

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(0, 245, 212, 0.15)',
      borderRadius: 24,
      padding: '24px',
      marginTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 10px 40px -10px rgba(0, 245, 212, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: isPlaying ? '#00F5D4' : '#71717A',
            boxShadow: isPlaying ? '0 0 10px #00F5D4' : 'none',
            animation: isPlaying ? 'pulse 2s infinite' : 'none'
          }}></div>
          <span style={{ color: '#E5E2E1', fontWeight: 600, fontSize: 15 }}>{title}</span>
        </div>
        <Volume2 size={18} color="#A1A1AA" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button 
          onClick={togglePlay}
          disabled={!isReady}
          style={{
            width: 50, height: 50, borderRadius: '50%',
            background: 'linear-gradient(135deg, #00DFC1, #00F5D4)',
            border: 'none', color: '#09090B',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: isReady ? 'pointer' : 'not-allowed',
            opacity: isReady ? 1 : 0.5,
            flexShrink: 0,
            transition: 'transform 0.2s'
          }}
        >
          {isPlaying ? <Pause size={24} fill="#09090B" /> : <Play size={24} fill="#09090B" style={{ marginLeft: 4 }} />}
        </button>

        <div style={{ flex: 1, position: 'relative' }}>
          {!isReady && (
             <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', color: '#71717A', fontSize: 13, zIndex: 2 }}>
               Loading neural network buffers...
             </div>
          )}
          <div ref={waveformRef} style={{ width: '100%', opacity: isReady ? 1 : 0.3, transition: 'opacity 0.3s' }}></div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
}
