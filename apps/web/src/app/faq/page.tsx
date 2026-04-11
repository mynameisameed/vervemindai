import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | VerveMind AI',
  description: 'Answers to common questions about VerveMind AI voice agents, pricing, setup time, HIPAA compliance, and how the AI receptionist works for dental, MedSpa, and home services businesses.',
  alternates: { canonical: 'https://vervemindai.com/faq' },
};

const TEAL = '#00F5D4';
const MUTED = '#A1A1AA';
const BORDER = 'rgba(255,255,255,0.06)';

const faqs = [
  {
    q: 'What is VerveMind AI?',
    a: 'VerveMind AI deploys autonomous AI voice agents that answer your business phone 24/7, book appointments directly into your calendar, and reactivate dormant patients or leads via outbound campaigns. We serve dental practices, MedSpas, HVAC companies, roofing contractors, and other local service businesses.',
  },
  {
    q: 'How much does an AI receptionist cost?',
    a: 'Our standard US plan starts at $297/month with no per-call fees. For Indian businesses, plans start at INR 8,000/month. There is a one-time setup fee depending on the complexity of your integrations. Visit our pricing page for a full breakdown and use our interactive ROI calculator to see your projected return.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are live within 48 to 72 hours. The onboarding wizard collects your clinic name, PMS system, calendar URL, and tone preferences. From there, our team provisions the AI agent, configures your Twilio number, and tests the full call flow before handoff.',
  },
  {
    q: 'Can the AI book appointments into my existing calendar?',
    a: 'Yes. VerveMind integrates with Dentrix, Open Dental, Boulevard, Zenoti, Jobber, ServiceTitan, Calendly, and most major PMS and calendar systems. The AI checks real-time availability and books directly without double-booking.',
  },
  {
    q: 'Is VerveMind HIPAA compliant?',
    a: 'VerveMind is HIPAA-aware and can operate under a Business Associate Agreement (BAA). Patient data is encrypted in transit and at rest. We do not store call recordings longer than the retention period agreed upon in your contract.',
  },
  {
    q: 'What happens if the AI cannot answer a question?',
    a: 'The agent is trained to gracefully escalate. If a caller asks something outside its knowledge base, it will collect the caller\'s name and number, log the inquiry, and route a notification to your staff for a human callback. No caller is ever left hanging.',
  },
  {
    q: 'Can the AI handle multiple languages?',
    a: 'Yes. Our enterprise tier supports multilingual AI in English, Spanish, Hindi, and Telugu. Language detection happens automatically based on the caller\'s first few words, and the agent switches seamlessly.',
  },
  {
    q: 'What is the Reactivation Blitz?',
    a: 'The Reactivation Blitz is an outbound campaign engine. You upload a CSV of dormant patients or past clients (no visit in 12+ months), and our AI calls and texts them with personalized offers to re-book. Average reactivation rate is 14.2% versus the 3% industry average for email-only campaigns.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. We provision a new local or toll-free number through Twilio that can either replace your existing line or act as an overflow. Calls that your front desk misses are automatically forwarded to the AI after a configurable number of rings.',
  },
  {
    q: 'How do I track results?',
    a: 'Every client gets access to the VerveMind Client Portal at portal.vervemindai.com. The dashboard shows real-time metrics: calls handled, appointments booked, reactivation leads converted, and estimated revenue recovered. Weekly PDF reports are also available.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ padding: '160px 24px 60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.04em', marginBottom: 16 }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: MUTED, fontSize: 18, maxWidth: 560, margin: '0 auto' }}>
          Everything you need to know about deploying AI voice agents for your business.
        </p>
      </section>

      {/* FAQ Accordion */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 120px' }}>
        {faqs.map((faq, i) => (
          <details key={i} style={{
            borderBottom: `1px solid ${BORDER}`,
            padding: '24px 0',
          }}>
            <summary style={{
              fontSize: 18, fontWeight: 600, color: '#FFF', cursor: 'pointer',
              listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              lineHeight: 1.4,
            }}>
              {faq.q}
              <span style={{ color: TEAL, fontSize: 24, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>+</span>
            </summary>
            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, marginTop: 16, paddingRight: 40 }}>
              {faq.a}
            </p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(0,245,212,0.04)', border: '1px solid rgba(0,245,212,0.15)', borderRadius: 24, padding: '40px 32px' }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#FFF', marginBottom: 12 }}>Still have questions?</h2>
          <p style={{ color: MUTED, marginBottom: 28 }}>Book a 15-minute call and we will walk you through a live demo tailored to your business.</p>
          <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', padding: '14px 28px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', background: `linear-gradient(135deg, #00DFC1, ${TEAL})`, color: '#09090B', boxShadow: '0 8px 24px rgba(0,245,212,0.2)' }}>
            Book a Free Demo
          </a>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span { transform: rotate(45deg); }
        details summary span { transition: transform 0.2s ease; display: inline-block; }
      ` }} />
    </div>
  );
}
