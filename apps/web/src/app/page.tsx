"use client";

export default function HomePage() {
  return (
    <div style={{ background: '#0A0A0A', color: '#FAFAFA', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'rgba(10,10,10,.8)', backdropFilter: 'blur(12px)', zIndex: 1000, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 24, color: '#FAFAFA' }}>
            <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg,#6366F1,#A855F7)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>V</div>
            VerveMind AI
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <a href="#portfolio" style={{ color: '#A1A1AA', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#FAFAFA'} onMouseOut={e => e.currentTarget.style.color = '#A1A1AA'}>Portfolio</a>
            <a href="https://reactivation.vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#FAFAFA'} onMouseOut={e => e.currentTarget.style.color = '#A1A1AA'}>Reactivation</a>
            <a href="https://dental.vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#FAFAFA'} onMouseOut={e => e.currentTarget.style.color = '#A1A1AA'}>Dental</a>
            <a href="https://roofing.vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#FAFAFA'} onMouseOut={e => e.currentTarget.style.color = '#A1A1AA'}>Roofing</a>
            <a href="https://calendly.com/vervemindai/30min" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none', background: 'linear-gradient(135deg,#6366F1,#A855F7)', color: '#fff', boxShadow: '0 4px 14px rgba(99,102,241,.3)', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-1px)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>Hire an AI</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '200px 0 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(10,10,10,0) 70%)', zIndex: 0 }}></div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 16px', borderRadius: 999, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#A1A1AA', fontSize: 14, fontWeight: 600, marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399', marginRight: 8, boxShadow: '0 0 12px #34D399' }}></span>
            Deploying AI Employees in 48 Hours
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.03em' }}>
            AI Voice Agents That <br /> <span style={{ background: 'linear-gradient(135deg, #818CF8, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Actually Close Deals.</span>
          </h1>
          <p style={{ fontSize: 22, color: '#A1A1AA', marginBottom: 48, maxWidth: 700, margin: '0 auto 48px', lineHeight: 1.5 }}>
            Stop losing thousands to missed calls and dormant leads. We build custom conversational AI that works 24/7 to book appointments and drive revenue.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <a href="#portfolio" style={{ padding: '16px 32px', borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: 'none', background: '#FAFAFA', color: '#0A0A0A', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'none'}>See the AI in Action</a>
            <a href="https://calendly.com/vervemindai/30min" target="_blank" style={{ padding: '16px 32px', borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: 'none', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#FAFAFA', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>Book Consultation</a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '120px 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em' }}>Our Vertical Solutions</h2>
            <p style={{ fontSize: 20, color: '#A1A1AA', maxWidth: 600, margin: '0 auto' }}>Explore our industry-specific AI models, pre-trained and ready to deploy into your business today.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>

            {/* Dental Portfolio Item */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.1)', background: '#111', aspectRatio: '16/9' }}>
                <video src="/videos/dental_demo.mp4" poster="/videos/dental_thumb.png" autoPlay loop muted playsInline controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
              </div>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 12px', borderRadius: 8, background: 'rgba(56,189,248,0.1)', color: '#38BDF8', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>DENTAL PRACTICES</div>
                <h3 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Front-Desk Copilot</h3>
                <p style={{ fontSize: 18, color: '#A1A1AA', marginBottom: 32, lineHeight: 1.6 }}>
                  An AI receptionist specifically trained on dental intake. Automatically answers FAQs about insurance, availability, and services, then books them directly into your practice management software.
                </p>
                <div style={{ display: 'flex', gap: 16 }}>
                  <a href="https://dental.vervemindai.com" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', background: 'linear-gradient(135deg, #0284C7, #0369A1)', color: '#fff' }}>View Dental Funnel &rarr;</a>
                </div>
              </div>
            </div>

            {/* Roofing Portfolio Item */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div style={{ order: 2, borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.1)', background: '#111', aspectRatio: '16/9' }}>
                <video src="/videos/roofing_demo.mp4" poster="/videos/roofing_thumb.png" autoPlay loop muted playsInline controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
              </div>
              <div style={{ order: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 12px', borderRadius: 8, background: 'rgba(245,158,11,0.1)', color: '#FBBF24', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>ROOFING CONTRACTORS</div>
                <h3 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Immediate Quote Capture</h3>
                <p style={{ fontSize: 18, color: '#A1A1AA', marginBottom: 32, lineHeight: 1.6 }}>
                  When a storm hits, every missed call is a lost $15,000 roof. This AI answers instantly, pre-qualifies the lead's timeline and damage, and books the inspection automatically.
                </p>
                <div style={{ display: 'flex', gap: 16 }}>
                  <a href="https://roofing.vervemindai.com" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', background: 'linear-gradient(135deg, #D97706, #B45309)', color: '#fff' }}>View Roofing Funnel &rarr;</a>
                </div>
              </div>
            </div>

            {/* Reactivation Portfolio Item */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
              <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.1)', background: '#111', aspectRatio: '16/9' }}>
                <video src="/videos/medspa_demo.mp4" poster="/videos/medspa_thumb.png" autoPlay loop muted playsInline controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
              </div>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 12px', borderRadius: 8, background: 'rgba(139,92,246,0.1)', color: '#A78BFA', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>MED SPAS & CLINICS</div>
                <h3 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Reactivation Blitz</h3>
                <p style={{ fontSize: 18, color: '#A1A1AA', marginBottom: 32, lineHeight: 1.6 }}>
                  Our flagship outbound product. Instead of letting old leads gather dust, the AI proactively reaches out, handles objections naturally via text and voice, and successfully reactivates dormant pipeline.
                </p>
                <div style={{ display: 'flex', gap: 16 }}>
                  <a href="https://reactivation.vervemindai.com" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: 'none', background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', color: '#fff' }}>View Core Product &rarr;</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#000', color: '#fff', padding: '80px 0 40px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 60 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#6366F1,#A855F7)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16 }}>V</div>
                VerveMind
              </div>
              <p style={{ color: '#71717A', fontSize: 15, maxWidth: 300 }}>Building digital workforces for local service businesses. Stop missing calls, start scaling.</p>
            </div>
          </div>
          <div style={{ paddingTop: 30, borderTop: '1px solid rgba(255,255,255,.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14, color: '#71717A' }}>
            <div>© {new Date().getFullYear()} VerveMind AI. All rights reserved.</div>
            <div style={{ display: 'flex', gap: 24 }}>
              <a href="/privacy" style={{ color: '#71717A', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="/terms" style={{ color: '#71717A', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
