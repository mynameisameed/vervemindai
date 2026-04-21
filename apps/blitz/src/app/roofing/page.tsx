import React from 'react';
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'VerveMind AI for Roofing | Capture Every Storm Lead',
  description: 'AI answering and lead qualification for roofing companies. Capture storm damage leads instantly, follow up on every quote, and fill your crew calendar year-round.',
  alternates: { canonical: 'https://roofing.vervemindai.com' },
};

const ACCENT = '#86EFAC';
const ACCENT_TEXT = '#14532d';
const ACCENT_GRADIENT = 'linear-gradient(135deg, #dcfce7, #4ade80)';

export default function RoofingPage() {
  return (
    <NicheLayout
      nicheLabel="Roofing"
      accentColor={ACCENT}
      accentTextColor={ACCENT_TEXT}
      accentGradient={ACCENT_GRADIENT}
    >
      {/* ── Hero ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '52px', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '4px', padding: '5px 12px', marginBottom: '22px', background: 'rgba(134,239,172,0.08)', border: '1px solid rgba(134,239,172,0.2)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ACCENT, display: 'inline-block', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>ROOFING AI SYSTEM</span>
          </div>

          <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '18px', color: 'var(--text)' }}>
            Capture Every<br />
            <span style={{ background: 'linear-gradient(135deg, #86EFAC, #16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Storm Lead.
            </span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65, maxWidth: '440px', marginBottom: '30px' }}>
            After a storm, homeowners call every roofing company they can find. Your AI answers instantly, qualifies the lead, and books the inspection — so your crew shows up to jobs your competitors missed.
          </p>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 800, padding: '12px 24px', borderRadius: 'var(--r)', textDecoration: 'none', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
              Book Free Roofing Audit →
            </a>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: '13px', fontWeight: 600, padding: '11px 20px', borderRadius: 'var(--r)', textDecoration: 'none' }}>
              Watch Demo
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {[
                { bg: '#14532d', color: '#86EFAC', letter: 'J' },
                { bg: '#166534', color: '#4ade80', letter: 'C' },
                { bg: '#15803d', color: '#bbf7d0', letter: 'A' },
              ].map((a, i) => (
                <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--bg)', marginRight: '-8px', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: a.bg, color: a.color }}>
                  {a.letter}
                </div>
              ))}
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', paddingLeft: '16px' }}>Trusted by roofing contractors across the US</span>
          </div>
        </div>

        <BookingPanel
          panelTitle="Live Roofing Activity"
          accentColor={ACCENT}
          notifications={[
            { icon: '🏚️', title: 'Storm Damage — Hot Lead', subtitle: 'Mike P. — Hail damage, insurance claim · Inspection booked', badge: 'Qualified', variant: 'accent' },
            { icon: '📝', title: 'Quote Follow-Up — Responded', subtitle: "Chen family — \"Yes, let's move forward with the quote\"", badge: 'Closed', variant: 'positive' },
          ]}
          stats={[
            { value: '3x', label: 'Quote close rate', color: ACCENT },
            { value: '< 60s', label: 'Lead response time', color: '#34D399' },
            { value: '24/7', label: 'Storm capture' },
          ]}
        />
      </div>

      {/* ── Problem Section ── */}
      <div style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
          <div style={{ display: 'inline-block', borderRadius: '4px', border: '1px solid rgba(134,239,172,0.18)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', padding: '4px 10px', marginBottom: '14px', background: 'rgba(134,239,172,0.08)', color: ACCENT }}>
            THE PROBLEM
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '12px', color: 'var(--text)' }}>
            Storm season moves fast.<br />Slow follow-up kills revenue.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '520px', lineHeight: 1.6, marginBottom: '36px' }}>
            Roofing companies lose their best leads in the 24-hour window after a weather event.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { num: '01', title: 'Storm Leads Expire in Hours', body: 'After a hail event, homeowners call every roofer on Google. The first company to answer books the job. Speed wins.', stat: '⚠ 78% choose first responder' },
              { num: '02', title: 'Quote Follow-Up Decays Fast', body: 'Estimates without follow-up close below 20%. Most contractors send the quote and wait. AI follows up automatically on day 2 and day 5.', stat: '⚠ 60% of quotes: no follow-up' },
              { num: '03', title: 'Off-Season Pipeline Dries Up', body: 'Without proactive outreach to past customers, winter months go quiet. AI reactivation fills the gap with maintenance and inspection leads.', stat: '⚠ 40% revenue drop off-season' },
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
            Ready to capture more storm jobs?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>
            Book a free 20-minute audit and see exactly how many leads your roofing company is losing to slow response.
          </p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 800, padding: '14px 28px', borderRadius: 'var(--r)', textDecoration: 'none', display: 'inline-block', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
            Book My Free Roofing Audit →
          </a>
        </div>
      </div>
    </NicheLayout>
  );
}
