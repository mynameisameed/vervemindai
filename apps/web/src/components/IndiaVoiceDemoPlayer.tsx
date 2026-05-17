"use client";

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { Play, Pause } from 'lucide-react';

type IndiaLang = 'en' | 'hi' | 'te';

const LANG_LABELS: Record<IndiaLang, string> = {
  en: 'English',
  hi: 'हिंदी',
  te: 'తెలుగు',
};

const TEAL = '#00F5D4';

export default function IndiaVoiceDemoPlayer({
  audioUrls,
  title = 'Listen: AI Receptionist Demo',
}: {
  audioUrls: Record<IndiaLang, string>;
  title?: string;
}) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [lang, setLang] = useState<IndiaLang>('hi');

  const currentUrl = audioUrls[lang] || audioUrls.en;

  // Destroy and recreate wavesurfer when language changes
  useEffect(() => {
    if (!waveformRef.current) return;

    // Clean up previous instance
    if (wavesurfer.current) {
      wavesurfer.current.destroy();
      wavesurfer.current = null;
    }

    setIsReady(false);
    setIsPlaying(false);

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(0, 245, 212, 0.4)',
      progressColor: TEAL,
      cursorColor: '#00DFC1',
      barWidth: 3,
      barGap: 3,
      barRadius: 3,
      height: 60,
      normalize: true,
      url: currentUrl,
    });

    wavesurfer.current.on('ready', () => setIsReady(true));
    wavesurfer.current.on('play', () => setIsPlaying(true));
    wavesurfer.current.on('pause', () => setIsPlaying(false));
    wavesurfer.current.on('finish', () => setIsPlaying(false));

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
        wavesurfer.current = null;
      }
    };
  }, [currentUrl]);

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
      boxShadow: '0 10px 40px -10px rgba(0, 245, 212, 0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%',
            background: isPlaying ? TEAL : '#71717A',
            boxShadow: isPlaying ? `0 0 10px ${TEAL}` : 'none',
            animation: isPlaying ? 'india-pulse 2s infinite' : 'none',
          }}></div>
          <span style={{ color: '#E5E2E1', fontWeight: 600, fontSize: 15 }}>{title}</span>
        </div>

        {/* Language switcher */}
        <div style={{
          display: 'flex',
          background: 'rgba(0,0,0,0.4)',
          borderRadius: 20,
          padding: 4,
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          {(Object.keys(LANG_LABELS) as IndiaLang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                background: lang === l ? 'rgba(0,245,212,0.15)' : 'transparent',
                color: lang === l ? TEAL : '#a1a1aa',
                border: 'none',
                borderRadius: 16,
                padding: '4px 14px',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          onClick={togglePlay}
          disabled={!isReady}
          style={{
            width: 50, height: 50, borderRadius: '50%',
            background: `linear-gradient(135deg, #00DFC1, ${TEAL})`,
            border: 'none', color: '#09090B',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: isReady ? 'pointer' : 'not-allowed',
            opacity: isReady ? 1 : 0.5,
            flexShrink: 0,
            transition: 'transform 0.2s',
          }}
        >
          {isPlaying ? <Pause size={24} fill="#09090B" /> : <Play size={24} fill="#09090B" style={{ marginLeft: 4 }} />}
        </button>

        <div style={{ flex: 1, position: 'relative' }}>
          {!isReady && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', color: '#71717A', fontSize: 13, zIndex: 2 }}>
              Loading audio...
            </div>
          )}
          <div ref={waveformRef} style={{ width: '100%', opacity: isReady ? 1 : 0.3, transition: 'opacity 0.3s' }}></div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes india-pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
}
