import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Automation for Indian Businesses | VerveMind AI India',
  description: 'WhatsApp-first AI automation for dental clinics, MedSpas, and real estate businesses in India. INR pricing, multilingual AI (Telugu/Hindi/English), and Hyderabad-bred expertise.',
  alternates: { canonical: 'https://vervemindai.com/india' },
  openGraph: {
    title: 'VerveMind AI for India — Built for Hyderabad, Priced for Bharat',
    description: 'WhatsApp-first AI automation for Indian SMBs. INR pricing with multilingual AI (Telugu/Hindi/English).',
    type: 'website',
    url: 'https://vervemindai.com/india',
  },
};

const plans = [
  {
    name: 'Starter',
    inr: '₹8,000',
    usd: '≈ $95',
    setup: '₹15K – ₹25K',
    target: 'Solo clinics, individual brokers',
    features: ['Lead response automation', 'WhatsApp Business API', 'Basic CRM (Zoho/Kylas)', 'Calendar integration'],
    popular: false,
  },
  {
    name: 'Growth',
    inr: '₹18,000',
    usd: '≈ $215',
    setup: '₹35K – ₹50K',
    target: 'Established clinics & teams',
    features: ['Multi-channel workflows', 'AI lead scoring', 'Review automation', 'Analytics dashboard', 'Priority WhatsApp support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    inr: '₹45,000',
    usd: '≈ $540',
    setup: '₹80K – ₹1.5L',
    target: 'Multi-branch chains, developers',
    features: ['Custom AI chatbots', 'Multilingual (Te/HN/En)', 'Advanced analytics', 'API integrations', 'Dedicated account manager'],
    popular: false,
  },
];

const verticals = [
  { emoji: '🦷', name: 'Dental Clinics', benefit: 'Automate appointment booking, recall campaigns, and review collection in Telugu & Hindi.' },
  { emoji: '💆', name: 'MedSpa & Wellness', benefit: 'Reactivate dormant clients via WhatsApp. Convert inquiry-to-appointment in under 60 seconds.' },
  { emoji: '🏠', name: 'Real Estate Brokers', benefit: 'Instant WhatsApp response to JustDial and MagicBricks leads. Auto-qualify by budget and location.' },
  { emoji: '🏥', name: 'Multi-Specialty Hospitals', benefit: 'Route patient inquiries by department, book OPD slots, and send discharge follow-ups automatically.' },
];

const cities = ['🏙️ Hyderabad', '🏙️ Bengaluru', '🏙️ Mumbai', '🏙️ Chennai', '🏙️ Delhi NCR', '🏙️ Pune'];

export default function IndiaPage() {
  return (
    <div style={{ background: '#0a0a0f', color: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', textAlign: 'center', padding: '120px 24px 80px',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255,153,50,0.08), transparent), #0a0a0f'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: 999, fontSize: 14, color: '#94a3b8', marginBottom: 32 }}>
          <span style={{ color: '#ff9932', fontWeight: 700 }}>🇮🇳</span> Hyderabad-bred, US-trained
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, maxWidth: 900, marginBottom: 24 }}>
          AI Automation for Indian Businesses
          <br />
          <span style={{ background: 'linear-gradient(135deg, #ff9932 0%, #fff 50%, #138808 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Built for Hyderabad, Priced for Bharat
          </span>
        </h1>

        <p style={{ fontSize: 20, color: '#94a3b8', maxWidth: 600, marginBottom: 32 }}>
          WhatsApp-first automation for dental clinics, MedSpas, and real estate brokers. AI that speaks Telugu, Hindi, and English — with transparent INR pricing.
        </p>

        {/* City Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
          {cities.map(city => (
            <div key={city} style={{ background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 16px', borderRadius: 8, fontSize: 14 }}>
              {city}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          <a href="https://wa.me/+15555550000?text=Hi%2C%20I%27m%20interested%20in%20VerveMind%20AI%20for%20my%20business" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: '#25d366', color: '#000', boxShadow: '0 8px 24px rgba(37,211,102,0.3)' }}>
            💬 Chat on WhatsApp
          </a>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 12, fontWeight: 600, textDecoration: 'none', background: 'transparent', color: '#f8fafc', border: '1px solid rgba(255,255,255,0.15)' }}>
            Book a Call
          </a>
        </div>

        <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, fontSize: 14, color: '#94a3b8' }}>
          <span style={{ fontSize: 24 }}>🇮🇳 🇺🇸</span>
          <span>Operations in <strong style={{ color: '#f8fafc' }}>Hyderabad</strong> and <strong style={{ color: '#f8fafc' }}>USA</strong> — serving global SMBs with local expertise</span>
        </div>
      </section>

      {/* ═══ VERTICALS ═══ */}
      <section style={{ padding: '80px 24px', background: '#0f0f1a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Built for Your Industry</h2>
            <p style={{ color: '#94a3b8', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>Purpose-built AI workflows for the most WhatsApp-dependent SMB verticals in India.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {verticals.map(v => (
              <div key={v.name} style={{ background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 32, transition: 'all 0.3s' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{v.emoji}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{v.name}</h3>
                <p style={{ color: '#94a3b8', fontSize: 15, lineHeight: 1.6 }}>{v.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING (INR) ═══ */}
      <section style={{ padding: '80px 24px', background: '#0a0a0f' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Pricing in INR — No Currency Confusion</h2>
            <p style={{ color: '#94a3b8', fontSize: 16 }}>Transparent USD vs INR. All prices include GST.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: '#13131f', border: `1px solid ${plan.popular ? '#6366f1' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 20, padding: 32, textAlign: 'center', position: 'relative',
                boxShadow: plan.popular ? '0 0 60px rgba(99,102,241,0.12)' : 'none',
                transform: plan.popular ? 'scale(1.02)' : 'none',
              }}>
                {plan.popular && (
                  <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#6366f1', color: '#fff', padding: '4px 16px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em' }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
                <p style={{ color: '#94a3b8', fontSize: 13, marginBottom: 20 }}>{plan.target}</p>
                <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1 }}>{plan.inr}</div>
                <div style={{ fontSize: 13, color: '#94a3b8', margin: '6px 0 20px' }}>{plan.usd} / month</div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: 8, fontSize: 12, color: '#94a3b8', marginBottom: 24 }}>
                  Setup: {plan.setup} one-time
                </div>
                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', fontSize: 14, color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WhatsApp CTA ═══ */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 48 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Ready to Automate Your Business?</h2>
          <p style={{ color: '#94a3b8', marginBottom: 32, lineHeight: 1.6 }}>Message us on WhatsApp and get a customized demo built for your clinic or business within 24 hours.</p>
          <a href="https://wa.me/+15555550000?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo%20for%20my%20Indian%20business" target="_blank" rel="noopener"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: '#25d366', color: '#000', fontSize: 18, boxShadow: '0 8px 32px rgba(37,211,102,0.3)' }}>
            WhatsApp Us Now →
          </a>
        </div>
      </section>

    </div>
  );
}
