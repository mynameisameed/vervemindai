"use client";

import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  PhoneCall, 
  Code2, 
  Sparkles,
  FileCode2,
  ListChecks,
  MessageSquare,
  ChevronRight,
  Database,
  Terminal,
  Activity
} from 'lucide-react';

export default function StarterKitPage() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-base font-body text-text-secondary pb-32">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-base/40 backdrop-blur-3xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter flex items-center gap-2 text-white" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            VerveMind<span className="text-primary opacity-80">KITS</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            <a href="#features" className="hover:text-primary transition-all duration-300">Architecture</a>
            <a href="#included" className="hover:text-primary transition-all duration-300">Payload</a>
            <a href="#pricing" className="hover:text-primary transition-all duration-300">Deployment</a>
          </div>
          <a href="#pricing" className="glass-panel px-8 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest text-white hover:border-primary/30 transition-all duration-500">
            Initialize Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-56 pb-40 px-6 relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl glass-panel border border-white/5 text-primary text-[10px] font-bold mb-12 uppercase tracking-[0.3em] terminal-text">
            <Activity size={14} className="animate-pulse" /> Node Status: Operational v1.02
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-white" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
            Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Infrastructure</span>
          </h1>
          
          <p className="text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16 font-light">
            The definitive synthetic receptionist toolkit. Transform your missed calls into a high-fidelity revenue engine with pre-engineered logic nodes.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="#pricing" className="w-full md:w-auto bg-primary text-base px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-[0_20px_60px_rgba(0,245,212,0.3)] hover:shadow-[0_20px_80px_rgba(0,245,212,0.5)] hover:scale-[1.02] transition-all duration-500 group">
              Acquire Protocol <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col items-start gap-1">
              <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <ShieldCheck size={14} className="text-primary" /> Instant Delivery
              </p>
              <p className="text-white/40 text-[9px] font-medium tracking-widest uppercase">Encryption: AES-256 Validated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Protocols - Grid Layout */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-12 rounded-[40px] group hover:bg-white/[0.02] transition-all duration-700">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 mb-8 group-hover:glow-cyan transition-all duration-500">
                <PhoneCall size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-3xl tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>Multi-Threaded Capture</h3>
              <p className="text-text-muted leading-relaxed text-lg">Process thousands of concurrent calls without latency. A synthetic brain that never sleeps, never forgets, and never misses a lead.</p>
            </div>

            <div className="glass-panel p-12 rounded-[40px] group hover:bg-white/[0.02] transition-all duration-700">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 mb-8 group-hover:glow-cyan transition-all duration-500">
                <Database size={28} className="text-secondary" />
              </div>
              <h3 className="font-bold text-3xl tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>Atomic Intelligence</h3>
              <p className="text-text-muted leading-relaxed text-lg">Deploy pre-optimized Vapi system prompts. Logic nodes engineered for immediate high-conversion intake and SMS scheduling.</p>
            </div>

            <div className="glass-panel p-12 rounded-[40px] group hover:bg-white/[0.02] transition-all duration-700">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 mb-8 group-hover:glow-cyan transition-all duration-500">
                <Terminal size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-3xl tracking-tight text-white mb-4" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>Rapid Deployment</h3>
              <p className="text-text-muted leading-relaxed text-lg">Zero-code infrastructure blueprints. From missing revenue to autonomous operations in under 48 hours of setup time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artifacts Gallery - Horizontal Reveal */}
      <section id="included" className="py-40 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 terminal-text">Inventory Payload</div>
              <h2 className="text-6xl font-black tracking-tight text-white leading-tight" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
                The Complete <br />Blueprint.
              </h2>
            </div>
            <p className="text-xl text-text-muted max-w-sm mb-2">A curated collection of production-ready assets for your synthetic agency operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FileCode2, title: 'Vapi System Prompts', desc: 'Precision-tuned behavioral architectures that handle complex human interactions with surgical accuracy.', color: 'var(--vm-primary)' },
              { icon: MessageSquare, title: 'SMS Protocol Library', desc: 'The "Invisible Salesman". Text sequences engineered to bridge the gap between missed calls and scheduled appointments.', color: 'var(--vm-secondary)' },
              { icon: ListChecks, title: 'Operational SOPs', desc: 'Cryptic to clear. Step-by-step documentation for deploying the full infrastructure stack in record time.', color: 'var(--vm-positive)' },
              { icon: Zap, title: 'GHL Logic Snapshots', desc: 'Pre-built automation nodes. Import the entire workflow directly into your CRM with a single click.', color: 'var(--vm-accent)' },
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-[32px] flex items-start gap-8 group hover:border-white/20 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center shrink-0 border border-white/5">
                  <item.icon size={32} style={{ color: item.color }} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-3 text-white" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>{item.title}</h4>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Section - The Main CTA */}
      <section id="pricing" className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-30" />
            
            <div className="relative z-10">
              <div className="inline-block px-5 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-12 terminal-text">
                Protocol: Launch Phase Alpha
              </div>
              
              <h2 className="text-7xl md:text-8xl font-black mb-12 text-white tracking-tighter leading-none" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
                Initialize <br />Deployment.
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                <div className="glass-panel px-8 py-4 rounded-2xl border border-white/5">
                  <span className="text-white/20 line-through text-2xl font-bold tracking-tighter mr-4">$197.00</span>
                  <span className="text-6xl font-black text-primary tracking-tighter">$49.00</span>
                </div>
              </div>
              
              <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left mb-20">
                {[
                  'Full Vapi Architecture',
                  'SMS Protocol Scripts',
                  'GHL Logic Snapshots',
                  'Atomic Setup SOPs',
                  'LIFETIME Artifact Access',
                  'Priority Node Updates'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/80 font-medium">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary">✓</div>
                    {text}
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <a href="https://buy.stripe.com/dRmaEWgweaSO2xv16Ag3603" className="w-full bg-primary text-base py-8 rounded-[32px] font-black text-3xl flex items-center justify-center gap-4 hover:scale-[1.02] hover:shadow-[0_20px_80px_rgba(0,245,212,0.4)] transition-all duration-500 group">
                  Download Protocol <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-500" />
                </a>
                
                <div className="flex items-center justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  <span className="flex items-center gap-2 italic">Secure Node Transmission <ShieldCheck size={14} /></span>
                  <span className="flex items-center gap-2">Single Acquire <Zap size={14} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/[0.03] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="space-y-6">
              <div className="font-black text-3xl tracking-tighter text-white" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
                VerveMind<span className="text-primary opacity-80">KITS</span>
              </div>
              <p className="text-text-muted max-w-sm leading-relaxed">
                Engineering the next generation of synthetic business infrastructure. Autonomous, intelligent, and unbreakable.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
              <div className="space-y-6">
                <div className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Protocols</div>
                <div className="flex flex-col gap-4 text-text-muted text-[11px] uppercase tracking-widest font-medium">
                  <a href="#" className="hover:text-primary transition-colors">Vapi Node</a>
                  <a href="#" className="hover:text-primary transition-colors">SMS Bridge</a>
                  <a href="#" className="hover:text-primary transition-colors">CRM Logic</a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Terminal</div>
                <div className="flex flex-col gap-4 text-text-muted text-[11px] uppercase tracking-widest font-medium">
                  <a href="/privacy" className="hover:text-primary transition-colors">Security</a>
                  <a href="/terms" className="hover:text-primary transition-colors">Artifacts</a>
                  <a href="mailto:support@vervemindai.com" className="hover:text-primary transition-colors">Support</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/[0.03] gap-8">
            <p className="text-text-muted text-[10px] font-bold uppercase tracking-[0.3em] terminal-text">© 2026 Neural Luminary Infrastructure Group</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-primary text-xs">A</div>
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/20 text-xs">B</div>
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/20 text-xs">C</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
