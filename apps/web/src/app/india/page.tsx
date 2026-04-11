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

const plans = [
  {
    name: 'Starter',
    inr: '₹8,000',
    usd: '≈ $95',
    period: '/mo',
    setup: '₹15K – ₹25K one-time setup',
    target: 'Solo clinics, individual brokers',
    features: ['Lead response automation', 'WhatsApp Business API', 'Basic CRM (Zoho / Kylas)', 'Calendar integration'],
    popular: false,
  },
  {
    name: 'Growth',
    inr: '₹18,000',
    usd: '≈ $215',
    period: '/mo',
    setup: '₹35K – ₹50K one-time setup',
    target: 'Established practices & teams',
    features: ['Multi-channel workflows', 'AI lead scoring', 'Review automation', 'Analytics dashboard', 'Priority WhatsApp support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    inr: '₹45,000',
    usd: '≈ $540',
    period: '/mo',
    setup: '₹80K – ₹1.5L one-time setup',
    target: 'Multi-branch chains, developers',
    features: ['Custom AI chatbots', 'Multilingual (Te / HI / En)', 'Advanced analytics', 'API integrations', 'Dedicated account manager'],
    popular: false,
  },
];

const verticals = [
  { emoji: '🦷', title: 'Dental Clinics', desc: 'Automate recall campaigns, appointment booking, and review collection — in Telugu and Hindi.' },
  { emoji: '💆', title: 'MedSpa & Wellness', desc: 'Reactivate dormant clients via WhatsApp. Inquiry-to-appointment in under 60 seconds.' },
  { emoji: '🏠', title: 'Real Estate Brokers', desc: 'Instant WhatsApp response to JustDial and MagicBricks leads. Auto-qualify by budget and location.' },
  { emoji: '🏥', title: 'Multi-Specialty Hospitals', desc: 'Route patient inquiries by department, book OPD slots, and send discharge follow-ups automatically.' },
];

const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi NCR', 'Pune'];

export default function IndiaPage() {
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', padding: '160px 24px 100px', textAlign: 'center', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,245,212,0.06) 0%, transparent 60%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Kicker */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 20px', borderRadius: 999, background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)', color: '#00F5D4', fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 32 }}>
            <span>🇮🇳</span> Hyderabad-bred · US-trained · Now Serving India
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', color: '#FFF', marginBottom: 24 }}>
            Your Business Runs 24/7.
            <br />
            <span style={{ color: '#00F5D4' }}>Your AI Should Too.</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#A1A1AA', lineHeight: 1.65, maxWidth: 620, margin: '0 auto 40px' }}>
            WhatsApp-first automation for Indian dental clinics, MedSpas, and real estate brokers — with multilingual AI in Telugu, Hindi, and English. Transparent INR pricing included.
          </p>

          {/* City pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
            {cities.map(city => (
              <span key={city} style={{ fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#A1A1AA' }}>
                📍 {city}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            <a href="https://wa.me/+15555550000?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', fontSize: 15, background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}>
              💬 Chat on WhatsApp
            </a>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', fontSize: 15, background: 'rgba(255,255,255,0.04)', color: '#E5E2E1', border: '1px solid rgba(255,255,255,0.12)' }}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ═══ VERTICALS ═══ */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.03em', marginBottom: 16 }}>
              Purpose-Built for Your Industry
            </h2>
            <p style={{ color: '#A1A1AA', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
              Each VerveMind agent is pre-trained on your vertical's terminology, patient workflows, and conversion language.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {verticals.map(v => (
              <div key={v.title} style={{
                background: 'linear-gradient(180deg, rgba(30,30,33,0.5) 0%, rgba(15,15,18,0.5) 100%)',
                border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, padding: 32,
                backdropFilter: 'blur(40px)', transition: 'all 0.3s ease',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.emoji}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFF', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: '#A1A1AA', fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INR PRICING ═══ */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.03em', marginBottom: 16 }}>
              Pricing in INR — Zero Confusion
            </h2>
            <p style={{ color: '#A1A1AA', fontSize: 17 }}>Transparent monthly cost in rupees and US dollar equivalents. All prices include GST.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                position: 'relative',
                background: 'linear-gradient(180deg, rgba(30,30,33,0.5) 0%, rgba(15,15,18,0.5) 100%)',
                border: `1px solid ${plan.popular ? 'rgba(0,245,212,0.35)' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: 24, padding: 32,
                backdropFilter: 'blur(40px)',
                boxShadow: plan.popular ? '0 0 60px rgba(0,245,212,0.08), 0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.4)',
                transform: plan.popular ? 'translateY(-8px)' : 'none',
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', color: '#000', fontSize: 11, fontWeight: 800, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#FFF', marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ fontSize: 13, color: '#71717A', marginBottom: 24 }}>{plan.target}</p>

                <div style={{ fontSize: 42, fontWeight: 800, color: plan.popular ? '#00F5D4' : '#FFF', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 4 }}>
                  {plan.inr}
                </div>
                <div style={{ fontSize: 13, color: '#71717A', marginBottom: 20 }}>{plan.usd} / month</div>

                <div style={{ fontSize: 12, color: '#71717A', background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: 10, marginBottom: 24 }}>
                  {plan.setup}
                </div>

                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', fontSize: 14, color: '#A1A1AA', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ color: '#00F5D4', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#52525B', fontSize: 13, marginTop: 32 }}>
            WhatsApp Business API & Twilio minutes billed separately at usage cost. GST included above.
          </p>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', background: 'linear-gradient(180deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)', border: '1px solid rgba(0,245,212,0.15)', borderRadius: 24, padding: '48px 40px' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#FFF', marginBottom: 12 }}>
            Get a Demo Built for Your Clinic
          </h2>
          <p style={{ color: '#A1A1AA', marginBottom: 32, lineHeight: 1.65 }}>
            Message us on WhatsApp and receive a customized walkthrough in Telugu, Hindi, or English — within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/+15555550000?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo%20for%20my%20Indian%20business" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: '#25D366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}>
              💬 WhatsApp Us Now
            </a>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', color: '#E5E2E1', border: '1px solid rgba(255,255,255,0.1)' }}>
              Book a Call
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
