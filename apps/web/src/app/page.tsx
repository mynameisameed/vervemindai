// apps/web/src/app/page.tsx
"use client";
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* ── shared helpers ── */
const Section = ({
  children,
  alt,
  id,
}: {
  children: React.ReactNode;
  alt?: boolean;
  id?: string;
}) => (
  <section
    id={id}
    style={{
      padding: 'var(--section-py) 32px',
      background: alt ? 'rgba(255,255,255,0.015)' : 'var(--bg)',
      borderTop:    alt ? '1px solid var(--border)' : undefined,
      borderBottom: alt ? '1px solid var(--border)' : undefined,
    }}
  >
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>{children}</div>
  </section>
);

const Tag = ({ children, color = 'var(--primary)' }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '0.13em',
    textTransform: 'uppercase',
    padding: '4px 12px',
    borderRadius: 4,
    background: `${color}14`,
    border: `1px solid ${color}2e`,
    color,
    marginBottom: 20,
  }}>
    {children}
  </div>
);

/* ── pip slot component ── */
const Pips = ({ taken }: { taken: number }) => (
  <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        style={{
          width: 8,
          height: 8,
          borderRadius: 2,
          background: i < taken ? 'var(--primary)' : 'var(--border-strong)',
        }}
      />
    ))}
  </div>
);

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* ── NAV ── */}
      <Nav />

      {/* ── FOUNDER RATE BANNER ── */}
      <div style={{
        background: 'rgba(0,245,212,0.06)',
        borderBottom: '1px solid var(--primary-border)',
        padding: '10px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        fontSize: 13,
        color: 'var(--text)',
      }}>
        <Pips taken={1} />
        <span>
          <strong style={{ color: 'var(--primary)' }}>Founder Rate:</strong>{' '}
          9 spots remaining. First 10 clients lock in current pricing forever.
        </span>
      </div>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        {/* static teal glow — hero only */}
        <div style={{
          position: 'absolute',
          top: -80,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          background: 'radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '80px 32px 72px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 52,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(0,245,212,0.08)',
              border: '1px solid rgba(0,245,212,0.18)',
              borderRadius: 4,
              padding: '5px 12px',
              marginBottom: 22,
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--primary)',
                animation: 'pulse-dot 1.8s ease-in-out infinite',
                display: 'block',
              }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--primary)' }}>
                AI OPERATING SYSTEM
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 58px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.04em',
              marginBottom: 18,
              color: 'var(--text)',
            }}>
              The Autonomous<br />
              <span style={{
                background: 'linear-gradient(135deg, #00F5D4, #00c2a8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Operating System
              </span>
              <br />
              for Local Business
            </h1>

            <p style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              maxWidth: 440,
              marginBottom: 30,
            }}>
              Deploy AI agents that answer every call, book every appointment, and recover every dormant lead — 24/7, with zero payroll overhead.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
              <a
                href="https://calendly.com/vervemindai/lead"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #00f5d4, #00c2a8)',
                  color: '#001a14',
                  fontSize: 13,
                  fontWeight: 800,
                  padding: '12px 24px',
                  borderRadius: 'var(--r)',
                  textDecoration: 'none',
                }}
              >
                Book Free Strategy Call →
              </a>
              <a
                href="#demo"
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-strong)',
                  color: 'var(--text)',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '11px 20px',
                  borderRadius: 'var(--r)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                }}
              >
                ▶ Watch 2-min Demo
              </a>
            </div>

            {/* Trust bullets */}
            <div style={{ display: 'flex', gap: 20 }}>
              {['No contracts', 'Live in 48hrs', 'First month free'].map((t) => (
                <span key={t} style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ color: 'var(--positive)', fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — metrics panel */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-xl)',
            padding: '24px',
          }}>
            {/* Panel header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>System Activity</span>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(0,245,212,0.08)',
                border: '1px solid rgba(0,245,212,0.18)',
                borderRadius: 4,
                padding: '3px 9px',
              }}>
                <span style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  animation: 'pulse-dot 1.8s ease-in-out infinite',
                  display: 'block',
                }} />
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--primary)' }}>LIVE</span>
              </div>
            </div>

            {/* Metric rows */}
            {[
              { label: 'Leads Captured',     value: '47K+',   pct: 78, color: 'var(--primary)' },
              { label: 'Revenue Recovered',  value: '$2.1M',  pct: 62, color: 'var(--secondary)' },
              { label: 'Client ROI',         value: '380%',   pct: 90, color: 'var(--positive)' },
            ].map(({ label, value, pct, color }) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color, fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>{value}</span>
                </div>
                <div style={{ height: 3, background: 'var(--border)', borderRadius: 2 }}>
                  <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2 }} />
                </div>
              </div>
            ))}

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--border)', margin: '16px 0' }} />

            {/* Live agent feed */}
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-faint)', textTransform: 'uppercase', marginBottom: 10 }}>
              Live Agent Feed
            </div>
            {[
              { icon: '📞', text: 'Call captured — Riverside MedSpa', time: '2s ago',   color: 'var(--primary)' },
              { icon: '📅', text: 'Appointment booked — Dr Chen Dental', time: '18s ago', color: 'var(--secondary)' },
              { icon: '💬', text: 'Reactivation sent — Peak HVAC lead', time: '41s ago', color: 'var(--positive)' },
            ].map(({ icon, text, time, color }) => (
              <div key={text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '7px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: 14 }}>{icon}</span>
                <span style={{ flex: 1, fontSize: 11, color: 'var(--text-muted)' }}>{text}</span>
                <span style={{ fontSize: 10, color: 'var(--text-faint)' }}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {[
            { value: '47K+',   label: 'Leads Captured',     color: 'var(--primary)' },
            { value: '$2.1M',  label: 'Revenue Recovered',  color: 'var(--secondary)' },
            { value: '380%',   label: 'Average ROI',        color: 'var(--positive)' },
            { value: '99.8%',  label: 'Uptime',             color: 'var(--amber)' },
          ].map(({ value, label, color }, i) => (
            <div key={label} style={{
              padding: '32px 24px',
              borderRight: i < 3 ? '1px solid var(--border)' : undefined,
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 32,
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color,
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                marginBottom: 4,
              }}>
                {value}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <Section>
        <Tag color="var(--amber)">The Problem</Tag>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginBottom: 14,
          color: 'var(--text)',
        }}>
          You're losing revenue<br />every hour you're not online.
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, marginBottom: 48, maxWidth: 540 }}>
          The average SMB loses $3,200/month to three preventable gaps. Here's where the money goes.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              num: '01',
              headline: 'Missed Calls After Hours',
              body: 'Every unanswered call is a lead that calls your competitor next. Most businesses miss 42% of calls that come in after 6pm.',
              stat: '⚠ $3,200/mo in missed calls',
            },
            {
              num: '02',
              headline: 'Dormant Patient Lists',
              body: 'Your existing database is your cheapest source of new revenue. 68% of past clients never hear from you again after their last appointment.',
              stat: '⚠ 68% never re-engaged',
            },
            {
              num: '03',
              headline: 'After-Hours Dead Zones',
              body: "Emergencies and high-intent leads don't wait until Monday. 42% of your highest-value enquiries arrive when no one's available to answer.",
              stat: '⚠ 42% after-hours loss rate',
            },
          ].map(({ num, headline, body, stat }) => (
            <div key={num} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '24px',
              position: 'relative',
            }}>
              <div style={{
                fontSize: 52,
                fontWeight: 900,
                color: 'var(--text-faint)',
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                lineHeight: 1,
                marginBottom: 12,
              }}>
                {num}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>{headline}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>{body}</p>
              <div style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--amber)',
                background: 'rgba(251,191,36,0.07)',
                border: '1px solid rgba(251,191,36,0.15)',
                borderRadius: 4,
                padding: '5px 10px',
                display: 'inline-block',
              }}>
                {stat}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section alt id="how-it-works">
        <Tag>How It Works</Tag>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 900,
          letterSpacing: '-0.03em',
          marginBottom: 48,
          color: 'var(--text)',
        }}>
          Live in 48 hours. Results in 30 days.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              step: '01',
              headline: 'Map',
              body: 'We audit your current call flow, calendar system, and lead database. You fill out a 10-minute onboarding form — we do the rest.',
            },
            {
              step: '02',
              headline: 'Deploy',
              body: 'Your AI agent goes live within 48 hours. We configure it to your tone, integrate with your calendar, and test the full call flow before handoff.',
            },
            {
              step: '03',
              headline: 'Grow',
              body: 'Watch the dashboard fill up. Every missed call captured, every dormant lead reactivated, every after-hours booking confirmed automatically.',
            },
          ].map(({ step, headline, body }) => (
            <div key={step} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '24px',
            }}>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 'var(--r)',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 900,
                color: '#001a14',
                marginBottom: 16,
              }}>
                {step}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>{headline}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
