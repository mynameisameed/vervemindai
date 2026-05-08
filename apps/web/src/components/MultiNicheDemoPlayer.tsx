"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const VoiceDemoPlayer = dynamic(() => import('./VoiceDemoPlayer'), { ssr: false });

const NICHES = [
  {
    id: 'medspa',
    label: 'MedSpa',
    audioUrl: '/assets/audio/medspa_demo_stitched.mp3',
    spanishAudioUrl: '/assets/audio/medspa_demo_stitched_es.mp3',
    title: 'Listen: MedSpa Reactivation AI',
  },
  {
    id: 'dental',
    label: 'Dental',
    audioUrl: '/assets/audio/dental_demo_stitched.mp3',
    spanishAudioUrl: '/assets/audio/dental_demo_stitched_es.mp3',
    title: 'Listen: Dental Receptionist AI',
  },
  {
    id: 'hvac',
    label: 'HVAC',
    audioUrl: '/assets/audio/hvac_demo_stitched.mp3',
    spanishAudioUrl: '/assets/audio/hvac_demo_stitched_es.mp3',
    title: 'Listen: HVAC Dispatch AI',
  },
  {
    id: 'roofing',
    label: 'Roofing',
    audioUrl: '/assets/audio/medspa_demo_stitched.mp3', // Using placeholder from before
    spanishAudioUrl: '/assets/audio/roofing_demo_stitched_es.mp3',
    title: 'Listen: Roofing Lead AI',
  }
];

export default function MultiNicheDemoPlayer() {
  const [activeNiche, setActiveNiche] = useState(NICHES[0]);

  return (
    <div style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '-16px', flexWrap: 'wrap' }}>
        {NICHES.map(niche => (
          <button
            key={niche.id}
            onClick={() => setActiveNiche(niche)}
            style={{
              background: activeNiche.id === niche.id ? 'rgba(0, 245, 212, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              color: activeNiche.id === niche.id ? '#00F5D4' : '#A1A1AA',
              border: `1px solid ${activeNiche.id === niche.id ? 'rgba(0, 245, 212, 0.3)' : 'transparent'}`,
              borderRadius: '20px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {niche.label}
          </button>
        ))}
      </div>
      <VoiceDemoPlayer 
        audioUrl={activeNiche.audioUrl}
        spanishAudioUrl={activeNiche.spanishAudioUrl}
        title={activeNiche.title}
      />
    </div>
  );
}
