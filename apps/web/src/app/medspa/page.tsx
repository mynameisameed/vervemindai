import React from 'react';
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import BookingPanel from '../../components/BookingPanel';

export const metadata: Metadata = {
  title: 'VerveMind AI for MedSpas | Automate Bookings & Reactivate Patients',
  description: 'AI receptionist and reactivation engine built for MedSpa businesses. Answer every call 24/7, fill your treatment calendar, and win back dormant clients.',
  alternates: { canonical: 'https://medspa.vervemindai.com' },
};

const ACCENT = '#F0ABFC';
const ACCENT_TEXT = '#3b0764';
const ACCENT_GRADIENT = 'linear-gradient(135deg, #fae8ff, #e879f9)';

export default function MedSpaPage() {
  return (
    <NicheLayout
      nicheLabel="MedSpa"
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
        {/* Left copy */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '4px',
            padding: '5px 12px',
            marginBottom: '22px',
            background: 'rgba(240,171,252,0.08)',
            border: '1px solid rgba(240,171,252,0.2)',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: ACCENT,
              display: 'inline-block',
              animation: 'pulse-dot 1.8s ease-in-out infinite',
            }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>
              MEDSPA ENGINE OS.1
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontSize: 'clamp(38px, 4.5vw, 52px)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: '18px',
            color: 'var(--text)',
          }}>
            Fill Your MedSpa&apos;s Calendar<br />
            <span style={{
              background: 'linear-gradient(135deg, #F0ABFC, #c026d3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Autonomously
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            lineHeight: 1.65,
            maxWidth: '440px',
            marginBottom: '30px',
          }}>
            Deploy conversational AI that answers calls, handles objections, and reactivates dormant patients 24/7. Stop losing leads to voicemail.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/vervemindai/lead"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '13px',
                fontWeight: 800,
                padding: '12px 24px',
                borderRadius: 'var(--r)',
                textDecoration: 'none',
                background: ACCENT_GRADIENT,
                color: ACCENT_TEXT,
              }}
            >
              Deploy Engine Now →
            </a>
            <a
              href="/pricing"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-strong)',
                color: 'var(--text)',
                fontSize: '13px',
                fontWeight: 600,
                padding: '11px 20px',
                borderRadius: 'var(--r)',
                textDecoration: 'none',
              }}
            >
              Calculate ROI
            </a>
          </div>

          {/* Social proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex' }}>
              {[
                { bg: '#4a044e', color: '#F0ABFC', letter: 'S' },
                { bg: '#6b21a8', color: '#e879f9', letter: 'M' },
                { bg: '#7e22ce', color: '#d8b4fe', letter: 'J' },
              ].map((a, i) => (
                <div key={i} style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  border: '2px solid var(--bg)',
                  marginRight: '-8px',
                  fontSize: '10px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: a.bg, color: a.color,
                }}>
                  {a.letter}
                </div>
              ))}
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', paddingLeft: '16px' }}>
              Trusted by MedSpas across the US
            </span>
          </div>
        </div>

        {/* Right: BookingPanel */}
        <BookingPanel
          panelTitle="Live Patient Activity"
          accentColor={ACCENT}
          notifications={[
            {
              icon: '📅',
              title: 'New Appointment Request',
              subtitle: 'Sarah J. — Premium Botox Filler · Tomorrow 2:00 PM',
              badge: 'High Value',
              variant: 'accent',
            },
            {
              icon: '💬',
              title: 'Reactivation — Responded',
              subtitle: 'Michelle K. — "Yes! Book me in for next week"',
              badge: 'Booked',
              variant: 'positive',
            },
          ]}
          stats={[
            { value: '$4,850', label: 'Recovered this week', color: ACCENT },
            { value: '73%', label: 'Reactivation rate', color: '#34D399' },
            { value: '600ms', label: 'Response time' },
          ]}
        />
      </div>

      {/* ── Problem Section (alt bg) ── */}
      <div style={{
        background: 'rgba(255,255,255,0.015)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
          <div style={{
            display: 'inline-block',
            borderRadius: '4px',
            border: '1px solid rgba(240,171,252,0.18)',
            fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
            padding: '4px 10px', marginBottom: '14px',
            background: 'rgba(240,171,252,0.08)', color: ACCENT,
          }}>
            THE PROBLEM
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08,
            marginBottom: '12px', color: 'var(--text)',
          }}>
            Your MedSpa is leaving<br />money on the table
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '520px', lineHeight: 1.6, marginBottom: '36px' }}>
            Most MedSpas lose 40–60% of potential revenue to three specific gaps that AI eliminates overnight.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              {
                num: '01',
                title: 'After-Hours Enquiries Lost',
                body: 'Most Botox and filler inquiries come in evenings and weekends. Without 24/7 AI, they book your competitor instead.',
                stat: '⚠ 58% of enquiries: evenings',
              },
              {
                num: '02',
                title: 'Dormant VIP Clients Forgotten',
                body: 'Clients who haven\'t returned in 90+ days represent $800–1,200 each in lifetime value. Nobody\'s following up.',
                stat: '⚠ Avg 68% never re-book',
              },
              {
                num: '03',
                title: 'No-Shows Cost You Twice',
                body: 'Unfilled slots and no-shows drain revenue and time. Automated reminder sequences cut no-shows by up to 60%.',
                stat: '⚠ 30% avg no-show rate',
              },
            ].map((card) => (
              <div key={card.num} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                padding: '22px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontWeight: 900, fontSize: '40px',
                  color: 'rgba(255,255,255,0.05)',
                  letterSpacing: '-0.05em', marginBottom: '10px',
                }}>
                  {card.num}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '7px', color: 'var(--text)' }}>
                  {card.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: 1.6 }}>
                  {card.body}
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', marginTop: '12px',
                  borderRadius: '4px', padding: '4px 10px',
                  fontSize: '11px', fontWeight: 700,
                  background: 'rgba(251,191,36,0.07)',
                  border: '1px solid rgba(251,191,36,0.15)',
                  color: 'var(--amber)',
                }}>
                  {card.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--r-xl)',
          padding: '40px',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '30px', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '10px', color: ACCENT }}>
            Ready to automate your MedSpa?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>
            Book a free 20-minute audit. We'll map exactly what you're losing and show you how to recover it.
          </p>
          <a
            href="https://calendly.com/vervemindai/lead"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '14px', fontWeight: 800,
              padding: '14px 28px',
              borderRadius: 'var(--r)',
              textDecoration: 'none',
              display: 'inline-block',
              background: ACCENT_GRADIENT,
              color: ACCENT_TEXT,
            }}
          >
            Book My Free MedSpa Audit →
          </a>
        </div>
      </div>
    </NicheLayout>
  );
}
