import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCaseStudies } from '../../lib/case-studies';
import { ArrowRight, BarChart3, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies & Results | VerveMind AI',
  description: 'See how local businesses are scaling operations and recovering missed revenue with VerveMind AI.',
  alternates: { canonical: 'https://vervemindai.com/case-studies' },
};

export default function CaseStudiesIndex() {
  const caseStudies = getAllCaseStudies();

  return (
    <div style={{ minHeight: '100vh', background: '#09090B', color: '#E5E2E1', paddingBottom: 100 }}>
      {/* Hero */}
      <section style={{ padding: '160px 24px 80px', textAlign: 'center', background: 'radial-gradient(circle at top, rgba(0,245,212,0.05), transparent 60%)' }}>
        <h1 style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.04em', margin: '0 0 24px' }}>
          Real Businesses. <br /><span style={{ color: '#00F5D4' }}>Autonomous Results.</span>
        </h1>
        <p style={{ fontSize: 18, color: '#A1A1AA', maxWidth: 600, margin: '0 auto' }}>
          Explore how MedSpas, Dental Clinics, and Home Service contractors are leveraging our AI agents to scale.
        </p>
      </section>

      {/* Grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 32 }}>
        {caseStudies.map((study) => (
          <Link href={`/case-studies/${study.slug}`} key={study.slug} style={{ textDecoration: 'none' }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: 24, padding: 32, height: '100%', display: 'flex', flexDirection: 'column',
              transition: 'transform 0.2s, borderColor 0.2s'
            }} className="cs-card">
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#00F5D4', background: 'rgba(0,245,212,0.1)', padding: '4px 12px', borderRadius: 999 }}>
                  <Building size={14} /> {study.industry}
                </span>
                <span style={{ display: 'none' }} className="cs-arrow">
                  <ArrowRight size={20} color="#00F5D4" />
                </span>
              </div>

              <h2 style={{ fontSize: 24, fontWeight: 700, color: '#FFF', marginBottom: 12, lineHeight: 1.3 }}>{study.title}</h2>
              <p style={{ color: '#A1A1AA', fontSize: 15, lineHeight: 1.6, marginBottom: 32, flex: 1 }}>{study.description}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24 }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#FFF' }}>{study.results.stat1}</div>
                  <div style={{ fontSize: 12, color: '#71717A', fontWeight: 600, textTransform: 'uppercase' }}>{study.results.label1}</div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#00F5D4' }}>{study.results.stat2}</div>
                  <div style={{ fontSize: 12, color: '#71717A', fontWeight: 600, textTransform: 'uppercase' }}>{study.results.label2}</div>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cs-card:hover { transform: translateY(-4px); border-color: rgba(0,245,212,0.3) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .cs-card:hover .cs-arrow { display: block !important; }
      ` }} />
    </div>
  );
}
