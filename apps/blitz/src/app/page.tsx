"use client";

import React from 'react';
import { 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  Play, 
  Sparkles,
  Users,
  Activity,
  Mic,
  Database
} from 'lucide-react';

export default function BlitzPage() {
  return (
    <div className="bg-vm-base text-vm-text selection:bg-vm-primary selection:text-black">
      
      {/* Luminescent Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-vm-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-vm-secondary/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 py-6 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-vm-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,245,212,0.3)] group-hover:scale-110 transition-all duration-500">
              <Zap className="text-black" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white leading-none" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                Reactivation<span className="text-vm-primary opacity-80">Blitz</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.4em] text-vm-text-muted uppercase mt-1">Neural MedSpa OS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {['Process', 'ROI', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-vm-text-muted hover:text-vm-primary transition-colors no-underline">
                {item}
              </a>
            ))}
            <a href="https://calendly.com/vervemindai/lead" 
              className="px-8 py-3.5 rounded-xl bg-white text-black text-[11px] font-black uppercase tracking-widest hover:scale-[1.05] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              Initialize Strategy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl glass-panel text-vm-primary text-[10px] font-bold tracking-[0.3em] mb-12 uppercase">
            <Activity size={14} className="animate-pulse" />
            Sector: Revenue Recovery Active
          </div>
          
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h1 className="text-7xl md:text-[120px] font-black tracking-tighter text-white leading-[0.8] mb-10" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                Win Back <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vm-primary via-white to-vm-secondary opacity-90">Lost Patients.</span>
              </h1>
              <p className="text-2xl text-vm-text-secondary leading-relaxed max-w-2xl mb-16 font-light">
                The autonomous system designed to reactivate dormant MedSpa databases, re-engage cold leads, and turn "ghosted" customers into repeat high-ticket bookings.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <a href="https://calendly.com/vervemindai/lead" 
                  className="px-10 py-6 rounded-2xl bg-vm-primary text-black text-xs font-black uppercase tracking-[0.2em] hover:scale-[1.05] transition-all duration-500 shadow-[0_0_50px_rgba(0,245,212,0.2)] flex items-center gap-4">
                  Deploy Blitz Engine <ArrowRight size={18} />
                </a>
                <div className="flex items-center gap-4 px-8 py-6 rounded-2xl glass-panel">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-vm-base bg-white/10" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-vm-text-secondary uppercase tracking-widest">
                    <span className="text-white">47+ MedSpas</span> Synced
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Terminal */}
            <div className="w-full lg:w-[500px] h-[600px] glass-panel rounded-[48px] p-10 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-vm-primary/10 blur-[80px] rounded-full -mr-32 -mt-32 group-hover:bg-vm-primary/20 transition-all duration-700" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-vm-primary animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-vm-primary">Live Synthesis</span>
                    </div>
                    <Database size={18} className="text-vm-text-muted" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                      <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-vm-text-muted">
                        <span>Lead Fragment: #882</span>
                        <span className="text-vm-primary">Re-engaged</span>
                      </div>
                      <div className="text-sm font-mono text-white/80 italic">"I've been meaning to come back for my facial..."</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-vm-primary/5 border border-vm-primary/20 space-y-3">
                      <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-vm-primary">
                        <span>Action Protocol</span>
                        <span>Active</span>
                      </div>
                      <div className="text-sm font-bold text-white">Automated Booking: IPL Treatment - Tuesday 2PM</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-10 border-t border-white/5">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-vm-text-muted mb-2">Yield Recovery</div>
                      <div className="text-4xl font-black text-white">$14,240</div>
                    </div>
                    <div className="h-12 w-32 bg-vm-primary/10 rounded-xl flex items-center justify-center border border-vm-primary/20">
                      <TrendingUp size={24} className="text-vm-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 px-10 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: 'Avg Recovery Rate', value: '73%', icon: Target, color: '#00F5D4' },
            { label: 'Campaign ROI', value: '3.2x', icon: TrendingUp, color: '#d2bbff' },
            { label: 'First Results', value: '14 Days', icon: Zap, color: '#F59E0B' },
          ].map((m) => (
            <div key={m.label} className="glass-panel rounded-[40px] p-12 hover:bg-white/[0.03] transition-all duration-700 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-10 border border-white/5">
                <m.icon size={32} style={{ color: m.color }} />
              </div>
              <h3 className="text-6xl font-black text-white tracking-tighter mb-4" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{m.value}</h3>
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-vm-text-muted">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Terminal */}
      <section id="pricing" className="py-48 px-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-vm-secondary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Node Selection</div>
            <h2 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
              Performance Models
            </h2>
            <p className="text-xl text-vm-text-secondary max-w-xl mx-auto">Scalable infrastructure designed for MedSpa growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Starter Node', price: '$299', features: ['Up to 1,000 contacts', 'Email + SMS Blitz', 'Basic Segmentation', 'Weekly Reports'] },
              { name: 'Growth Node', price: '$599', features: ['Up to 10,000 contacts', 'Omni-channel Synthetic', 'AI Personalization', 'Daily Performance Logs'], premium: true },
              { name: 'Nexus Node', price: 'Custom', features: ['Unlimited Signal Range', 'Dedicated Strategist', 'Custom API Core', 'Priority Response'], contact: true },
            ].map((node) => (
              <div key={node.name} className={`glass-panel rounded-[48px] p-12 relative overflow-hidden transition-all duration-700 hover:translate-y-[-10px] ${node.premium ? 'border-vm-primary/30 bg-vm-primary/5 glow-cyan' : ''}`}>
                {node.premium && (
                  <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-vm-primary text-black text-[9px] font-black uppercase tracking-widest">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-black text-white mb-8" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{node.name}</h3>
                <div className="mb-12">
                  <span className="text-6xl font-black text-white tracking-tighter">{node.price}</span>
                  {!node.contact && <span className="text-vm-text-muted text-xl">/mo</span>}
                </div>
                <ul className="space-y-6 mb-16">
                  {node.features.map(f => (
                    <li key={f} className="flex items-center gap-4 text-sm text-vm-text-secondary font-medium">
                      <CheckCircle size={18} className="text-vm-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://calendly.com/vervemindai/lead" 
                  className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 text-center flex items-center justify-center gap-3 ${node.premium ? 'bg-vm-primary text-black hover:scale-[1.02]' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}>
                  Access Node <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-vm-primary/20 flex items-center justify-center border border-vm-primary/30">
              <Zap className="text-vm-primary" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-white" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
              Reactivation<span className="text-vm-primary">Blitz</span>
            </span>
          </div>
          
          <div className="flex gap-12">
            <span className="text-[10px] font-bold text-vm-text-muted uppercase tracking-widest">© 2024 VerveMind AI</span>
            <span className="text-[10px] font-bold text-vm-text-muted uppercase tracking-widest">Neural Infrastructure v1.0.4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
