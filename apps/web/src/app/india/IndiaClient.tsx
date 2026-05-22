"use client";

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Play, Pause, ChevronDown, ChevronUp, Copy, Check, Info } from 'lucide-react';
import { type IndiaLang, LANG_META, i18n } from './i18n';

const IndiaVoiceDemoPlayer = dynamic(() => import('../../components/IndiaVoiceDemoPlayer'), { ssr: false });

const TEAL = '#00F5D4';
const BG = '#09090B';
const BORDER = 'rgba(255,255,255,0.06)';
const MUTED = '#A1A1AA';
const WHITE = '#FFFFFF';
const ORANGE = '#ff9932';
const GREEN = '#138808';

const WHATSAPP_NUMBER = '917995851271';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo%20for%20my%20Indian%20business`;
const CALENDLY = 'https://calendly.com/vervemindai/30min?utm_source=vervemindai.com&utm_medium=website&utm_campaign=india';

const CITIES = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi NCR', 'Pune'];

const PRESETS = [
  { label: '🦷 Dental Clinic', missedCalls: 5, avgValue: 3000, follow: 30, nicheId: 'dental' },
  { label: '💆 MedSpa / Skin', missedCalls: 4, avgValue: 5000, follow: 25, nicheId: 'skin' },
  { label: '🏠 Real Estate', missedCalls: 8, avgValue: 15000, follow: 20, nicheId: 'realestate' },
  { label: '📚 Coaching Centre', missedCalls: 12, avgValue: 2000, follow: 40, nicheId: 'coaching' },
];

export default function IndiaClient() {
  const [lang, setLang] = useState<IndiaLang>('en');
  const t = i18n[lang];

  // Niche selection for voice demo
  const [activeNiche, setActiveNiche] = useState<string>('dental');

  // Sliders for ROI Calculator
  const [missedCalls, setMissedCalls] = useState<number>(5);
  const [avgValue, setAvgValue] = useState<number>(3000);
  const [followupRate, setFollowupRate] = useState<number>(30);

  // Tabs for Free Resource Showcase
  const [activeTab, setActiveTab] = useState<'gbp' | 'whatsapp' | 'recall'>('gbp');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [leadEmails, setLeadEmails] = useState<Record<string, string>>({ gbp: '', whatsapp: '', recall: '' });

  // FAQ Accordion states
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Audio Player states
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [audioStatus, setAudioStatus] = useState<string>('READY TO PLAY');

  // Trigger calculations on preset selection
  const handlePresetSelect = (preset: typeof PRESETS[0]) => {
    setMissedCalls(preset.missedCalls);
    setAvgValue(preset.avgValue);
    setFollowupRate(preset.follow);
    setActiveNiche(preset.nicheId);
  };

  // Sync active niche audio source
  const getAudioSource = () => {
    return `/assets/audio/${activeNiche}_vo_in.mp3`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setAudioProgress(0);
      setAudioStatus('READY TO PLAY');
      audioRef.current.src = getAudioSource();
      audioRef.current.load();
    }
  }, [activeNiche]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setAudioStatus('PAUSED');
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setAudioStatus('PLAYING DEMO');
      }).catch(err => console.log('Audio playback blocked: ', err));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setAudioProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setAudioProgress(0);
    setAudioStatus('FINISHED PLAYING');
  };

  const handleProgressBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setAudioProgress(newTime);
    }
  };

  // Copy to clipboard helper
  const handleCopy = (textId: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStates((prev) => ({ ...prev, [textId]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [textId]: false }));
      }, 2000);
    });
  };

  // Resource download lead submission helper
  const handleDownload = (resType: 'GBP' | 'TEMPLATES' | 'RECALL', emailKey: 'gbp' | 'whatsapp' | 'recall') => {
    const email = leadEmails[emailKey];
    if (!email || email.indexOf('@') === -1) {
      alert(lang === 'te' ? 'దయచేసి సరైన ఇమెయిల్ నమోదు చేయండి.' : lang === 'hi' ? 'कृपया एक मान्य ईमेल दर्ज करें।' : 'Please enter a valid email address.');
      return;
    }
    const lead = {
      email: email,
      resource: resType,
      source: 'resource_hub_india',
      timestamp: new Date().toISOString()
    };
    
    // Non-blocking lead save
    fetch('https://vermind-backend.vercel.app/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    }).catch(() => {});

    // Open WhatsApp CTA
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20VerveMind%2C%20please%20send%20me%20the%20${resType}%20growth%20kit%20PDF%20for%20my%20business.%20My%20email%20is%20${encodeURIComponent(email)}`;
    window.open(waUrl, '_blank');
  };

  // Formatter for Indian Lakh/Crore INR notation
  const formatINR = (n: number): string => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(2)} Lakh`;
    return `₹${n.toLocaleString('en-IN')}`;
  };

  // Calculator engine
  const follow = followupRate / 100;
  const monthlyLoss = Math.round((missedCalls * 30) * avgValue * (1 - follow) * 0.40);
  const recoveredRevenue = Math.round((missedCalls * 30) * avgValue * 0.80 * 0.40);
  const netProfitBoost = Math.max(0, recoveredRevenue - 8000);

  const reportText = `Hi VerveMind! My business misses ~${missedCalls} calls/day with an avg value of ₹${avgValue}. Current follow-up is ${followupRate}%. Estimated loss: ${formatINR(monthlyLoss)}. I'd like a custom consultation plan.`;

  return (
    <div style={{ background: BG, color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      
      {/* Dynamic styling for ambient glow orbs & custom scrollbars */}
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
          animation: floatOrb 12s ease-in-out infinite alternate;
        }
        @keyframes floatOrb {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-40px) scale(1.15); }
        }
        .text-tricolor-gradient {
          background: linear-gradient(to right, ${ORANGE} 15%, #ffffff 50%, ${GREEN} 85%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
        }
        .glow-card {
          background: rgba(13, 13, 16, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glow-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 153, 50, 0.25);
          box-shadow: 0 12px 30px -10px rgba(255, 153, 50, 0.15);
        }
        .glow-card-green {
          background: rgba(13, 13, 16, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(24px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glow-card-green:hover {
          transform: translateY(-4px);
          border-color: rgba(52, 211, 153, 0.25);
          box-shadow: 0 12px 30px -10px rgba(52, 211, 153, 0.15);
        }
        .pulse-orb {
          animation: pulseStatus 2s infinite alternate;
        }
        @keyframes pulseStatus {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 1; }
        }
        .tab-btn-active {
          background: rgba(255, 153, 50, 0.1) !important;
          border-bottom: 2px solid ${ORANGE} !important;
          color: ${WHITE} !important;
        }
        input[type="range"] {
          -webkit-appearance: none;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: ${ORANGE};
          cursor: pointer;
          box-shadow: 0 0 10px rgba(255, 153, 50, 0.6);
          transition: transform 0.1s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}} />

      {/* BACKGROUND GLOWS */}
      <div style={{ position: 'relative', width: '100%' }}>
        <div className="bg-glow-orb" style={{ top: '5%', left: '10%', width: '400px', height: '400px', background: ORANGE }} />
        <div className="bg-glow-orb" style={{ top: '35%', right: '10%', width: '450px', height: '450px', background: GREEN }} />
        <div className="bg-glow-orb" style={{ top: '70%', left: '15%', width: '400px', height: '400px', background: TEAL }} />
      </div>

      {/* ── STICKY HEADER & LANG SWITCHER ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${BORDER}`,
        padding: '12px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', background: `linear-gradient(to right, ${ORANGE}, #ffffff, ${GREEN})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            VerveMind AI
          </span>
          <span style={{ fontSize: 13, background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: 4, fontWeight: 600, border: `1px solid ${BORDER}` }}>🇮🇳</span>
        </div>

        <div style={{ display: 'flex', gap: 6, background: 'rgba(255,255,255,0.03)', padding: 4, borderRadius: 20, border: `1px solid ${BORDER}` }}>
          {(Object.keys(LANG_META) as IndiaLang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{
              background: lang === l ? 'rgba(255, 153, 50, 0.12)' : 'transparent',
              border: lang === l ? `1px solid rgba(255, 153, 50, 0.3)` : '1px solid transparent',
              color: lang === l ? ORANGE : MUTED,
              fontSize: 12, fontWeight: 700, padding: '5px 14px',
              borderRadius: 16, cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {LANG_META[l].native}
            </button>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section style={{ position: 'relative', padding: '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 999, background: 'rgba(255, 153, 50, 0.08)', border: `1px solid rgba(255, 153, 50, 0.2)`, color: ORANGE, fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 28 }}>
            <span>🇮🇳</span> {t.badge}
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', color: WHITE, marginBottom: 24 }}>
            {t.h1_line1}<br />
            <span className="text-tricolor-gradient">{t.h1_highlight}</span>{' '}
            <span style={{ color: GREEN }}>{t.h1_pricing}</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: MUTED, lineHeight: 1.65, maxWidth: 720, margin: '0 auto 40px' }}>
            {t.sub}
          </p>

          {/* City pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            {CITIES.map(city => (
              <span key={city} style={{ fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORDER}`, color: MUTED }}>
                📍 {city}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 30px', borderRadius: 12, fontWeight: 800, textDecoration: 'none', fontSize: 15, background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)', transition: 'transform 0.2s' }}>
              {t.cta_whatsapp}
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 30px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15, background: 'rgba(255,255,255,0.04)', color: '#E5E2E1', border: `1px solid ${BORDER}`, transition: 'transform 0.2s' }}>
              {t.cta_call}
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, maxWidth: 800, margin: '0 auto 60px' }}>
            <div className="glow-card" style={{ padding: '20px', borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: ORANGE }}>₹40,000+</div>
              <div style={{ fontSize: '13px', color: MUTED, marginTop: 4 }}>Saved Monthly vs Staff</div>
            </div>
            <div className="glow-card" style={{ padding: '20px', borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: WHITE }}>5 - 15</div>
              <div style={{ fontSize: '13px', color: MUTED, marginTop: 4 }}>Extra Monthly Bookings</div>
            </div>
            <div className="glow-card" style={{ padding: '20px', borderRadius: 16, textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: GREEN }}>48 Hours</div>
              <div style={{ fontSize: '13px', color: MUTED, marginTop: 4 }}>Setup & Integration Time</div>
            </div>
          </div>

          {/* ── ORIGINAL WAVESURFER AI CONVERSATION DEMO ── */}
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <IndiaVoiceDemoPlayer
              audioUrls={{
                en: '/assets/audio/india_demo_en.mp3',
                hi: '/assets/audio/india_demo_hi.mp3',
                te: '/assets/audio/india_demo_te.mp3',
              }}
              title={t.demo_title}
            />
          </div>

        </div>
      </section>

      {/* ── MULTILINGUAL / MULTINICHE VOICE PLAYGROUND ── */}
      <section style={{ padding: '40px 24px 80px', borderTop: `1px solid ${BORDER}`, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: WHITE, marginBottom: 12 }}>{t.demo_title}</h2>
            <p style={{ color: MUTED, fontSize: 15 }}>Select your industry below to listen to our localized Indian AI receptionists.</p>
          </div>

          {/* Niche Buttons Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 32 }}>
            {PRESETS.map((p) => (
              <button
                key={p.nicheId}
                onClick={() => { setActiveNiche(p.nicheId); }}
                style={{
                  background: activeNiche === p.nicheId ? 'rgba(255, 153, 50, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: activeNiche === p.nicheId ? `1px solid ${ORANGE}` : `1px solid ${BORDER}`,
                  color: activeNiche === p.nicheId ? ORANGE : '#d4d4d4',
                  fontSize: 13, fontWeight: 700, padding: '10px 20px',
                  borderRadius: 20, cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Player Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            
            {/* Card 1: Audio Player Card */}
            <div className="glow-card" style={{ borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, background: 'rgba(255,153,50,0.15)', color: ORANGE, padding: '3px 8px', borderRadius: 4, fontWeight: 800, letterSpacing: '0.05em' }}>
                    {t.demo_voice_header}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div className="pulse-orb" style={{ width: 6, height: 6, borderRadius: '50%', background: isPlaying ? GREEN : MUTED }} />
                    <span style={{ fontSize: 11, color: MUTED, fontWeight: 600 }}>{audioStatus}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 800, color: WHITE, marginBottom: 16 }}>
                  {activeNiche.charAt(0).toUpperCase() + activeNiche.slice(1)} Assistant Demo
                </h3>

                {/* Custom Audio Element */}
                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleAudioEnded}
                  style={{ display: 'none' }}
                />

                {/* Custom Audio UI Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(0,0,0,0.2)', padding: 16, borderRadius: 12, border: `1px solid ${BORDER}`, marginBottom: 12 }}>
                  <button
                    onClick={togglePlay}
                    style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: isPlaying ? GREEN : ORANGE,
                      border: 'none', color: '#000',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >
                    {isPlaying ? <Pause size={18} fill="#000" /> : <Play size={18} fill="#000" style={{ marginLeft: 3 }} />}
                  </button>

                  <div style={{ flex: 1 }}>
                    <input
                      type="range"
                      min={0}
                      max={audioDuration || 0}
                      value={audioProgress}
                      onChange={handleProgressBarChange}
                      style={{ width: '100%', accentColor: ORANGE, cursor: 'pointer' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: MUTED, marginTop: 4 }}>
                      <span>{new Date(audioProgress * 1000).toISOString().substr(14, 5)}</span>
                      <span>{new Date(audioDuration * 1000).toISOString().substr(14, 5)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.45 }}>
                {t.demo_voice_note}
              </p>
            </div>

            {/* Card 2: Transcript Call Log */}
            <div className="glow-card-green" style={{ borderRadius: 20, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ fontSize: 11, background: 'rgba(52,211,153,0.15)', color: '#34d399', padding: '3px 8px', borderRadius: 4, fontWeight: 800, letterSpacing: '0.05em' }}>
                    {t.demo_call_header}
                  </span>
                </div>

                <div style={{ overflowY: 'auto', maxHeight: 180, paddingRight: 6, fontSize: 13, color: '#e5e5e5', lineHeight: 1.6 }}>
                  {(t.transcripts[activeNiche] || []).map((log, idx) => (
                    <div key={idx} style={{ marginBottom: 10 }}>
                      <span style={{ color: log.speaker === 'AI' ? '#34d399' : ORANGE, fontWeight: 700 }}>
                        [{log.speaker}]:{' '}
                      </span>
                      <span>{log.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p style={{ fontSize: 11, color: MUTED, borderTop: `1px solid ${BORDER}`, paddingTop: 10, margin: '12px 0 0 0', lineHeight: 1.4 }}>
                {t.demo_call_note}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM / BEFORE VS AFTER ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.01)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', borderRadius: 4, border: '1px solid rgba(255, 153, 50, 0.18)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', padding: '4px 10px', marginBottom: 14, background: 'rgba(255, 153, 50, 0.08)', color: ORANGE }}>
              {t.problem_tag}
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12, color: WHITE }}>
              {t.problem_h2}
            </h2>
            <p style={{ color: MUTED, fontSize: 15, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
              {t.problem_sub}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 50 }}>
            {t.problems.map((card) => (
              <div key={card.num} className="glow-card" style={{ borderRadius: 16, padding: 28 }}>
                <div style={{ fontWeight: 900, fontSize: 44, color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.05em', marginBottom: 8 }}>{card.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: WHITE }}>{card.title}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{card.body}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 4, padding: '4px 10px', fontSize: 11, fontWeight: 700, background: 'rgba(255, 153, 50, 0.07)', border: '1px solid rgba(255, 153, 50, 0.15)', color: ORANGE }}>
                  {card.stat}
                </div>
              </div>
            ))}
          </div>

          {/* Before vs After Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 40 }}>
            <div className="glow-card" style={{ borderColor: 'rgba(239,68,68,0.15)', borderRadius: 20, padding: 32 }}>
              <h3 style={{ color: '#ef4444', fontSize: 19, fontWeight: 800, marginBottom: 20 }}>❌ Without AI Receptionist</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                <li style={{ color: MUTED }}>❌ Missed calls after 6 PM = lost business to competitors</li>
                <li style={{ color: MUTED }}>❌ Lead follow-up takes 2-3 days (or gets completely missed)</li>
                <li style={{ color: MUTED }}>❌ Staff can only handle one customer inquiry at a time</li>
                <li style={{ color: MUTED }}>❌ Old customer logs sit completely inactive in spreadsheet files</li>
                <li style={{ color: MUTED }}>❌ Spending ₹30K–₹50K/mo on front desk salary costs</li>
              </ul>
            </div>
            <div className="glow-card-green" style={{ borderColor: 'rgba(52,211,153,0.15)', borderRadius: 20, padding: 32 }}>
              <h3 style={{ color: '#34d399', fontSize: 19, fontWeight: 800, marginBottom: 20 }}>✅ With VerveMind AI</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                <li style={{ color: WHITE }}>✅ Every single call answered 24/7/365, even during Sundays</li>
                <li style={{ color: WHITE }}>✅ Instant WhatsApp follow-up link sent in under 45 seconds</li>
                <li style={{ color: WHITE }}>✅ Handles 100+ customer inquiries simultaneously</li>
                <li style={{ color: WHITE }}>✅ Automated Win-Back sequences generate 5-15 extra bookings</li>
                <li style={{ color: WHITE }}>✅ Starts at ₹8,000/mo (less than ₹270/day)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-SLIDER ROI CALCULATOR ── */}
      <section id="calculator" style={{ padding: '80px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 850, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: WHITE, marginBottom: 12 }}>{t.calc_title}</h2>
            <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: '0 auto' }}>{t.calc_sub}</p>
          </div>

          <div className="glow-card" style={{ padding: '36px 28px', borderRadius: 24, border: '1px solid rgba(255, 153, 50, 0.15)' }}>
            
            {/* Presets row */}
            <div style={{ marginBottom: 32, textAlign: 'center' }}>
              <span style={{ fontSize: 13, color: MUTED, marginRight: 12, fontWeight: 600 }}>{t.calc_preset_label}</span>
              <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: 8 }}>
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => handlePresetSelect(p)}
                    style={{
                      background: (missedCalls === p.missedCalls && avgValue === p.avgValue && followupRate === p.follow) ? 'rgba(255,153,50,0.12)' : 'rgba(255,255,255,0.03)',
                      border: (missedCalls === p.missedCalls && avgValue === p.avgValue && followupRate === p.follow) ? `1px solid ${ORANGE}` : `1px solid ${BORDER}`,
                      color: (missedCalls === p.missedCalls && avgValue === p.avgValue && followupRate === p.follow) ? ORANGE : MUTED,
                      fontSize: 12, fontWeight: 700, padding: '6px 14px',
                      borderRadius: 16, cursor: 'pointer', transition: 'all 0.2s',
                    }}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 32, alignItems: 'center' }}>
              
              {/* Sliders Container */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Slider 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <label style={{ fontSize: 13, color: MUTED, fontWeight: 600 }}>📞 {t.calc_slider_missed}</label>
                    <span style={{ fontSize: 15, fontWeight: 800, color: ORANGE }}>{missedCalls}</span>
                  </div>
                  <input
                    type="range" min={1} max={25} value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.15)', marginTop: 4 }}>
                    <span>1</span><span>25</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div>
                  <div style={{ display: 'flex', justifycontent: 'space-between', display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <label style={{ fontSize: 13, color: MUTED, fontWeight: 600 }}>💰 {t.calc_slider_value}</label>
                    <span style={{ fontSize: 15, fontWeight: 800, color: ORANGE }}>₹{avgValue.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range" min={500} max={50000} step={500} value={avgValue}
                    onChange={(e) => setAvgValue(Number(e.target.value))}
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.15)', marginTop: 4 }}>
                    <span>₹500</span><span>₹50,000</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <label style={{ fontSize: 13, color: MUTED, fontWeight: 600 }}>🔄 {t.calc_slider_followup}</label>
                    <span style={{ fontSize: 15, fontWeight: 800, color: ORANGE }}>{followupRate}%</span>
                  </div>
                  <input
                    type="range" min={10} max={100} step={5} value={followupRate}
                    onChange={(e) => setFollowupRate(Number(e.target.value))}
                    style={{ width: '100%', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.15)', marginTop: 4 }}>
                    <span>10% (Low)</span><span>100% (Perfect)</span>
                  </div>
                </div>
              </div>

              {/* Computations Card */}
              <div style={{ background: 'rgba(0, 0, 0, 0.3)', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: '#ef4444', fontWeight: 800, letterSpacing: '0.05em' }}>{t.calc_result_losing}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#ef4444', margin: '6px 0' }}>{formatINR(monthlyLoss)}<span style={{ fontSize: 13, fontWeight: 500, color: MUTED }}>/mo</span></div>
                
                <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', margin: '14px 0' }} />

                <div style={{ fontSize: 11, color: '#34d399', fontWeight: 800, letterSpacing: '0.05em' }}>{t.calc_result_recoverable}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#34d399', margin: '6px 0' }}>{formatINR(recoveredRevenue)}<span style={{ fontSize: 13, fontWeight: 500, color: MUTED }}>/mo</span></div>
                
                <p style={{ fontSize: 10, color: MUTED, margin: '8px 0 0 0', lineHeight: 1.4 }}>{t.calc_note}</p>
              </div>
            </div>

            {/* Bottom calculation status row */}
            <div style={{ marginTop: 28, background: 'rgba(52,211,153,0.04)', border: '1px solid rgba(52,211,153,0.15)', padding: '16px 20px', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#34d399' }}>VerveMind Cost: Start ₹8,000/mo.</span>
                <span style={{ fontSize: 13, color: MUTED, marginLeft: 16 }}>{t.calc_result_roi}: <b style={{ color: '#34d399' }}>{formatINR(netProfitBoost)}/mo</b></span>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(reportText)}`}
                target="_blank" rel="noopener noreferrer"
                style={{ background: '#34d399', color: '#000', padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 800, textDecoration: 'none', transition: 'all 0.2s' }}
              >
                {t.calc_cta}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── TABBED RESOURCE SHOWCASE HUB ── */}
      <section id="resources" style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.01)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 950, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: WHITE, marginBottom: 12 }}>{t.hub_title}</h2>
            <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, margin: '0 auto' }}>{t.hub_sub}</p>
          </div>

          <div className="glow-card" style={{ padding: 24, borderRadius: 20 }}>
            
            {/* Tab Headers */}
            <div style={{ display: 'flex', borderBottom: `1px solid ${BORDER}`, paddingBottom: 8, marginBottom: 24, overflowX: 'auto', gap: 8 }}>
              <button
                className={`tab-btn ${activeTab === 'gbp' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('gbp')}
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid transparent', color: activeTab === 'gbp' ? WHITE : MUTED, padding: '8px 16px', fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {t.hub_tab_gbp}
              </button>
              <button
                className={`tab-btn ${activeTab === 'whatsapp' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('whatsapp')}
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid transparent', color: activeTab === 'whatsapp' ? WHITE : MUTED, padding: '8px 16px', fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {t.hub_tab_wa}
              </button>
              <button
                className={`tab-btn ${activeTab === 'recall' ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveTab('recall')}
                style={{ background: 'transparent', border: 'none', borderBottom: '2px solid transparent', color: activeTab === 'recall' ? WHITE : MUTED, padding: '8px 16px', fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {t.hub_tab_recall}
              </button>
            </div>

            {/* Tab contents */}
            {activeTab === 'gbp' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 24 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: WHITE, marginBottom: 12 }}>Google Business Profile 15-Point Audit</h3>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.5, marginBottom: 20 }}>Maximize your local search rankings. 73% of Indian patients look at Google reviews before calling a clinic.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                      <span style={{ color: GREEN, fontWeight: 700 }}>✔</span>
                      <span><b>Verify ownership:</b> Claim your clinic name exactly matching your signboard.</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                      <span style={{ color: GREEN, fontWeight: 700 }}>✔</span>
                      <span><b>WhatsApp link:</b> Add a direct click-to-chat WhatsApp link (`https://wa.me/917995851271`) in website field.</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                      <span style={{ color: GREEN, fontWeight: 700 }}>✔</span>
                      <span><b>List all services:</b> Add root canal, dental cleaning, or hydra facials with INR pricing.</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
                      <span style={{ color: GREEN, fontWeight: 700 }}>✔</span>
                      <span><b>Flag UPI acceptance:</b> Reassure patients you accept GPay, PhonePe, and Paytm.</span>
                    </div>
                  </div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${BORDER}`, padding: 24, borderRadius: 16, display: 'flex', flexDirection: 'column', justifycontent: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>📍</div>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: 14, color: WHITE }}>Download full 15-Point Checklist PDF</h4>
                  <input
                    type="email"
                    value={leadEmails.gbp}
                    onChange={(e) => setLeadEmails(prev => ({ ...prev, gbp: e.target.value }))}
                    placeholder={t.hub_download_placeholder}
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: WHITE, borderRadius: 8, padding: '10px 14px', fontSize: 13, marginBottom: 8, textAlign: 'center' }}
                  />
                  <button
                    onClick={() => handleDownload('GBP', 'gbp')}
                    style={{ background: ORANGE, color: '#000', border: 'none', padding: '10px 14px', borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: 'pointer' }}
                  >
                    {t.hub_download_btn}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'whatsapp' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 24 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: WHITE, marginBottom: 12 }}>Copy-Paste Confirmation & Reminder Templates</h3>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.5, marginBottom: 16 }}>Reduce no-show rates by up to 60% with these pre-formatted templates in English and Hindi.</p>
                  
                  {/* Copyable code box */}
                  <div style={{ background: '#111', border: `1px solid ${BORDER}`, padding: '16px 20px', borderRadius: 8, position: 'relative', minHeight: 120 }}>
                    <button
                      onClick={() => handleCopy('wa', '✅ Appointment Confirmed\n\nDear [Patient Name],\nYour appointment with Dr. [Doctor Name] is confirmed:\n📅 Date: [Date]\n⏰ Time: [Time]\n📍 Location: [Clinic Name], [Area]\n\nTo reschedule, reply "RESCHEDULE".')}
                      style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(255,255,255,0.06)', border: `1px solid ${BORDER}`, color: WHITE, borderRadius: 4, padding: '4px 10px', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      {copiedStates.wa ? <Check size={12} style={{ color: '#34d399' }} /> : <Copy size={12} />}
                      {copiedStates.wa ? t.hub_btn_copied : t.hub_btn_copy}
                    </button>
                    <code style={{ fontSize: 12, fontFamily: 'monospace', color: '#e5e5e5', display: 'block', whiteSpace: 'pre-wrap', marginTop: 16 }}>
                      {`✅ Appointment Confirmed\n\nDear [Patient Name],\nYour appointment with Dr. [Doctor Name] is confirmed:\n📅 Date: [Date]\n⏰ Time: [Time]\n📍 Location: [Clinic Name], [Area]\n\nTo reschedule, reply "RESCHEDULE".`}
                    </code>
                  </div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${BORDER}`, padding: 24, borderRadius: 16, display: 'flex', flexDirection: 'column', justifycontent: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>💬</div>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: 14, color: WHITE }}>Download 10 WhatsApp Templates PDF</h4>
                  <input
                    type="email"
                    value={leadEmails.whatsapp}
                    onChange={(e) => setLeadEmails(prev => ({ ...prev, whatsapp: e.target.value }))}
                    placeholder={t.hub_download_placeholder}
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: WHITE, borderRadius: 8, padding: '10px 14px', fontSize: 13, marginBottom: 8, textAlign: 'center' }}
                  />
                  <button
                    onClick={() => handleDownload('TEMPLATES', 'whatsapp')}
                    style={{ background: ORANGE, color: '#000', border: 'none', padding: '10px 14px', borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: 'pointer' }}
                  >
                    {t.hub_download_btn}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'recall' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 24 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: WHITE, marginBottom: 12 }}>Patient Recall & Re-Engagement Scripts</h3>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.5, marginBottom: 16 }}>Proven templates to bring back patients who haven't visited in 90+ days. Average booking rate of 12-18%.</p>
                  
                  {/* Copyable code box */}
                  <div style={{ background: '#111', border: `1px solid ${BORDER}`, padding: '16px 20px', borderRadius: 8, position: 'relative', minHeight: 120 }}>
                    <button
                      onClick={() => handleCopy('recall', '🦷 Regular Checkup Due!\n\nNamaste [Patient Name],\nAapki last visit [Clinic Name] mein 3 mahine pehle thi. Aapka regular checkup due hai.\nRegular checkups se bade dental problems avoid hote hain aur treatment ka kharcha bhi kam rehta hai. 💰\n\n📅 Book karne ke liye "BOOK" reply karein.')}
                      style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(255,255,255,0.06)', border: `1px solid ${BORDER}`, color: WHITE, borderRadius: 4, padding: '4px 10px', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      {copiedStates.recall ? <Check size={12} style={{ color: '#34d399' }} /> : <Copy size={12} />}
                      {copiedStates.recall ? t.hub_btn_copied : t.hub_btn_copy}
                    </button>
                    <code style={{ fontSize: 12, fontFamily: 'monospace', color: '#e5e5e5', display: 'block', whiteSpace: 'pre-wrap', marginTop: 16 }}>
                      {`🦷 Regular Checkup Due!\n\nNamaste [Patient Name],\nAapki last visit [Clinic Name] mein 3 mahine pehle thi. Aapka regular checkup due hai.\nRegular checkups se bade dental problems avoid hote hain aur treatment ka kharcha bhi kam rehta hai. 💰\n\n📅 Book karne ke liye "BOOK" reply karein.`}
                    </code>
                  </div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${BORDER}`, padding: 24, borderRadius: 16, display: 'flex', flexDirection: 'column', justifycontent: 'center', textAlign: 'center' }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>🔄</div>
                  <h4 style={{ margin: '0 0 12px 0', fontSize: 14, color: WHITE }}>Download 5 Recall Scripts PDF</h4>
                  <input
                    type="email"
                    value={leadEmails.recall}
                    onChange={(e) => setLeadEmails(prev => ({ ...prev, recall: e.target.value }))}
                    placeholder={t.hub_download_placeholder}
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: WHITE, borderRadius: 8, padding: '10px 14px', fontSize: 13, marginBottom: 8, textAlign: 'center' }}
                  />
                  <button
                    onClick={() => handleDownload('RECALL', 'recall')}
                    style={{ background: ORANGE, color: '#000', border: 'none', padding: '10px 14px', borderRadius: 8, fontSize: 13, fontWeight: 800, cursor: 'pointer' }}
                  >
                    {t.hub_download_btn}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section id="pricing" style={{ padding: '80px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 850, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: WHITE, marginBottom: 12 }}>{t.pricing_h2}</h2>
            <p style={{ color: MUTED, fontSize: 15 }}>{t.pricing_sub}</p>
          </div>

          <div className="glow-card" style={{ padding: '40px 32px', borderRadius: 24, border: `1px solid ${ORANGE}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
              <div>
                <span style={{ fontSize: 12, background: 'rgba(255, 153, 50, 0.15)', color: ORANGE, padding: '4px 10px', borderRadius: 4, fontWeight: 800, letterSpacing: '0.05em' }}>
                  AI DIGITAL ASSISTANT PLAN
                </span>
                <h3 style={{ fontSize: '32px', fontWeight: 900, color: WHITE, margin: '12px 0 6px' }}>{t.pricing_amount}</h3>
                <p style={{ color: MUTED, fontSize: 14, margin: 0 }}>{t.pricing_note}</p>
              </div>

              <div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontWeight: 800, textDecoration: 'none', background: `linear-gradient(135deg, ${ORANGE}, #ffaa55)`, color: '#000', fontSize: 15, transition: 'transform 0.2s' }}>
                  {t.pricing_cta}
                </a>
              </div>
            </div>

            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.06)', margin: '24px 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, fontSize: 13, color: '#e5e5e5' }}>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: GREEN }}>✔</span>
                <span>24/7 Call answering & booking</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: GREEN }}>✔</span>
                <span>Multilingual (Hinglish/Telugu/Hindi)</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: GREEN }}>✔</span>
                <span>WhatsApp API Integration Included</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: GREEN }}>✔</span>
                <span>Practo/Lead portal CRM syncing</span>
              </div>
            </div>

            <div style={{ marginTop: 24, padding: '12px 16px', background: 'rgba(19, 136, 8, 0.08)', border: '1px solid rgba(19, 136, 8, 0.2)', borderRadius: 12, fontSize: 12, color: '#e5e5e5', display: 'flex', gap: 8, alignItems: 'center' }}>
              <span>🎁</span>
              <span>{t.pricing_starter_bonus}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── BHARAT-NATIVE TRUST MARKERS (ABDM, DPDP compliance, payments) ── */}
      <section style={{ padding: '40px 24px', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, position: 'relative', zIndex: 2, background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          
          {/* Compliance */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.02)', padding: '8px 16px', borderRadius: 8, border: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 20 }}>🛡</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: WHITE }}>ABDM Compatible</div>
                <div style={{ fontSize: 10, color: MUTED }}>Ayushman Bharat Digital Mission</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.02)', padding: '8px 16px', borderRadius: 8, border: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 20 }}>📜</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: WHITE }}>DPDP Act Compliant</div>
                <div style={{ fontSize: 10, color: MUTED }}>India Data Protection Act 2023</div>
              </div>
            </div>
          </div>

          {/* Payments Row */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 12 }}>
              SECURE INR AUTO-PAY COMPATIBILITY
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, alignItems: 'center', opacity: 0.65 }}>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.05em', color: WHITE }}>BHIM UPI</span>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.05em', color: WHITE }}>Razorpay</span>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.05em', color: WHITE }}>Google Pay</span>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.05em', color: WHITE }}>PhonePe</span>
              <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.05em', color: WHITE }}>Paytm</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION SECTION ── */}
      <section id="faq" style={{ padding: '80px 24px', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 750, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: WHITE, marginBottom: 12 }}>{t.faq_title}</h2>
            <p style={{ color: MUTED, fontSize: 15 }}>{t.faq_sub}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {t.faqs.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isOpen ? 'rgba(255, 153, 50, 0.2)' : BORDER}`,
                    borderRadius: 12,
                    overflow: 'hidden',
                    transition: 'all 0.3s'
                  }}
                >
                  <button
                    onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: WHITE,
                      fontWeight: 700,
                      fontSize: 15,
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={16} style={{ color: ORANGE }} /> : <ChevronDown size={16} style={{ color: MUTED }} />}
                  </button>
                  
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: MUTED,
                      fontSize: 14,
                      lineHeight: 1.6,
                      borderTop: `1px solid ${BORDER}`,
                      paddingTop: 16
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '80px 24px 120px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="glow-card" style={{ maxWidth: 640, margin: '0 auto', border: `1px solid ${GREEN}`, borderRadius: 24, padding: '48px 40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: WHITE, marginBottom: 12 }}>
            {t.cta_h2}
          </h2>
          <p style={{ color: MUTED, marginBottom: 36, lineHeight: 1.65 }}>
            {t.cta_sub}
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 800, textDecoration: 'none', background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)', transition: 'transform 0.2s' }}>
              {t.cta_whatsapp}
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', color: '#E5E2E1', border: `1px solid ${BORDER}`, transition: 'transform 0.2s' }}>
              {t.cta_call}
            </a>
          </div>
          
          <div style={{ marginTop: 28, fontSize: 12, color: MUTED }}>
            Business Queries: <a href="mailto:Sameed@vervemindai.com" style={{ color: ORANGE, textDecoration: 'none', fontWeight: 600 }}>Sameed@vervemindai.com</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '40px 24px', textAlign: 'center', fontSize: 12, color: MUTED, position: 'relative', zIndex: 2 }}>
        <p>© 2026 VerveMind AI. All rights reserved.</p>
        <p style={{ marginTop: 8 }}>
          Inquiries: <a href="mailto:Sameed@vervemindai.com" style={{ color: ORANGE, textDecoration: 'none' }}>Sameed@vervemindai.com</a>
        </p>
      </footer>

    </div>
  );
}
