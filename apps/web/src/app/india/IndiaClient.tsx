"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { type IndiaLang, LANG_META, i18n } from './i18n';

const IndiaVoiceDemoPlayer = dynamic(() => import('../../components/IndiaVoiceDemoPlayer'), { ssr: false });
const MissedCallCalculator = dynamic(() => import('../../components/MissedCallCalculator'), { ssr: false });

const TEAL = '#00F5D4';
const BG = '#09090B';
const BORDER = 'rgba(255,255,255,0.06)';
const MUTED = '#A1A1AA';
const WHITE = '#FFFFFF';
const WHATSAPP_LINK = 'https://wa.me/917995851271?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo%20for%20my%20Indian%20business';
const CALENDLY = 'https://calendly.com/vervemindai/lead?utm_source=vervemindai.com&utm_medium=website&utm_campaign=india&utm_content=hero_cta';
const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi NCR', 'Pune'];

export default function IndiaClient() {
  const [lang, setLang] = useState<IndiaLang>('en');
  const t = i18n[lang];

  return (
    <div style={{ background: BG, color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── LANGUAGE SWITCHER (sticky) ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${BORDER}`,
        padding: '10px 24px',
        display: 'flex', justifyContent: 'center', gap: 6,
      }}>
        {(Object.keys(LANG_META) as IndiaLang[]).map((l) => (
          <button key={l} onClick={() => setLang(l)} style={{
            background: lang === l ? 'rgba(0,245,212,0.12)' : 'transparent',
            border: lang === l ? `1px solid rgba(0,245,212,0.3)` : '1px solid transparent',
            color: lang === l ? TEAL : MUTED,
            fontSize: 13, fontWeight: 600, padding: '6px 16px',
            borderRadius: 20, cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {LANG_META[l].native}
          </button>
        ))}
      </div>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '50vw', background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 999, background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.2)', color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 32 }}>
            <span>🇮🇳</span> {t.badge}
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', color: WHITE, marginBottom: 24 }}>
            {t.h1_line1}<br />
            <span style={{ color: TEAL }}>{t.h1_highlight}</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: MUTED, lineHeight: 1.65, maxWidth: 600, margin: '0 auto 40px' }}>
            {t.sub}
          </p>

          {/* City pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            {cities.map(city => (
              <span key={city} style={{ fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}`, color: MUTED }}>
                📍 {city}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15, background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}>
              {t.cta_whatsapp}
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15, background: 'rgba(255,255,255,0.04)', color: '#E5E2E1', border: '1px solid rgba(255,255,255,0.12)' }}>
              {t.cta_call}
            </a>
          </div>

          <div style={{ maxWidth: 480, margin: '0 auto' }}>
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

      {/* ── PROBLEM SECTION ── */}
      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'inline-block', borderRadius: 4, border: '1px solid rgba(251,191,36,0.18)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', padding: '4px 10px', marginBottom: 14, background: 'rgba(251,191,36,0.08)', color: '#FBBF24' }}>
            {t.problem_tag}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: 12, color: WHITE }}>
            {t.problem_h2}
          </h2>
          <p style={{ color: MUTED, fontSize: 15, maxWidth: 520, lineHeight: 1.6, marginBottom: 36 }}>
            {t.problem_sub}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {t.problems.map((card) => (
              <div key={card.num} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 }}>
                <div style={{ fontWeight: 900, fontSize: 40, color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.05em', marginBottom: 10 }}>{card.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: WHITE }}>{card.title}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>{card.body}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 4, padding: '4px 10px', fontSize: 11, fontWeight: 700, background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.15)', color: '#FBBF24' }}>
                  {card.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE TOOLS ── */}
      <section style={{ padding: '80px 24px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', borderRadius: 4, border: '1px solid rgba(0,245,212,0.18)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', padding: '4px 10px', marginBottom: 14, background: 'rgba(0,245,212,0.08)', color: TEAL }}>
              FREE TOOLS
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 12, color: WHITE }}>
              {t.tools_h2}
            </h2>
            <p style={{ color: MUTED, fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
              {t.tools_sub}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {t.tools.map((tool) => (
              <div key={tool.keyword} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontSize: 32 }}>{tool.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: WHITE }}>{tool.title}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.6, flex: 1 }}>{tool.desc}</p>
                <a
                  href={`https://wa.me/917995851271?text=${tool.keyword}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '10px 18px', borderRadius: 10,
                    background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)',
                    color: '#25D366', fontSize: 13, fontWeight: 700,
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                >
                  💬 WhatsApp &quot;{tool.keyword}&quot;
                </a>
              </div>
            ))}
          </div>

          {/* Interactive Calculator */}
          <div style={{ marginTop: 48 }}>
            <MissedCallCalculator />
          </div>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section style={{ padding: '80px 24px', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 800, color: WHITE, letterSpacing: '-0.03em', marginBottom: 12 }}>
              {t.verticals_h2}
            </h2>
            <p style={{ color: MUTED, fontSize: 16, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
              {t.verticals_sub}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {t.verticals.map(v => (
              <div key={v.title} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 20, padding: 28, backdropFilter: 'blur(20px)', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{v.emoji}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: WHITE, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.01)', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`,
            borderRadius: 24, padding: 48,
            display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 20, color: WHITE }}>
                {t.pricing_h2}
              </h2>
              <div style={{ fontSize: 24, fontWeight: 800, color: TEAL, marginBottom: 8 }}>
                {t.pricing_amount}
              </div>
              <p style={{ color: MUTED, fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
                {t.pricing_note}
              </p>
              <p style={{ color: MUTED, fontSize: 13 }}>
                {t.pricing_sub}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: 15, fontWeight: 800, padding: '16px 32px',
                  borderRadius: 12, textDecoration: 'none',
                  background: `linear-gradient(135deg, #00DFC1, ${TEAL})`, color: BG,
                  display: 'inline-block', whiteSpace: 'nowrap',
                }}>
                {t.pricing_cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ padding: '80px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto', background: 'linear-gradient(180deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)', border: '1px solid rgba(0,245,212,0.15)', borderRadius: 24, padding: '48px 40px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: WHITE, marginBottom: 12 }}>
            {t.cta_h2}
          </h2>
          <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.65 }}>
            {t.cta_sub}
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}>
              {t.cta_whatsapp}
            </a>
            <a href={`${CALENDLY.replace('hero_cta', 'bottom_cta')}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', color: '#E5E2E1', border: `1px solid ${BORDER}` }}>
              {t.cta_call}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
