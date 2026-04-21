"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, PhoneMissed } from 'lucide-react';

export default function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(15);
  const [avgTicket, setAvgTicket] = useState(450);
  const [closeRate, setCloseRate] = useState(40);
  
  const [recoveredRevenue, setRecoveredRevenue] = useState(0);

  // VerveMind monthly cost
  const softwareCost = 177;

  useEffect(() => {
    // Math: If AI answers 100% of missed calls, and we assume an 80% qualification rate 
    // multiplied by the human close rate...
    const qualifiedLeads = missedCalls * 4 * 0.8; // Monthly missed calls qualified
    const newBookings = qualifiedLeads * (closeRate / 100);
    const newRevenue = newBookings * avgTicket;
    
    setRecoveredRevenue(newRevenue);
  }, [missedCalls, avgTicket, closeRate]);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: 24, padding: 40, maxWidth: 800, margin: '80px auto',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)', fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(0,245,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <Calculator size={32} color="#00F5D4" />
        </div>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#FFF', margin: '0 0 12px' }}>Calculate Your Lost Revenue</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 16, margin: 0 }}>Every missed call is a patient or customer walking away. See what happens when VerveMind picks up 100% of the time.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
        
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: '#E5E2E1', display: 'flex', alignItems: 'center', gap: 8 }}>
                <PhoneMissed size={16} color="#A1A1AA" /> Missed Calls per Week
              </label>
              <span style={{ fontWeight: 700, color: '#00F5D4' }}>{missedCalls} calls</span>
            </div>
            <input 
              type="range" min="1" max="100" value={missedCalls} 
              onChange={(e) => setMissedCalls(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#00F5D4', cursor: 'grab' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: '#E5E2E1', display: 'flex', alignItems: 'center', gap: 8 }}>
                <DollarSign size={16} color="#A1A1AA" /> Average Ticket/LTV
              </label>
              <span style={{ fontWeight: 700, color: '#00F5D4' }}>${avgTicket.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="50" max="5000" step="50" value={avgTicket} 
              onChange={(e) => setAvgTicket(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#00F5D4', cursor: 'grab' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <label style={{ fontSize: 14, fontWeight: 600, color: '#E5E2E1', display: 'flex', alignItems: 'center', gap: 8 }}>
                <TrendingUp size={16} color="#A1A1AA" /> Expected Close Rate
              </label>
              <span style={{ fontWeight: 700, color: '#00F5D4' }}>{closeRate}%</span>
            </div>
            <input 
              type="range" min="10" max="90" step="5" value={closeRate} 
              onChange={(e) => setCloseRate(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#00F5D4', cursor: 'grab' }}
            />
          </div>

        </div>

        {/* Results output */}
        <div style={{ background: 'var(--surface)', borderRadius: 20, padding: 32, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            New Monthly Revenue
          </div>
          <div style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 800, color: '#FFF', letterSpacing: '-0.04em', marginBottom: 24 }}>
            +${Math.round(recoveredRevenue).toLocaleString()}
          </div>
          
          <div style={{ background: 'rgba(0,245,212,0.1)', border: '1px solid rgba(0,245,212,0.2)', padding: 16, borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ color: '#00F5D4', fontWeight: 600, fontSize: 14 }}>VerveMind Cost</span>
            <span style={{ color: '#00F5D4', fontWeight: 800, fontSize: 18 }}>${softwareCost}/mo</span>
          </div>

          <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            * This assumes VerveMind intercepts {missedCalls * 4} voicemails a month, successfully pre-qualifies 80% of them, and routes them back into your pipeline closing at {closeRate}%.
          </div>
        </div>

      </div>
    </div>
  );
}
