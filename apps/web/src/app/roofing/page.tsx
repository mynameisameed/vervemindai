import React from 'react';
import { Metadata } from 'next';
import NicheLayout from '../../components/NicheLayout';
import dynamic from 'next/dynamic';

const VoiceDemoPlayer = dynamic(() => import('../../components/VoiceDemoPlayer'), { ssr: false });

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
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '72px 32px 60px', position: 'relative' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '4px', padding: '5px 12px', marginBottom: '22px', background: 'rgba(134,239,172,0.08)', border: '1px solid rgba(134,239,172,0.2)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ACCENT, display: 'inline-block', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>ROOFING ENGINE OS.1</span>
          </div>

          <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '18px', color: 'var(--text)' }}>
            Never Miss a<br />
            <span style={{ background: 'linear-gradient(135deg, #86EFAC, #16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Storm Lead
            </span> Again
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65, maxWidth: '440px', marginBottom: '30px' }}>
            Deploy AI that captures storm damage leads at midnight, qualifies insurance claims, and dispatches inspectors instantly. Speed to lead is everything in roofing.
          </p>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/vervemindai/lead?utm_source=vervemindai.com&utm_medium=website&utm_campaign=roofing&utm_content=hero_cta" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 800, padding: '12px 24px', borderRadius: 'var(--r)', textDecoration: 'none', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
              Deploy Roofing AI Now →
            </a>
            <a href="/pricing" style={{ background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: '13px', fontWeight: 600, padding: '11px 20px', borderRadius: 'var(--r)', textDecoration: 'none' }}>
              Calculate ROI
            </a>
          </div>

          <VoiceDemoPlayer 
            audioUrl="/assets/audio/roofing_demo_stitched.mp3" 
            spanishAudioUrl="/assets/audio/roofing_demo_stitched_es.mp3"
            title="Listen: Roofing Dispatch AI" 
          />
        </div>

        </div>
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
              { num: '03', title: 'Dormant Past Clients', body: 'You have thousands of past clients. The AI automatically runs outbound Reactivation Blitz campaigns to offer free inspections and generate referrals from your existing list.', stat: '⚠ Most never re-engaged' },
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

      {/* Case Study Block */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px 64px' }}>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '40px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              borderRadius: '4px',
              padding: '4px 10px',
              background: 'rgba(134,239,172,0.1)',
              border: '1px solid rgba(134,239,172,0.2)',
              color: ACCENT,
              fontSize: '10px',
              fontWeight: 700,
              marginBottom: '16px',
            }}>CASE STUDY</div>
            <blockquote style={{
              fontSize: '24px',
              fontWeight: 800,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              margin: '0 0 20px',
            }}>
              "VerveMind has handled over 100 calls for us in two months — after-hours, missed calls, even Spanish-speaking patients. We wake up to a full booking sheet every morning."
            </blockquote>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              — <strong style={{ color: 'var(--text)' }}>iVolve MedSpa</strong>, Founding Client
            </div>
          </div>
          <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border)', paddingLeft: '40px' }}>
            <div style={{ fontSize: '40px', fontWeight: 900, color: '#34D399' }}>100+</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>calls handled</div>
          </div>
        </div>
      </div>

      {/* ── Pricing Section ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px 64px' }}>
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: '1fr 0.8fr',
          gap: '48px',
          alignItems: 'center',
        }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '20px', color: 'var(--text)' }}>
              How Pricing Works
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              We price based on your company&apos;s call volume and specialization. Most Roofing clients run a 30-Day Reactivation Sprint first, then move to a monthly retainer.
            </p>
            <div style={{ fontSize: '20px', fontWeight: 800, color: ACCENT, marginBottom: '8px' }}>
              Typical investment: $997–$1,497/month
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              No setup fees. No long-term contracts. Cancel anytime.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a
              href="https://calendly.com/vervemindai/lead?utm_source=vervemindai.com&utm_medium=website&utm_campaign=roofing&utm_content=pricing_section"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '15px', fontWeight: 800, padding: '16px 32px',
                borderRadius: 'var(--r)', textDecoration: 'none',
                background: ACCENT_GRADIENT, color: ACCENT_TEXT,
                display: 'inline-block'
              }}
            >
              Book a Free Audit Call →
            </a>
          </div>
        </div>
      </div>

      {/* ── CTA Strip ── */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 'var(--r-xl)', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '10px', color: ACCENT }}>
            Ready to capture more storm jobs?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '12px' }}>
            Book a free 20-minute audit and see exactly how many leads your roofing company is losing to slow response.
          </p>
          <div style={{ fontSize: '13px', fontWeight: 600, color: ACCENT, marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: ACCENT }}></span>
            No contracts. Cancel anytime.
          </div>
          <a href="https://calendly.com/vervemindai/lead?utm_source=vervemindai.com&utm_medium=website&utm_campaign=roofing&utm_content=cta_strip" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', fontWeight: 800, padding: '14px 28px', borderRadius: 'var(--r)', textDecoration: 'none', display: 'inline-block', background: ACCENT_GRADIENT, color: ACCENT_TEXT }}>
            Book My Free Roofing Audit →
          </a>
        </div>
      </div>
    </NicheLayout>
  );
}
