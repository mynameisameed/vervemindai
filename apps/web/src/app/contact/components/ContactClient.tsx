"use client";

import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';

const TEAL = '#00F5D4';
const BORDER = 'rgba(255,255,255,0.06)';
const MUTED = '#A1A1AA';

export default function ContactClient() {
  // Load Calendly widget script once
  useEffect(() => {
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '160px 24px 100px' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '5px 16px', borderRadius: 999, background: 'rgba(0,245,212,0.08)', border: `1px solid rgba(0,245,212,0.2)`, color: TEAL, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
            Contact
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.04em', color: '#FFF', lineHeight: 1.1 }}>
            Let's Build Your<br />AI Workforce.
          </h1>
          <p style={{ fontSize: 18, color: MUTED, maxWidth: 560, lineHeight: 1.65 }}>
            Whether you need technical support, have questions about HIPAA compliance, or are ready to deploy — we're here. Book a call directly below.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>

          {/* LEFT — Calendly inline embed */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 24, overflow: 'hidden' }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/vervemindai/lead?hide_gdpr_banner=1&background_color=09090b&text_color=e5e2e1&primary_color=00f5d4"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>

          {/* RIGHT — Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 20, padding: 32 }}>
              <Mail size={28} color={TEAL} style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, color: '#FFF', fontWeight: 700, marginBottom: 8 }}>General Inquiry</h3>
              <p style={{ color: MUTED, fontSize: 15, marginBottom: 20, lineHeight: 1.6 }}>
                For partnership requests, press inquiries, or general corporate contact.
              </p>
              <a href="mailto:team@vervemindai.com" style={{ color: TEAL, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
                team@vervemindai.com
              </a>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 20, padding: 32 }}>
              <MapPin size={28} color="#FBBF24" style={{ marginBottom: 16 }} />
              <h3 style={{ fontSize: 18, color: '#FFF', fontWeight: 700, marginBottom: 8 }}>Area Served</h3>
              <p style={{ color: MUTED, fontSize: 15, marginBottom: 20, lineHeight: 1.6 }}>
                We deploy autonomous workforces to registered businesses in the United States and India.
              </p>
              <span style={{ color: '#FBBF24', fontWeight: 600, fontSize: 15 }}>US · India (Hyderabad, Bengaluru, Mumbai)</span>
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)', border: `1px solid rgba(0,245,212,0.15)`, borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>💬</div>
              <h3 style={{ fontSize: 18, color: '#FFF', fontWeight: 700, marginBottom: 8 }}>India? WhatsApp Us</h3>
              <p style={{ color: MUTED, fontSize: 15, marginBottom: 20, lineHeight: 1.6 }}>
                Indian businesses can reach us directly on WhatsApp for a demo in Telugu, Hindi, or English.
              </p>
              <a
                href="https://wa.me/+15555550000?text=Hi%20VerveMind%2C%20I%27d%20like%20a%20demo"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#000', fontWeight: 700, textDecoration: 'none', padding: '10px 20px', borderRadius: 10, fontSize: 14 }}
              >
                💬 WhatsApp Now
              </a>
            </div>

          </div>
        </div>

        {/* Mobile fallback — show Calendly link on small screens instead of embed */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
            .calendly-inline-widget { height: 550px !important; }
          }
        ` }} />
      </div>
    </div>
  );
}
