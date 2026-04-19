"use client";

import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { name: 'Monthly Availability', verve: '24/7/365', service: 'Shift-based (16 hrs)', human: '40 hours/wk' },
  { name: 'Average Response Time', verve: '< 2 seconds', service: '3-5 rings', human: '2-4 rings' },
  { name: 'Books Appointments', verve: true, service: 'Takes Messages', human: true },
  { name: 'CRM/PMS Integration', verve: true, service: false, human: true },
  { name: 'Simultaneous Calls', verve: 'Infinite', service: 'Varies', human: '1 at a time' },
  { name: 'Sick Days / Turnover', verve: 'None', service: 'High turnover', human: 'Common' },
  { name: 'After-Hours Emergencies', verve: true, service: 'Extra fees', human: false },
  { name: 'Training Required', verve: 'None (Pre-trained)', service: '2-4 weeks', human: '3-6 weeks' },
];

export default function PricingComparison() {
  return (
    <section id="comparison" style={{ padding: '120px 0', background: '#09090B', position: 'relative' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: 16 }}>
             The New Standard of Operations
          </h2>
          <p style={{ color: '#A1A1AA', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
            Traditional answering services are message-takers. Hiring more staff kills your margins. Autonomous AI solves both.
          </p>
        </div>

        <div style={{ 
          background: 'rgba(255,255,255,0.02)', 
          border: '1px solid rgba(255,255,255,0.05)', 
          borderRadius: 24, 
          overflow: 'hidden' 
        }}>
          {/* Header Row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(150px, 1.5fr) 1fr 1fr 1fr', 
            background: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '24px'
          }}>
            <div style={{ fontWeight: 600, color: '#A1A1AA' }}>Capabilities</div>
            <div style={{ fontWeight: 800, color: '#00F5D4', fontSize: 18 }}>VerveMind AI</div>
            <div style={{ fontWeight: 600, color: '#E5E2E1' }}>Answering Service</div>
            <div style={{ fontWeight: 600, color: '#E5E2E1' }}>Human Receptionist</div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={idx} 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'minmax(150px, 1.5fr) 1fr 1fr 1fr', 
                padding: '20px 24px',
                borderBottom: idx === features.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.03)',
                background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                alignItems: 'center'
              }}
            >
              <div style={{ color: '#E5E2E1', fontSize: 15, fontWeight: 500 }}>{feature.name}</div>
              
              {/* VerveMind Column - Always Highlighted */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#00F5D4', fontWeight: 600, fontSize: 15 }}>
                {feature.verve === true ? <Check size={18} strokeWidth={3} /> : feature.verve === false ? <X size={18} color="#EF4444" /> : feature.verve}
              </div>

              {/* Service Column */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#A1A1AA', fontSize: 14 }}>
                {feature.service === true ? <Check size={16} /> : feature.service === false ? <X size={16} /> : feature.service}
              </div>

              {/* Human Column */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#A1A1AA', fontSize: 14 }}>
                {feature.human === true ? <Check size={16} /> : feature.human === false ? <X size={16} /> : feature.human}
              </div>
            </motion.div>
          ))}

          {/* Pricing Footer */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(150px, 1.5fr) 1fr 1fr 1fr',
            background: 'rgba(0,245,212,0.05)',
            borderTop: '1px solid rgba(0,245,212,0.15)',
            padding: '24px',
            alignItems: 'center'
          }}>
            <div style={{ fontWeight: 800, color: '#E5E2E1', fontSize: 16 }}>Monthly Investment</div>
            <div>
              <div style={{ fontWeight: 800, color: '#00F5D4', fontSize: 24 }}>$297 <span style={{ fontSize: 12, color: '#A1A1AA', fontWeight: 500 }}>/mo</span></div>
              <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>+ $797–997 one-time setup</div>
            </div>
            <div style={{ fontWeight: 600, color: '#A1A1AA', fontSize: 18 }}>$3,500 <span style={{ fontSize: 12, fontWeight: 400 }}>/mo</span></div>
            <div style={{ fontWeight: 600, color: '#A1A1AA', fontSize: 18 }}>$4,000+ <span style={{ fontSize: 12, fontWeight: 400 }}>/mo</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
