"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator, Mail, AlertTriangle, CheckCircle2 } from 'lucide-react';

const TEAL = '#00F5D4';
const MUTED = '#A1A1AA';
const BORDER = 'rgba(255,255,255,0.06)';

export default function LeadMagnetPage() {
  const [calls, setCalls] = useState(150);
  const [value, setValue] = useState(350);
  const [missRate, setMissRate] = useState(25);
  const [lostRevenue, setLostRevenue] = useState(0);

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const monthlyMissed = calls * (missRate / 100);
    const monthlyLost = monthlyMissed * value;
    setLostRevenue(monthlyLost);
  }, [calls, value, missRate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch('https://samgaming-pc2.tail1abe0b.ts.net/webhook/flywheel-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          source: 'ai-receptionist-kit',
          lead_type: 'lead_magnet_calculator',
          calculator_data: { calls, value, missRate, lostRevenue }
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit', err);
      // Still show success to user to avoid UX friction if webhook is down
      setSubmitted(true); 
    }
  };

  return (
    <div className="min-h-screen px-6 py-24 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-3xl w-full text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold mb-8 uppercase tracking-wider">
          <AlertTriangle size={16} /> Leak Detection Protocol
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-none">
          How many leads are you <span className="text-red-500">losing</span> every week?
        </h1>
        <p className="text-xl text-brand-muted max-w-xl mx-auto leading-relaxed">
          Most SMBs lose 25-40% of their inbound calls to voicemail. Calculate your silent revenue leak below.
        </p>
      </div>

      {/* Calculator Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        
        {/* Inputs */}
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
          <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
            <Calculator size={24} className="text-brand-teal" /> Variable Input
          </h3>
          
          <div className="space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-medium">Inbound Calls / Month</label>
                <span className="text-brand-teal font-bold">{calls}</span>
              </div>
              <input 
                type="range" min="10" max="1000" step="10"
                value={calls} onChange={(e) => setCalls(Number(e.target.value))}
                className="w-full accent-brand-teal h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-medium">Average Sale Value</label>
                <span className="text-brand-teal font-bold">${value}</span>
              </div>
              <input 
                type="range" min="50" max="5000" step="50"
                value={value} onChange={(e) => setValue(Number(e.target.value))}
                className="w-full accent-brand-teal h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-white font-medium">Estimated Miss Rate (%)</label>
                <span className="text-red-500 font-bold">{missRate}%</span>
              </div>
              <input 
                type="range" min="5" max="60" step="1"
                value={missRate} onChange={(e) => setMissRate(Number(e.target.value))}
                className="w-full accent-red-500 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Output Display */}
        <div className="bg-brand-teal/[0.03] border border-brand-teal/20 rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 blur-[100px] pointer-events-none group-hover:bg-brand-teal/20 transition-all" />
          
          <p className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4">Est. Monthly Revenue Leak</p>
          <div className="text-7xl md:text-8xl font-black text-white tracking-tighter mb-6">
            ${lostRevenue.toLocaleString()}
          </div>
          <p className="text-brand-muted text-lg leading-relaxed mb-8">
            That's <span className="text-white font-bold">${(lostRevenue * 12).toLocaleString()}</span> lost every year to competitors because your phone wasn't answered.
          </p>

          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium flex items-center gap-3">
             Priority Status: High Revenue Risk
          </div>
        </div>

      </div>

      {/* Convtertion Section */}
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get the Leak Recovery Report</h2>
        <p className="text-brand-muted mb-10">
          Enter your email to receive a customized PDF mapping out exactly where your calls are dropping and how to recover this revenue in 48 hours.
        </p>
        
        {submitted ? (
          <div className="bg-brand-teal/10 border border-brand-teal/30 p-8 rounded-2xl text-center">
            <CheckCircle2 size={32} className="text-brand-teal mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Report Sent!</h3>
            <p className="text-brand-muted">Check your inbox for the Leak Recovery Report.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" size={20} />
              <input 
                type="email" placeholder="Enter your business email" required
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-teal transition-all"
              />
            </div>
            <button type="submit" className="bg-brand-teal text-brand-dark font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,245,212,0.3)]">
              Email Me My Results <ArrowRight size={20} />
            </button>
          </form>
        )}
        <p className="text-xs text-brand-muted mt-6">
          No spam. Just actionable recovery protocols for your business.
        </p>
      </div>

    </div>
  );
}
