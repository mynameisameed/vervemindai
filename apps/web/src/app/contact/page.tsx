import React from 'react';
import { Metadata } from 'next';
import { Mail, Calendar, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | VerveMind AI',
  description: 'Get in touch with VerveMind AI support and deployment teams.',
  alternates: {
    canonical: 'https://vervemindai.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '180px 24px 100px' }}>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.03em', color: '#FFF' }}>Contact Operations.</h1>
        <p style={{ fontSize: 18, color: '#A1A1AA', marginBottom: 60, maxWidth: 600 }}>
          Whether you need technical support, have questions about HIPAA compliance, or are ready to deploy your AI receptionist, we're here to help.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          
          <div style={{ background: '#121215', padding: 40, borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
            <Calendar size={32} color="#00F5D4" style={{ marginBottom: 24 }} />
            <h3 style={{ fontSize: 20, color: '#FFF', fontWeight: 700, marginBottom: 8 }}>Sales & Architecture</h3>
            <p style={{ color: '#A1A1AA', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>Ready to see the product? Book an architecture call to map out your custom AI requirements.</p>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" style={{ color: '#00F5D4', fontWeight: 600, textDecoration: 'none' }}>Book on Calendly &rarr;</a>
          </div>

          <div style={{ background: '#121215', padding: 40, borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
            <Mail size={32} color="#38BDF8" style={{ marginBottom: 24 }} />
            <h3 style={{ fontSize: 20, color: '#FFF', fontWeight: 700, marginBottom: 8 }}>General Inquiry</h3>
            <p style={{ color: '#A1A1AA', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>For partnership requests, press logic, or general corporate contact.</p>
            <a href="mailto:team@vervemindai.com" style={{ color: '#38BDF8', fontWeight: 600, textDecoration: 'none' }}>team@vervemindai.com</a>
          </div>

          <div style={{ background: '#121215', padding: 40, borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
            <MapPin size={32} color="#FBBF24" style={{ marginBottom: 24 }} />
            <h3 style={{ fontSize: 20, color: '#FFF', fontWeight: 700, marginBottom: 8 }}>Area Served</h3>
            <p style={{ color: '#A1A1AA', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>We deploy autonomous workforces to registered businesses operating entirely within the United States.</p>
            <span style={{ color: '#FBBF24', fontWeight: 600 }}>US / Remote Deployment</span>
          </div>

        </div>
      </div>

    </div>
  );
}
