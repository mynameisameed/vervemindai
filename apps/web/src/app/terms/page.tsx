import React from 'react';

export default function TermsPage() {
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', padding: '120px 24px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 24 }}>Service Terms</h1>
        <p style={{ color: '#A1A1AA', fontSize: 16, marginBottom: 40 }}>Last updated: April 6, 2026</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, color: '#A1A1AA', lineHeight: 1.6 }}>
          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>1. Service Provision</h2>
            <p>VerveMind AI provides custom autonomous voice and communication agents. By using our services, you grant us permission to interact with your clients and leads via SMS and phone on your behalf, governed by the configurations established during your onboarding architecture call.</p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>2. Billing & Usage Limits</h2>
            <p>Services are billed according to your selected blueprint plan. Custom architectures and API integrations beyond standard connections may incur additional engineering fees. You are responsible for any excess telecom hardware or carrier fees accrued via high-volume outbound campaigns.</p>
          </section>

          <section>
            <h2 style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>3. Termination</h2>
            <p>You may terminate ongoing Monthly services at any time. Notice must be provided before the next billing cycle. One-time setup fees and foundation builds are non-refundable once engineering work has commenced.</p>
          </section>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 40, marginTop: 40 }}>
            <a href="/" style={{ color: '#00F5D4', textDecoration: 'none', fontWeight: 600 }}>&larr; Return to Engine</a>
          </div>
        </div>
      </div>
    </div>
  )
}
