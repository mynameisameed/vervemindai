"use client";

import React, { useEffect } from 'react';
import { Metadata } from 'next';
import PricingComparison from '@/components/PricingComparison';
import ROICalculator from '@/components/ROICalculator';

const TEAL = '#00F5D4';
const BORDER = 'rgba(255,255,255,0.06)';
const MUTED = 'var(--text-muted)';

export default function PricingClient() {
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
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', fontFamily: 'var(--font-inter), Inter, system-ui, sans-serif' }}>
      
      <div style={{ paddingTop: '160px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 16 }}>Lock in before we raise prices.</h1>
          <p style={{ color: MUTED, fontSize: 20, maxWidth: 600, margin: '0 auto' }}>
            Founder rate: first 10 clients lock in current pricing forever. Two plans, zero contracts.
          </p>
        </div>
        
        <ROICalculator />
        <PricingComparison />

        {/* Calendly Inline Section */}
        <section style={{ maxWidth: 1000, margin: '100px auto', padding: '0 24px 100px' }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 48,
            padding: '40px 32px',
            background: 'linear-gradient(180deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)',
            border: '1px solid rgba(0,245,212,0.15)',
            borderRadius: 24
          }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', marginBottom: 16 }}>Ready to see the ROI in person?</h2>
            <p style={{ color: MUTED, fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
              Book a strategy call to map out your infrastructure needs and get a custom quote.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, borderRadius: 24, overflow: 'hidden' }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/vervemindai/lead?hide_gdpr_banner=1&background_color=09090b&text_color=e5e2e1&primary_color=00f5d4"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </section>
        
      </div>
      
    </div>
  );
}
