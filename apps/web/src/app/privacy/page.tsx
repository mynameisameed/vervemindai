import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | VerveMind AI',
  alternates: {
    canonical: 'https://vervemindai.com/privacy',
  },
};export default function PrivacyPage() {
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', padding: '120px 24px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 24 }}>Privacy Standard</h1>
        <p style={{ color: '#A1A1AA', fontSize: 16, marginBottom: 40 }}>Last updated: April 6, 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, color: '#A1A1AA', lineHeight: 1.6 }}>
          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>1. Data Collection & Isolation</h2>
            <p>VerveMind AI operates on a strict multi-tenant isolation architecture. Your patient, client, and lead data is siloed and never co-mingled with other accounts. We collect only what is necessary to operate our autonomous voice and text agents.</p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>2. HIPAA & TCPA Compliance</h2>
            <p>For healthcare and MedSpa clients, all data transmission and storage paths are HIPAA compliant. Voice recordings are encrypted at rest. We provide standard Business Associate Agreements (BAAs) upon request.</p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>3. Third-Party Sharing</h2>
            <p>We do not sell, rent, or lease your data to third parties. We utilize infrastructure partners (e.g., OpenAI, Vercel, Vapi) under strict zero-retention API agreements, ensuring your data is not used to train global public models.</p>
          </section>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 40, marginTop: 40 }}>
            <a href="/" style={{ color: '#00F5D4', textDecoration: 'none', fontWeight: 600 }}>&larr; Return to Engine</a>
          </div>
        </div>
      </div>
    </div>
  )
}
