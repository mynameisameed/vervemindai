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
  MessageSquare
} from 'lucide-react';

// Design tokens are now managed via tailwind.config.js

export default function StarterKitPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-muted font-inter selection:bg-brand-teal selection:text-brand-dark">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter flex items-center gap-2">
            VerveMind<span className="text-brand-teal">KITS</span>
          </div>
          <a href="#pricing" className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-[1.05] transition-all">
            Get the Kit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-bold mb-8 uppercase tracking-widest">
            <Sparkles size={14} /> New Release: v1.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
            Stop Losing Customers From <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-teal">Missed Calls</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-12">
            AI answers, captures, and follows up automatically. The complete infrastructure kit to turn your business phone into a revenue-generating machine.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#pricing" className="w-full md:w-auto bg-brand-teal text-brand-muted px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,128,128,0.4)] transition-all">
              Claim Your Kit <ArrowRight size={20} />
            </a>
            <p className="text-brand-muted text-sm font-medium flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-teal" /> Instant Download · Secure Checkout
            </p>
          </div>
        </div>
      </section>

      {/* Trust Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 p-8 bg-surface-low rounded-3xl backdrop-blur-2xl border border-white/5 shadow-2xl">
            <div className="w-12 h-12 bg-surface-high rounded-xl flex items-center justify-center border border-white/5">
              <PhoneCall size={24} className="text-brand-accent" />
            </div>
            <h3 className="font-bold text-xl tracking-tight text-white">Zero Missed Calls</h3>
            <p className="text-brand-muted/80 leading-relaxed">AI handles unlimited simultaneous calls, ensuring every lead is captured instantly without human latency.</p>
          </div>
          <div className="space-y-4 p-8 bg-surface-low rounded-3xl backdrop-blur-2xl border border-white/5 shadow-2xl">
            <div className="w-12 h-12 bg-surface-high rounded-xl flex items-center justify-center border border-white/5">
              <Zap size={24} className="text-yellow-400" />
            </div>
            <h3 className="font-bold text-xl tracking-tight text-white">Instant Follow-up</h3>
            <p className="text-brand-muted/80 leading-relaxed">Automatically sends SMS booking links and intake forms the second the call ends. Speed-to-lead increased by 10x.</p>
          </div>
          <div className="space-y-4 p-8 bg-surface-low rounded-3xl backdrop-blur-2xl border border-white/5 shadow-2xl">
            <div className="w-12 h-12 bg-surface-high rounded-xl flex items-center justify-center border border-white/5">
              <Code2 size={24} className="text-blue-400" />
            </div>
            <h3 className="font-bold text-xl tracking-tight text-white">Plug-and-Play</h3>
            <p className="text-brand-muted/80 leading-relaxed">Optimized Vapi prompts and GHL snapshots. Deploy your AI receptionist in under 48 hours instead of 48 days.</p>
          </div>
        </div>

      {/* "What's Included" Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Everything inside the kit</h2>
            <p className="text-xl text-brand-muted">A complete blueprint for autonomous call handling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-surface-low backdrop-blur-2xl border border-white/5 rounded-3xl hover:bg-surface-high hover:border-brand-teal/30 transition-all flex gap-6 group shadow-xl">
              <FileCode2 size={32} className="text-brand-accent group-hover:scale-110 transition-transform shrink-0 drop-shadow-lg" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Vapi System Prompt</h4>
                <p className="text-brand-muted/70 text-sm leading-relaxed">The exact system instructions and behavior guidelines for an high-performance AI receptionist. MedSpa & Dental ready.</p>
              </div>
            </div>
            <div className="p-8 bg-surface-low backdrop-blur-2xl border border-white/5 rounded-3xl hover:bg-surface-high hover:border-brand-teal/30 transition-all flex gap-6 group shadow-xl">
              <MessageSquare size={32} className="text-blue-400 group-hover:scale-110 transition-transform shrink-0 drop-shadow-lg" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">SMS Follow-up Templates</h4>
                <p className="text-brand-muted/70 text-sm leading-relaxed">High-converting text sequences for call confirmations, no-show follow-ups, and booking prompts.</p>
              </div>
            </div>
            <div className="p-8 bg-surface-low backdrop-blur-2xl border border-white/5 rounded-3xl hover:bg-surface-high hover:border-brand-teal/30 transition-all flex gap-6 group shadow-xl">
              <ListChecks size={32} className="text-green-400 group-hover:scale-110 transition-transform shrink-0 drop-shadow-lg" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">Implementation SOP</h4>
                <p className="text-brand-muted/70 text-sm leading-relaxed">Step-by-step documentation on how to connect Vapi, Twilio, and your CRM for a seamless flow.</p>
              </div>
            </div>
            <div className="p-8 bg-surface-low backdrop-blur-2xl border border-white/5 rounded-3xl hover:bg-surface-high hover:border-brand-teal/30 transition-all flex gap-6 group shadow-xl">
              <Zap size={32} className="text-yellow-400 group-hover:scale-110 transition-transform shrink-0 drop-shadow-lg" />
              <div>
                <h4 className="font-bold text-lg mb-2 text-white">GHL Workflow Logic</h4>
                <p className="text-brand-muted/70 text-sm leading-relaxed">Visual mapping of the GoHighLevel automation triggers and filters needed to keep your CRM clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-low backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, var(--vm-primary-glow), transparent 70%)' }} />
            <div className="relative z-10">
              <h2 className="text-5xl font-black mb-6 text-white tracking-tight">AI Receptionist Starter Kit</h2>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-brand-muted/40 line-through text-2xl font-bold">$197</span>
                <span className="text-7xl font-black text-white drop-shadow-lg tracking-tighter">$49</span>
                <span className="bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(139,92,246,0.2)]">LIMITED LAUNCH PRICE</span>
              </div>
              
              <ul className="text-left max-w-sm mx-auto space-y-5 mb-14">
                <li className="flex items-center gap-4 font-medium text-lg"><CheckCircle2 size={24} className="text-brand-accent drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" /> Vapi Prompt Templates</li>
                <li className="flex items-center gap-4 font-medium text-lg"><CheckCircle2 size={24} className="text-brand-accent drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" /> SMS Conversion Scripts</li>
                <li className="flex items-center gap-4 font-medium text-lg"><CheckCircle2 size={24} className="text-brand-accent drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" /> GHL Snapshot Documentation</li>
                <li className="flex items-center gap-4 font-medium text-lg"><CheckCircle2 size={24} className="text-brand-accent drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" /> Step-by-Step Setup Guide</li>
                <li className="flex items-center gap-4 font-medium text-lg"><CheckCircle2 size={24} className="text-brand-accent drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" /> Lifetime Access to Updates</li>
              </ul>

              <a href="https://buy.stripe.com/dRmaEWgweaSO2xv16Ag3603" className="w-full bg-brand-teal text-white py-6 rounded-3xl font-black text-2xl hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-300 flex items-center justify-center group" style={{ background: 'linear-gradient(135deg, var(--vm-primary), var(--vm-primary-dim))' }}>
                Download the Kit <ArrowRight size={28} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="mt-10 p-5 bg-white/5 border border-white/10 rounded-2xl text-left backdrop-blur-xl">
                <p className="text-white font-bold flex items-center gap-3 mb-2">
                  <span className="text-2xl drop-shadow-md">🎁</span> First 10 buyers get a free 15-min setup call
                </p>
                <p className="text-brand-muted text-sm font-medium leading-relaxed pl-9">
                  I'll personally walk you through the implementation. Only 10 spots — grab yours now.
                </p>
              </div>
              
              <p className="text-brand-muted text-sm mt-8 opacity-60 italic font-medium">One-time payment. No subscription required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-black text-xl tracking-tighter">
            VerveMind<span className="text-brand-teal">KITS</span>
          </div>
          <p className="text-brand-muted text-sm">© 2026 VerveMind AI. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-bold text-brand-muted hover:text-white transition-colors">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/refund">Refund Policy</a>
            <a href="mailto:support@vervemindai.com">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
