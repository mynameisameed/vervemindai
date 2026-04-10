"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  Activity, ArrowUpRight, ShieldCheck, 
  Zap, PhoneCall, Code2, Sparkles,
  MessageSquare, Calendar, BarChart3, Check
} from 'lucide-react';
import VoiceDemoPlayer from '../components/VoiceDemoPlayer';
import PricingComparison from '../components/PricingComparison';

/* ─── Animated Counter Hook ─── */
function useCounter(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    setCount(0);
    if (!startOnView || !inView) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration, startOnView]);

  return { count, ref };
}

export default function HomePage() {
  const [activeTask, setActiveTask] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  const leadsCounter = useCounter(47000);
  const callsCounter = useCounter(12400);
  const roiCounter = useCounter(380);

  const tasks = [
    { module: "Core.Telecom", action: "Routing inbound overflow to AI...", latency: "14ms" },
    { module: "Intelligence.Voice", action: "Executing MedSpa Script v2.4 (Objections)...", latency: "18ms" },
    { module: "Data.CRM", action: "Upserting Patient 'Eleanor K' to Zenoti...", latency: "42ms" },
    { module: "Growth.Outbound", action: "Dispatching 45 Reactivation SMS prompts...", latency: "8ms" },
    { module: "Intelligence.Sync", action: "Calibrating LLM against updated Pricing...", latency: "102ms" }
  ];

  useEffect(() => {
    const interval = setInterval(() => setActiveTask((prev) => (prev + 1) % tasks.length), 2500);
    return () => clearInterval(interval);
  }, []);

  const springConfig = { type: "spring" as const, stiffness: 100, damping: 20 };

  return (
    <div ref={containerRef} style={{ background: '#09090B', color: '#E5E2E1', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>
      
      {/* Dynamic Ambient Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, #17171C 0%, #09090B 70%)' }}>
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '-20%', left: '-10%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, rgba(0,245,212,0.12) 0%, transparent 60%)', filter: 'blur(100px)' }} />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '80vw', height: '80vw', background: 'radial-gradient(circle, rgba(0,223,193,0.08) 0%, transparent 60%)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.5, maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)' }} />
      </div>

      {/* ═══ Navigation ═══ */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'rgba(9,9,11,0.6)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', zIndex: 1000, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontWeight: 800, fontSize: 20, color: '#FFFFFF', letterSpacing: '-0.03em' }}>
            <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#09090B', fontWeight: 700, boxShadow: '0 0 24px rgba(0,245,212,0.4)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 10, background: 'rgba(255,255,255,0.4)', opacity: 0.5, mixBlendMode: 'overlay' }}></div>
              <Activity size={20} strokeWidth={2.5} />
            </div>
            VerveMind<span style={{ color: '#00F5D4', fontWeight: 600 }}>OS</span>
          </div>
          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {[
              { label: 'Engine', href: '#solutions' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'MedSpa', href: 'https://medspa.vervemindai.com' },
              { label: 'Dental', href: 'https://dental.vervemindai.com' },
              { label: 'Roofing', href: 'https://roofing.vervemindai.com' },
            ].map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 13, fontWeight: 600, letterSpacing: '0.02em', transition: 'color 0.2s', textTransform: 'uppercase' }}>{link.label}</a>
            ))}
            <a href="https://calendly.com/vervemindai/lead" target="_blank" style={{ padding: '12px 24px', borderRadius: 999, fontWeight: 700, fontSize: 13, textDecoration: 'none', background: '#FFFFFF', color: '#09090B', transition: 'all 0.3s', boxShadow: '0 4px 14px rgba(255,255,255,0.15)' }}>
              Deploy AI
            </a>    
          </div>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <motion.section style={{ padding: '200px 0 140px', position: 'relative', zIndex: 1, y: yBg, opacity: opacityHero, scale: scaleHero }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={springConfig}
            style={{ display: 'inline-flex', alignItems: 'center', padding: '6px 20px', borderRadius: 999, background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)', color: '#00F5D4', fontSize: 12, fontWeight: 700, marginBottom: 40, letterSpacing: '0.05em', textTransform: 'uppercase', backdropFilter: 'blur(8px)' }}>
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F5D4', marginRight: 12, boxShadow: '0 0 12px #00F5D4' }} />
            Welcome to the Autonomous Era
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.1 }}
            style={{ fontSize: 'clamp(42px, 8vw, 100px)', fontWeight: 800, lineHeight: 0.9, marginBottom: 32, letterSpacing: '-0.04em' }}>
            Run Your Business <br /> 
            <span style={{ background: 'linear-gradient(135deg, #FFFFFF 20%, #71717A 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', marginTop: 12 }}>On Autopilot.</span>    
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.2 }}
            style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: '#A1A1AA', maxWidth: 700, margin: '0 auto 56px', lineHeight: 1.5, fontWeight: 400 }}>
            Deploy hyper-specialized AI workforces that answer calls, book appointments, and reactivate dormant leads with <span style={{ color: '#E5E2E1', fontWeight: 600 }}>0ms human latency</span>.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...springConfig, delay: 0.3 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 100, flexWrap: 'wrap' }}>
            <a href="#solutions" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 40px', borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: 'none', background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', color: '#09090B', boxShadow: '0 12px 30px rgba(0,245,212,0.25), inset 0 2px 0 rgba(255,255,255,0.4)', transition: 'transform 0.2s', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Enter OS <ArrowUpRight size={18} strokeWidth={3} />
            </a>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 40px', borderRadius: 16, fontWeight: 600, fontSize: 16, textDecoration: 'none', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', color: '#FAFAFA', backdropFilter: 'blur(10px)', transition: 'all 0.2s' }}>
              Book Architecture Call
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <VoiceDemoPlayer audioUrl="/assets/audio/medspa_demo_stitched.mp3" title="Real Time Demo: Reactivation OS" />
          </motion.div>

          {/* Terminal Feed */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springConfig, delay: 0.5 }}
            style={{ maxWidth: 700, margin: '0 auto', background: 'linear-gradient(180deg, rgba(30,30,35,0.7) 0%, rgba(20,20,24,0.7) 100%)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: '32px 32px 24px', textAlign: 'left', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 16, marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Code2 size={16} color="#71717A" />
                <div style={{ fontSize: 12, fontWeight: 700, color: '#A1A1AA', letterSpacing: '0.15em', fontFamily: 'monospace' }}>KERNEL EXECUTION FEED</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#00F5D4' }}>SYS_UPTIME: 99.99%</span>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} style={{ width: 8, height: 8, borderRadius: '50%', background: '#00F5D4', boxShadow: '0 0 10px #00F5D4' }}></motion.div>
              </div>
            </div>
            <div style={{ height: 44, position: 'relative' }}>
              <AnimatePresence mode="popLayout">
                <motion.div key={activeTask} initial={{ rotateX: 90, opacity: 0 }} animate={{ rotateX: 0, opacity: 1 }} exit={{ rotateX: -90, opacity: 0, filter: 'blur(4px)' }} transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'absolute', width: '100%', top: 12 }}>
                  <span style={{ color: '#00DFC1', fontWeight: 700, fontSize: 13, fontFamily: 'monospace', minWidth: 140 }}>[{tasks[activeTask].module}]</span>
                  <span style={{ color: '#FAFAFA', fontSize: 14, fontFamily: 'monospace', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tasks[activeTask].action}</span>
                  <span style={{ color: '#71717A', fontSize: 12, fontFamily: 'monospace' }}>{tasks[activeTask].latency}</span>
                </motion.div>
              </AnimatePresence>
            </div>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.5), transparent)' }}></div>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══ Animated Stats Bar ═══ */}
      <section style={{ padding: '80px 0', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, textAlign: 'center' }}>
          {[
            { ref: leadsCounter.ref, count: leadsCounter.count, suffix: '+', label: 'Leads Reactivated', color: '#00F5D4' },
            { ref: callsCounter.ref, count: callsCounter.count, suffix: '+', label: 'AI Calls Handled', color: '#38BDF8' },
            { ref: roiCounter.ref, count: roiCounter.count, suffix: '%', label: 'Average Client ROI', color: '#FBBF24' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: stat.color, letterSpacing: '-0.04em', fontFamily: 'Manrope, sans-serif' }}>
                <span ref={stat.ref}>{stat.count.toLocaleString()}</span>{stat.suffix}
              </div>
              <div style={{ color: '#71717A', fontSize: 14, fontWeight: 600, marginTop: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section id="how-it-works" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ color: '#00F5D4', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Deployment Protocol</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#FFFFFF' }}>Three Steps to Autonomous.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              { icon: <MessageSquare size={28} />, step: '01', title: 'Connect', desc: 'We integrate with your existing phone system, CRM, and scheduling software. Zero disruption to your workflow.', accent: '#00F5D4' },
              { icon: <Sparkles size={28} />, step: '02', title: 'Deploy', desc: 'Your custom AI agent is trained on your services, pricing, and objection handling. It goes live within 48 hours.', accent: '#A78BFA' },
              { icon: <BarChart3 size={28} />, step: '03', title: 'Scale', desc: 'Watch bookings climb while costs plummet. Real-time dashboards show every call, text, and conversion.', accent: '#FBBF24' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ ...springConfig, delay: i * 0.15 }}
                style={{ background: 'linear-gradient(180deg, rgba(30,30,33,0.5) 0%, rgba(15,15,18,0.5) 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 32, padding: '48px 36px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 24, right: 24, fontSize: 72, fontWeight: 900, color: 'rgba(255,255,255,0.03)', fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.05em' }}>{item.step}</div>
                <div style={{ width: 56, height: 56, borderRadius: 20, background: `${item.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.accent, marginBottom: 32 }}>{item.icon}</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#FFFFFF', marginBottom: 16, letterSpacing: '-0.02em' }}>{item.title}</h3>
                <p style={{ color: '#A1A1AA', fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Engine Grid ═══ */}
      <section id="solutions" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 40 }}>
            <div>
              <div style={{ color: '#00F5D4', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>The Core Architecture</div>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#FFFFFF' }}>Bespoke Automation Engines.</h2>
            </div>
            <p style={{ fontSize: 18, color: '#A1A1AA', maxWidth: 400, lineHeight: 1.6, margin: 0 }}>Rigidly structured AI pipelines that enforce precise, compliant behavior tailored to your specific industry.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(2, minmax(260px, auto))', gap: 24 }}>
            {/* MedSpa Hero Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={springConfig}
              style={{ gridColumn: 'span 8', gridRow: 'span 2', background: 'linear-gradient(180deg, rgba(30,30,33,0.6) 0%, rgba(15,15,18,0.8) 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 40, padding: 'clamp(32px, 4vw, 60px)', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <video src="/videos/medspa_demo.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, mixBlendMode: 'screen' }}></video>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,0.6) 50%, transparent 100%)' }}></div>
              </div>
              <div style={{ position: 'relative', zIndex: 1, maxWidth: 500 }}>
                <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'rgba(0,245,212,0.15)', color: '#00F5D4', borderRadius: 999, fontSize: 11, fontWeight: 800, marginBottom: 24, letterSpacing: '0.1em' }}>FLAGSHIP OS.1</div>
                <h3 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: 16, letterSpacing: '-0.03em', color: '#FFFFFF' }}>Reactivation Blitz™</h3>
                <p style={{ color: '#A1A1AA', fontSize: 18, marginBottom: 32, lineHeight: 1.6 }}>The ultimate MedSpa engine. Proactively mines your dormant database and converts cold leads into booked consults entirely via conversational AI.</p>
                <a href="https://reactivation.vervemindai.com" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#09090B', background: '#FFFFFF', padding: '16px 32px', borderRadius: 16, textDecoration: 'none', fontWeight: 700, fontSize: 15, transition: 'all 0.2s' }}>Deploy Reactivation Engine <ArrowUpRight size={18} /></a>
              </div>
            </motion.div>

            {/* Latency Card */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ ...springConfig, delay: 0.1 }}
              style={{ gridColumn: 'span 4', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 40, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0,245,212,0.1) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
              <Activity size={32} color="#00F5D4" style={{ marginBottom: 24 }} />
              <div style={{ fontSize: 56, fontWeight: 800, color: '#FFFFFF', marginBottom: 8, letterSpacing: '-0.05em' }}>600<span style={{ fontSize: 24, color: '#A1A1AA' }}>ms</span></div>
              <div style={{ color: '#A1A1AA', fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}>End-to-End Voice Latency. Impossible for humans to detect the gap.</div>
            </motion.div>

            {/* HIPAA Card */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ ...springConfig, delay: 0.2 }}
              style={{ gridColumn: 'span 4', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 40, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ShieldCheck size={32} color="#A1A1AA" style={{ marginBottom: 24 }} />
              <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#FFFFFF' }}>Ironclad Security.</div>
              <div style={{ color: '#71717A', fontSize: 16, lineHeight: 1.6 }}>100% HIPAA and TCPA compliant architectures. Your data is isolated, encrypted, and safe.</div>
            </motion.div>
          </div>

          {/* Dental + Roofing Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 24, marginTop: 24 }}>
            {[
              { name: 'Dental Receptionist OS', desc: 'Handles insurance FAQs, multi-line routing, and books your hygiene schedules automatically into Open Dental.', link: 'https://dental.vervemindai.com', color: '#38BDF8', icon: <PhoneCall size={24} color="#38BDF8" />, bg: '/assets/dental_bg.png' },
              { name: 'Roofing Quotes OS', desc: "Storms don't wait. Capture every midnight lead, pre-qualify damage, and dispatch inspectors into JobNimbus.", link: 'https://roofing.vervemindai.com', color: '#FBBF24', icon: <Zap size={24} color="#FBBF24" />, bg: '/assets/roofing_bg.png' },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ ...springConfig, delay: i * 0.1 }}
                style={{ background: 'linear-gradient(135deg, rgba(25,25,30,0.8) 0%, rgba(15,15,18,0.8) 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 40, padding: 40, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', right: 0, bottom: 0, opacity: 0.3, width: '50%' }}>
                  <Image src={card.bg} fill style={{ objectFit: 'cover' }} alt={card.name} />
                </div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '70%' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: `${card.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>{card.icon}</div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.02em', color: '#fff' }}>{card.name}</h3>
                  <p style={{ color: '#A1A1AA', fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>{card.desc}</p>
                  <a href={card.link} target="_blank" style={{ color: card.color, textDecoration: 'none', fontWeight: 700, fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Preview Architecture &rarr;</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Social Proof ═══ */}
      <section style={{ padding: '100px 0', position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ color: '#00F5D4', fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Field Reports</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#FFFFFF' }}>What Our Clients Are Seeing.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {[
              { quote: "We activated our old database and booked 68 new Botox consults in the first 48 hours. Unreal.", name: "Dr. Sarah Mitchell", role: "Lumiere MedSpa, Orlando", metric: "+68 consults in 48hrs" },
              { quote: "Our answer rate went from 60% to 97%. New patient bookings jumped 40% in the first month.", name: "Michael Chen, DDS", role: "Titus Dental Group, Tampa", metric: "+40% new patients" },
              { quote: "After the last storm, we captured 47 leads overnight. Previously we would have missed 30+ of those.", name: "Jake Hernandez", role: "Apex Roofing, Dallas", metric: "47 overnight leads" },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springConfig, delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 28, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[...Array(5)].map((_, j) => <div key={j} style={{ width: 16, height: 16, borderRadius: 4, background: '#FBBF24' }}>★</div>)}
                  </div>
                  <p style={{ color: '#E5E2E1', fontSize: 16, lineHeight: 1.6, fontStyle: 'italic', marginBottom: 24 }}>&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div>
                  <div style={{ display: 'inline-flex', padding: '4px 12px', borderRadius: 999, background: 'rgba(0,245,212,0.1)', color: '#00F5D4', fontSize: 12, fontWeight: 700, marginBottom: 16 }}>{t.metric}</div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: '#71717A', fontSize: 13, marginTop: 4 }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Comparison Table ═══ */}
      <PricingComparison />

      {/* ═══ CTA Band ═══ */}
      <section style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springConfig}
            style={{ background: 'linear-gradient(180deg, rgba(0,245,212,0.06) 0%, rgba(0,223,193,0.02) 100%)', border: '1px solid rgba(0,245,212,0.15)', borderRadius: 40, padding: 'clamp(40px, 5vw, 80px)' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#FFFFFF', marginBottom: 20 }}>Ready to Deploy Your AI Workforce?</h2>
            <p style={{ color: '#A1A1AA', fontSize: 18, maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.6 }}>Book a 15-minute architecture call. We&apos;ll map your exact workflow and show you what autonomous looks like.</p>
            <a href="https://calendly.com/vervemindai/lead" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '20px 48px', borderRadius: 16, fontWeight: 700, fontSize: 16, textDecoration: 'none', background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', color: '#09090B', boxShadow: '0 12px 30px rgba(0,245,212,0.25)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Initialize Deployment <ArrowUpRight size={18} strokeWidth={3} />
            </a>
          </motion.div>
        </div>
      </section>

      <footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does an AI receptionist cost compared to a traditional answering service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VerveMind AI's AI receptionist starts at $297/month. Traditional answering services typically cost $3,000-$5,000/month. Human receptionists cost $4,000+ per month including benefits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is VerveMind AI HIPAA compliant?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. VerveMind AI is 100% HIPAA and TCPA compliant, with infrastructure configured for healthcare compliance. BAA/DPA available upon request."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How quickly can an AI receptionist be deployed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VerveMind AI deploys in under 48 hours from signup. No training period required — the system comes pre-trained for your vertical (MedSpa, Dental, or Home Services)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can the AI handle multiple calls simultaneously?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Unlike human receptionists who handle one call at a time, VerveMind AI can handle unlimited simultaneous calls with sub-600ms voice latency and 99.99% uptime."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries does VerveMind AI serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VerveMind AI serves MedSpa and aesthetic clinics, dental practices, roofing companies, and home services businesses across the United States."
                  }
                }
              ]
            })
          }}
        />
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 100 }}>
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 24, color: '#FFFFFF', marginBottom: 24, letterSpacing: '-0.03em' }}>
                <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#09090B', fontWeight: 700 }}><Activity size={20} strokeWidth={2.5} /></div>
                VerveMind<span style={{ color: '#00F5D4', fontWeight: 600 }}>OS</span>
              </div>
              <p style={{ color: '#71717A', fontSize: 16, lineHeight: 1.6, maxWidth: 300 }}>Building infrastructure that replaces manual labor with autonomous logic.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24 }}>System Blueprints</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li><a href="https://reactivation.vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>MedSpa Activation OS</a></li>
                <li><a href="https://dental.vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>Dental Front-Desk OS</a></li>
                <li><a href="https://roofing.vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>Roofing Dispatch OS</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24 }}>Organization</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li><a href="/about" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>About the Tech</a></li>
                <li><a href="/pricing" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>Autonomous Pricing</a></li>
                <li><a href="/blog" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>Engineering Blog</a></li>
                <li><a href="/contact" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 24 }}>Protocol Setup</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li><a href="mailto:team@vervemindai.com" style={{ color: '#A1A1AA', textDecoration: 'none', fontSize: 15 }}>team@vervemindai.com</a></li>
                <li><a href="https://calendly.com/vervemindai/lead" style={{ color: '#00F5D4', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}>Initialize Deployment &rarr;</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ color: '#52525B', fontSize: 14 }}>© {new Date().getFullYear()} VerveMind Autonomous Systems. All rights reserved.</div>
            <div style={{ display: 'flex', gap: 32 }}>
              <a href="/privacy" style={{ color: '#52525B', fontSize: 14, textDecoration: 'none' }}>Privacy Standard</a>
              <a href="/terms" style={{ color: '#52525B', fontSize: 14, textDecoration: 'none' }}>Service Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}