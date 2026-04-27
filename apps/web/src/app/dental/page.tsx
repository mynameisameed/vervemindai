import React from 'react';
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'VerveMind AI for Dental | Fill Chairs & Eliminate No-Shows',
  description: 'AI receptionist and recall engine built for dental practices. Answer emergency calls 24/7, automate 6-month recalls, and cut no-shows by 60%.',
  alternates: { canonical: 'https://dental.vervemindai.com' },
};

const ACCENT = '#7DD3FC';
const ACCENT_TEXT = '#0c4a6e';
const ACCENT_GRADIENT = 'linear-gradient(135deg, #e0f2fe, #38bdf8)';

export default function DentalPage() {
  return (
    <NicheLayout
      nicheLabel="Dental"
      accentColor={ACCENT}
      accentTextColor={ACCENT_TEXT}
      accentGradient={ACCENT_GRADIENT}
    >
      {/* ── Hero ── */}
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '72px 32px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '52px',
        alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            borderRadius: '4px', padding: '5px 12px', marginBottom: '22px',
            background: 'rgba(125,211,252,0.08)', border: '1px solid rgba(125,211,252,0.2)',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: ACCENT, display: 'inline-block',
              animation: 'pulse-dot 1.8s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>
              DENTAL ENGINE OS.1
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 900,
            lineHeight: 1.0, letterSpacing: '-0.04em',
            marginBottom: '18px', color: 'var(--text)',
          }}>
            Automate Your<br />
            <span style={{
              background: 'linear-gradient(135deg, #7DD3FC, #0284c7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Dental Front Desk
            </span> 24/7
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65, maxWidth: '440px', marginBottom: '30px' }}>
            Deploy AI that handles insurance FAQs, qualifies new patients, and fills your hygiene schedule automatically. Zero missed patients. Zero receptionist burnout.
          </p>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{
              fontSize: '13px', fontWeight: 800, padding: '12px 24px',
              borderRadius: 'var(--r)', textDecoration: 'none',
              background: ACCENT_GRADIENT, color: ACCENT_TEXT,
            }}>
              Deploy Receptionist Now →
            </a>
            <a href="/pricing" style={{
              background: 'transparent', border: '1px solid var(--border-strong)',
              color: 'var(--text)', fontSize: '13px', fontWeight: 600,
              padding: '11px 20px', borderRadius: 'var(--r)', textDecoration: 'none',
            }}>
              Calculate ROI
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {[
                { bg: '#0c4a6e', color: '#7DD3FC', letter: 'D' },
                { bg: '#075985', color: '#38bdf8', letter: 'R' },
                { bg: '#0369a1', color: '#bae6fd', letter: 'K' },
              ].map((a, i) => (
                <div key={i} style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  border: '2px solid var(--bg)', marginRight: '-8px',
                  fontSize: '10px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: a.bg, color: a.color,
                }}>
                  {a.letter}
                </div>
              ))}
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', paddingLeft: '16px' }}>
              Trusted by dental practices across the US
            </span>
          </div>
        </div>

        <BookingPanel
          panelTitle="Live Patient Activity"
          accentColor={ACCENT}
          notifications={[
            { icon: '🦷', title: 'New Patient — Emergency', subtitle: 'James R. — Tooth pain, after hours · Triaged & booked', badge: 'Captured', variant: 'accent' },
            { icon: '📋', title: '6-Month Recall — Confirmed', subtitle: 'Lisa M. — "Tuesday at 10am works great!"', badge: 'Booked', variant: 'positive' },
          ]}
          stats={[
            { value: '94%', label: 'Recall success rate', color: ACCENT },
            { value: '-62%', label: 'No-show reduction', color: '#34D399' },
            { value: '24/7', label: 'Emergency routing' },
          ]}
        />
      </div>

      {/* ── Problem Section ── */}
      <div style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
          <div style={{
            display: 'inline-block', borderRadius: '4px',
            border: '1px solid rgba(125,211,252,0.18)',
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
            padding: '4px 10px', marginBottom: '14px',
            background: 'rgba(125,211,252,0.08)', color: ACCENT,
          }}>
            THE PROBLEM
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08, marginBottom: '12px', color: 'var(--text)' }}>
            Patients are slipping through<br />every single day
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '520px', lineHeight: 1.6, marginBottom: '36px' }}>
            The average dental practice loses $8,000–12,000/month to three preventable gaps.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { num: '01', title: 'Missed Emergency Calls', body: "Patients with tooth pain call after hours. If you don't answer, they book the first practice that does — and they stay there.", stat: '⚠ 44% of emergencies: after-hours' },
              { num: '02', title: 'Recall Patients Drift Away', body: 'Patients due for their 6-month checkup need to be chased. Without automated recall, up to 40% of your active patient base drifts silent.', stat: '⚠ 40% never self-reschedule' },
              { num: '03', title: 'No-Shows Drain the Schedule', body: 'Each unfilled chair slot costs $150–$400. AI reminder sequences cut no-show rates by over 60% automatically.', stat: '⚠ $3,800/mo avg no-show cost' },
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
            Ready to fill your chairs?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>
            Book a free 20-minute audit and see exactly how many patients your practice is losing every month.
          </p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 800, padding: '14px 28px', borderRadius: 'var(--r)', textDecoration: 'none', display: 'inline-block', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
            Book My Free Dental Audit →
          </a>
        </div>
      </div>
    </NicheLayout>
  );
}
