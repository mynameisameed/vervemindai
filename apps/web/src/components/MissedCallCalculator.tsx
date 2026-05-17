"use client";
import React, { useState } from 'react';

const TEAL = '#00F5D4';
const MUTED = '#A1A1AA';
const WHITE = '#FFFFFF';
const BORDER = 'rgba(255,255,255,0.06)';
const WHATSAPP_LINK = 'https://wa.me/917995851271?text=';

/** Format number in Indian lakh/crore notation */
function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${n.toLocaleString('en-IN')}`;
}

const PRESETS = [
  { label: '🦷 Dental Clinic', missedCalls: 5, avgValue: 3000 },
  { label: '💆 MedSpa', missedCalls: 4, avgValue: 5000 },
  { label: '🏠 Real Estate', missedCalls: 8, avgValue: 15000 },
  { label: '🏥 Hospital OPD', missedCalls: 12, avgValue: 2000 },
];

export default function MissedCallCalculator() {
  const [missedCalls, setMissedCalls] = useState(5);
  const [avgValue, setAvgValue] = useState(3000);
  const [conversionRate] = useState(40);

  const monthlyLoss = missedCalls * avgValue * 30 * (conversionRate / 100);
  const yearlyLoss = monthlyLoss * 12;
  const recoverable = monthlyLoss * 0.8; // VerveMind recovers ~80%

  const reportText = `Hi VerveMind! My clinic misses ~${missedCalls} calls/day. Avg patient value: ₹${avgValue}. Monthly loss estimate: ${formatINR(monthlyLoss)}. I'd like a demo.`;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${BORDER}`,
      borderRadius: 24,
      padding: '40px 32px',
      maxWidth: 640,
      margin: '0 auto',
    }}>
      <h3 style={{ fontSize: 22, fontWeight: 800, color: WHITE, marginBottom: 8, textAlign: 'center' }}>
        📊 Missed Call Revenue Calculator
      </h3>
      <p style={{ color: MUTED, fontSize: 13, textAlign: 'center', marginBottom: 28 }}>
        See how many lakhs your clinic is losing every month
      </p>

      {/* Industry presets */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28, justifyContent: 'center' }}>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => { setMissedCalls(p.missedCalls); setAvgValue(p.avgValue); }}
            style={{
              background: (missedCalls === p.missedCalls && avgValue === p.avgValue) ? 'rgba(0,245,212,0.12)' : 'rgba(255,255,255,0.04)',
              border: (missedCalls === p.missedCalls && avgValue === p.avgValue) ? '1px solid rgba(0,245,212,0.3)' : `1px solid ${BORDER}`,
              color: (missedCalls === p.missedCalls && avgValue === p.avgValue) ? TEAL : MUTED,
              fontSize: 12, fontWeight: 600, padding: '6px 14px',
              borderRadius: 16, cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Slider: Missed calls per day */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <label style={{ fontSize: 13, color: MUTED }}>Missed calls per day</label>
          <span style={{ fontSize: 15, fontWeight: 700, color: WHITE }}>{missedCalls}</span>
        </div>
        <input
          type="range" min={1} max={25} value={missedCalls}
          onChange={(e) => setMissedCalls(Number(e.target.value))}
          style={{ width: '100%', accentColor: TEAL, cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
          <span>1</span><span>25</span>
        </div>
      </div>

      {/* Slider: Average patient/client value */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <label style={{ fontSize: 13, color: MUTED }}>Avg patient/lead value (₹)</label>
          <span style={{ fontSize: 15, fontWeight: 700, color: WHITE }}>₹{avgValue.toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range" min={500} max={50000} step={500} value={avgValue}
          onChange={(e) => setAvgValue(Number(e.target.value))}
          style={{ width: '100%', accentColor: TEAL, cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
          <span>₹500</span><span>₹50,000</span>
        </div>
      </div>

      {/* Results */}
      <div style={{
        background: 'rgba(255,59,48,0.06)',
        border: '1px solid rgba(255,59,48,0.15)',
        borderRadius: 16, padding: 24, marginBottom: 16,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#FF6B6B', marginBottom: 8 }}>
          YOU&apos;RE LOSING
        </div>
        <div style={{ fontSize: 36, fontWeight: 900, color: '#FF6B6B', letterSpacing: '-0.03em' }}>
          {formatINR(monthlyLoss)}<span style={{ fontSize: 16, fontWeight: 600, opacity: 0.7 }}>/month</span>
        </div>
        <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
          {formatINR(yearlyLoss)} per year
        </div>
      </div>

      <div style={{
        background: 'rgba(0,245,212,0.06)',
        border: '1px solid rgba(0,245,212,0.15)',
        borderRadius: 16, padding: 24, marginBottom: 28,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: TEAL, marginBottom: 8 }}>
          VERVEMIND CAN RECOVER
        </div>
        <div style={{ fontSize: 36, fontWeight: 900, color: TEAL, letterSpacing: '-0.03em' }}>
          {formatINR(recoverable)}<span style={{ fontSize: 16, fontWeight: 600, opacity: 0.7 }}>/month</span>
        </div>
        <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
          80% recovery rate · AI answers every missed call
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <a
          href={`${WHATSAPP_LINK}${encodeURIComponent(reportText)}`}
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px', borderRadius: 12,
            fontWeight: 700, textDecoration: 'none', fontSize: 14,
            background: '#25D366', color: '#000',
            boxShadow: '0 8px 24px rgba(37,211,102,0.25)',
          }}
        >
          💬 Get Your Report on WhatsApp
        </a>
        <p style={{ fontSize: 11, color: MUTED, marginTop: 12 }}>
          Based on {conversionRate}% conversion rate · {missedCalls * 30} missed calls/month
        </p>
      </div>
    </div>
  );
}
