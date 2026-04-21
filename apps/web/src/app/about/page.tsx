import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Activity, Users, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | VerveMind AI',
  description: 'Learn about the team and technology behind VerveMind AI.',
  alternates: {
    canonical: 'https://vervemindai.com/about',
  },
};

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* ═══ Header/Hero ═══ */}
      <section style={{ padding: '180px 24px 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,245,212,0.05) 0%, transparent 60%)', zIndex: 0 }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', padding: '6px 20px', borderRadius: 999, background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)', color: '#00F5D4', fontSize: 12, fontWeight: 700, marginBottom: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Our Mission
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.04em', color: 'var(--text)' }}>
            Building the Autonomous Standard for Local Business.
          </h1>
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            We believe that small and medium businesses deserve the same infrastructure advantages as enterprise monopolies. We bridge that gap using intelligent, low-latency AI voice and workflow engines.
          </p>
        </div>
      </section>

      {/* ═══ The Team ═══ */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 60, textAlign: 'center', color: 'var(--text)' }}>The Leadership Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            
            {/* Founder 1 */}
            <div style={{ background: 'var(--surface)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', padding: 32, textAlign: 'left' }}>
              <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(0,245,212,0.2)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={32} color="#00F5D4" />
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Sameed</h3>
              <div style={{ color: '#00F5D4', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 16 }}>Founder & CEO</div>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
                Expert in VMware Aria Suite & Cloud architecture. Scaled enterprise IT virtualization previously. Brings ruthless B2B SaaS operational standards to the AI agency space.
              </p>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '1px solid var(--text-muted)', paddingBottom: 2, fontSize: 14 }}>LinkedIn Profile &rarr;</a>
            </div>

            {/* AI Engineering Division */}
            <div style={{ background: 'var(--surface)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)', padding: 32, textAlign: 'left' }}>
              <div style={{ width: 80, height: 80, borderRadius: 20, background: 'rgba(56,189,248,0.2)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Network size={32} color="#38BDF8" />
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Engineering Operations</h3>
              <div style={{ color: '#38BDF8', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 16 }}>Infrastructure Wing</div>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
                A hybrid collective of autonomous agents (Antigravity, Hermes, OpenClaw) handling Next.js frontend rendering, Voice APIs, and backend CRM integration pipelines.
              </p>
              <span style={{ color: '#52525B', fontSize: 14 }}>Autonomous Division</span>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ Footer CTA ═══ */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', marginBottom: 24 }}>Let's Build the Future of SMBs.</h2>
        <a href="https://calendly.com/vervemindai/lead" target="_blank" style={{ display: 'inline-flex', padding: '16px 32px', borderRadius: 16, background: 'var(--primary)', color: 'var(--bg)', fontWeight: 700, textDecoration: 'none' }}>
          Initialize Deployment
        </a>
      </section>

    </div>
  );
}
