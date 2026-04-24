import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation for Indian Businesses | VerveMind AI',
  description: 'WhatsApp-first AI automation for dental clinics, MedSpas, and real estate businesses in India. INR pricing, multilingual AI in Telugu, Hindi, and English.',
  alternates: { canonical: 'https://vervemindai.com/india' },
  openGraph: {
    title: 'VerveMind AI India — Built for Hyderabad, Priced for Bharat',
    description: 'WhatsApp-first AI automation for Indian SMBs. INR pricing with multilingual AI.',
    type: 'website',
    url: 'https://vervemindai.com/india',
  },
};

const TEAL = '#00F5D4';
const BG = '#09090B';
const CARD_BG = 'rgba(255,255,255,0.02)';
const BORDER = 'rgba(255,255,255,0.06)';
const MUTED = '#A1A1AA';
const WHITE = '#FFFFFF';

const plans = [
  {
    name: 'Starter',
    inr: 'INR 8,000',
    usd: '\u2248 $95 USD',
    period: '/mo',
    setup: 'INR 15,000 \u2013 25,000 one-time setup',
    target: 'Solo clinics, individual brokers',
    features: [
      'Lead response automation',
      'WhatsApp Business API',
      'Basic CRM (Zoho / Kylas)',
      'Calendar integration',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    inr: 'INR 18,000',
    usd: '\u2248 $215 USD',
    period: '/mo',
    setup: 'INR 35,000 \u2013 50,000 one-time setup',
    target: 'Established practices & teams',
    features: [
      'Multi-channel workflows',
      'AI lead scoring',
      'Review automation',
      'Analytics dashboard',
      'Priority WhatsApp support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    inr: 'INR 45,000',
    usd: '\u2248 $540 USD',
    period: '/mo',
    setup: 'INR 80,000 \u2013 1,50,000 one-time setup',
    target: 'Multi-branch chains, developers',
    features: [
      'Custom AI chatbots',
      'Multilingual (Te / HI / En)',
      'Advanced analytics',
      'API integrations',
      'Dedicated account manager',
    ],
    popular: false,
  },
];

const verticals = [
  { emoji: '\uD83E\uDDB7', title: 'Dental Clinics', desc: 'Automate recall campaigns, appointment booking, and review collection in Telugu and Hindi.' },
  { emoji: '\uD83D\uDC86', title: 'MedSpa & Wellness', desc: 'Reactivate dormant clients via WhatsApp. Inquiry-to-appointment in under 60 seconds.' },
  { emoji: '\uD83C\uDFE0', title: 'Real Estate Brokers', desc: 'Instant WhatsApp response to JustDial and MagicBricks leads. Auto-qualify by budget and location.' },
  { emoji: '\uD83C\uDFE5', title: 'Multi-Specialty Hospitals', desc: 'Route patient inquiries by department, book OPD slots, and send discharge follow-ups automatically.' },
];

const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi NCR', 'Pune'];

const WHATSAPP_LINK = 'https://wa.me/917995851271?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo%20for%20my%20Indian%20business';

export default function IndiaPage() {
  return (
    <div style={{ background: BG, color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '160px 24px 100px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '50vw', background: `radial-gradient(circle, rgba(0,245,212,0.07) 0%, transparent 65%)`, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 999, background: 'rgba(0,245,212,0.08)', border: `1px solid rgba(0,245,212,0.2)`, color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 32 }}>
            <span>🇮🇳</span> Hyderabad-bred · US-trained · Now Serving India
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', color: WHITE, marginBottom: 24 }}>
            Your Business Runs 24/7.{'\n'}
            <span style={{ color: TEAL }}>Your AI Should Too.</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: MUTED, lineHeight: 1.65, maxWidth: 600, margin: '0 auto 40px' }}>
            WhatsApp-first automation for Indian dental clinics, MedSpas, and real estate brokers. Multilingual AI in Telugu, Hindi, and English. Transparent INR pricing.
          </p>

          {/* City pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            {cities.map(city => (
              <span key={city} style={{ fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: BORDER, color: MUTED }}>
                📍 {city}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15, background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}>
              💬 Chat on WhatsApp
            </a>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15, background: 'rgba(255,255,255,0.04)', color: '#E5E2E1', border: '1px solid rgba(255,255,255,0.12)' }}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section style={{ padding: '80px 24px', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: WHITE, letterSpacing: '-0.03em', marginBottom: 16 }}>
              Purpose-Built for Your Industry
            </h2>
            <p style={{ color: MUTED, fontSize: 17, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
              Each VerveMind agent is pre-trained on your vertical's terminology, patient workflows, and conversion language.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {verticals.map(v => (
              <div key={v.title} style={{
                background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 24, padding: 32,
                backdropFilter: 'blur(20px)', transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.emoji}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: WHITE, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INR PRICING */}
      <section style={{ padding: '80px 24px', borderTop: `1px solid ${BORDER}`, background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: WHITE, letterSpacing: '-0.03em', marginBottom: 16 }}>
              Pricing in INR — Zero Confusion
            </h2>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.6 }}>
              Transparent monthly cost in Rupees with USD equivalent. All prices include GST.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                position: 'relative',
                background: CARD_BG,
                border: `1px solid ${plan.popular ? 'rgba(0,245,212,0.35)' : BORDER}`,
                borderRadius: 24, padding: 32,
                backdropFilter: 'blur(20px)',
                boxShadow: plan.popular
                  ? `0 0 60px rgba(0,245,212,0.08), 0 20px 40px rgba(0,0,0,0.4)`
                  : '0 4px 24px rgba(0,0,0,0.3)',
                transform: plan.popular ? 'translateY(-8px)' : 'none',
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: `linear-gradient(135deg, #00DFC1, ${TEAL})`, color: '#000',
                    fontSize: 11, fontWeight: 800, padding: '4px 16px', borderRadius: 999,
                    letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontSize: 20, fontWeight: 700, color: WHITE, marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontSize: 13, color: '#71717A', marginBottom: 24 }}>{plan.target}</p>

                <div style={{ fontSize: 28, fontWeight: 800, color: plan.popular ? TEAL : WHITE, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 4 }}>
                  {plan.inr}
                </div>
                <div style={{ fontSize: 13, color: '#71717A', marginBottom: 20 }}>{plan.usd} / month</div>

                <div style={{ fontSize: 12, color: '#71717A', background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 10, marginBottom: 24 }}>
                  📦 {plan.setup}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', fontSize: 14, color: MUTED, borderBottom: `1px solid ${BORDER}` }}>
                      <span style={{ color: TEAL, fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block', textAlign: 'center', marginTop: 28, padding: '12px 20px', borderRadius: 12,
                    fontWeight: 700, textDecoration: 'none', fontSize: 14,
                    background: plan.popular ? `linear-gradient(135deg, #00DFC1, ${TEAL})` : 'rgba(255,255,255,0.06)',
                    color: plan.popular ? '#09090B' : '#E5E2E1',
                    border: plan.popular ? 'none' : `1px solid ${BORDER}`,
                  }}>
                  {plan.popular ? 'Get Started — WhatsApp Us' : 'Learn More'}
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#52525B', fontSize: 13, marginTop: 32 }}>
            WhatsApp Business API and Twilio minutes billed separately at usage cost. GST included above.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '80px 24px 100px', textAlign: 'center', borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 580, margin: '0 auto', background: `linear-gradient(180deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)`, border: `1px solid rgba(0,245,212,0.15)`, borderRadius: 24, padding: '48px 40px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: WHITE, marginBottom: 12 }}>
            Get a Demo Built for Your Clinic
          </h2>
          <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.65 }}>
            Message us on WhatsApp and receive a customized walkthrough in Telugu, Hindi, or English within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}>
              💬 WhatsApp Us Now
            </a>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', color: '#E5E2E1', border: `1px solid ${BORDER}` }}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
