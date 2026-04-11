import React from 'react';
import { Metadata } from 'next';
import PricingComparison from '../../components/PricingComparison';
import ROICalculator from '../../components/ROICalculator';

export const metadata: Metadata = {
  title: 'Pricing | VerveMind AI',
  description: 'Transparent pricing for our AI receptionist and autonomous reactivation engines.',
  alternates: {
    canonical: 'https://vervemindai.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <div style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      <div style={{ paddingTop: '160px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60, padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.03em', marginBottom: 16 }}>Autonomous Economics.</h1>
          <p style={{ color: '#A1A1AA', fontSize: 20, maxWidth: 600, margin: '0 auto' }}>
            Scale infinitely. Only pay for the infrastructure you consume. 
            No payroll taxes, no sick days, no training curves.
          </p>
        </div>
        
        <ROICalculator />
        <PricingComparison />
        
      </div>
      
    </div>
  );
}
