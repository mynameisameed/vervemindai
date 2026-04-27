import React from 'react';
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'VerveMind AI for HVAC | Never Miss an Emergency Call',
  description: 'AI answering service and dispatch engine for HVAC companies. Capture every after-hours emergency, dispatch faster, and fill your seasonal schedule automatically.',
  alternates: { canonical: 'https://hvac.vervemindai.com' },
};

const ACCENT = '#FB923C';
const ACCENT_TEXT = '#431407';
const ACCENT_GRADIENT = 'linear-gradient(135deg, #ffedd5, #f97316)';

export default function HVACPage() {
  return (
    <NicheLayout
      nicheLabel="HVAC"
      accentColor={ACCENT}
      accentTextColor={ACCENT_TEXT}
      accentGradient={ACCENT_GRADIENT}
    >
      {/* ── Hero ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '52px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '4px', padding: '5px 12px', marginBottom: '22px', background: 'rgba(251,146,60,0.08)', border: '1px solid rgba(251,146,60,0.2)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ACCENT, display: 'inline-block', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>HVAC ENGINE OS.1</span>
          </div>

          <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '18px', color: 'var(--text)' }}>
            Capture Every<br />
            <span style={{ background: 'linear-gradient(135deg, #FB923C, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Emergency Job
            </span> 24/7
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65, maxWidth: '440px', marginBottom: '30px' }}>
            Deploy conversational AI that answers service calls, qualifies emergencies, and books jobs directly into ServiceTitan or Jobber. Stop losing jobs to competitors.
          </p>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 800, padding: '12px 24px', borderRadius: 'var(--r)', textDecoration: 'none', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
              Deploy Dispatch AI Now →
            </a>
            <a href="/pricing" style={{ background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: '13px', fontWeight: 600, padding: '11px 20px', borderRadius: 'var(--r)', textDecoration: 'none' }}>
              Calculate ROI
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {[
                { bg: '#431407', color: '#FB923C', letter: 'M' },
                { bg: '#7c2d12', color: '#f97316', letter: 'T' },
                { bg: '#9a3412', color: '#fdba74', letter: 'R' },
              ].map((a, i) => (
                <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--bg)', marginRight: '-8px', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: a.bg, color: a.color }}>
                  {a.letter}
                </div>
              ))}
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', paddingLeft: '16px' }}>Trusted by HVAC companies across the US</span>
          </div>
        </div>

        <BookingPanel
          panelTitle="Live HVAC Dispatch"
          accentColor={ACCENT}
          notifications={[
            { icon: '❄️', title: 'AC Emergency — After Hours', subtitle: 'Tom B. — No cooling, 95°F outside · Dispatched immediately', badge: 'Dispatched', variant: 'accent' },
            { icon: '🔧', title: 'Seasonal Tune-Up — Booked', subtitle: 'Davis family — Spring AC service · Thursday 10am', badge: 'Scheduled', variant: 'positive' },
          ]}
          stats={[
            { value: '100%', label: 'Calls answered', color: ACCENT },
            { value: '+38%', label: 'Peak-season jobs', color: '#34D399' },
            { value: '90s', label: 'Dispatch speed' },
          ]}
        />
      </div>

      {/* ── Problem Section ── */}
      <div style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
          <div style={{ display: 'inline-block', borderRadius: '4px', border: '1px solid rgba(251,146,60,0.18)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', padding: '4px 10px', marginBottom: '14px', background: 'rgba(251,146,60,0.08)', color: ACCENT }}>
            THE PROBLEM
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '12px', color: 'var(--text)' }}>
            Peak-season calls you<br />can&apos;t afford to miss
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '520px', lineHeight: 1.6, marginBottom: '36px' }}>
            HVAC companies lose their highest-value jobs in the moments they&apos;re already slammed with work.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { num: '01', title: 'Emergency Calls Go to Voicemail', body: 'When your team is on a job, new emergency calls go unanswered. Those homeowners book whoever picks up next.', stat: '⚠ 67% call 3+ companies' },
              { num: '02', title: 'Peak-Season Overflow Lost', body: 'July and August bring more calls than your team can handle. Without AI triage, you lose jobs you could have scheduled.', stat: '⚠ $4,200 avg lost per peak week' },
              { num: '03', title: 'Follow-Up Quotes Ignored', body: 'Estimates sent without follow-up close at under 20%. Automated follow-up sequences 3x conversion rates.', stat: '⚠ 58% of quotes: no follow-up' },
            ].map((card) => (
              <div key={card.num} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '22px' }}>
                <div style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 900, fontSize: '40px', color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.05em', marginBottom: '10px' }}>{card.num}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '7px', color: 'var(--text)' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: 1.6 }}>{card.body}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', marginTop: '12px', borderRadius: '4px', padding: '4px 10px', fontSize: '11px', fontWeight: 700, background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.15)', color: 'var(--amber)' }}>
                  {card.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-xl)', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '10px', color: ACCENT }}>
            Ready to capture every job?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>
            Book a free 20-minute audit and see exactly what your HVAC company is losing to missed calls.
          </p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 800, padding: '14px 28px', borderRadius: 'var(--r)', textDecoration: 'none', display: 'inline-block', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
            Book My Free HVAC Audit →
          </a>
        </div>
      </div>
    </NicheLayout>
  );
}
