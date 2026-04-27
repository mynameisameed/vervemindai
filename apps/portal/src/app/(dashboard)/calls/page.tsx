"use client";

import React, { useState } from 'react';
import { 
  Search, Filter, ChevronRight, Play, FileText, 
  Clock, CheckCircle, CheckCircle2, BrainCircuit,
  Download, Share2, Terminal, 
  Activity, Shield, Mic, Zap, Database
} from 'lucide-react';

export default function CallsPage() {
  const [selectedCall, setSelectedCall] = useState<any>(null);

  const callsList = [
    { id: '1', name: 'John Smith', time: '10:23 AM', phone: '+1 (555) 012-3456', intent: 'Schedule', sentiment: 'positive' },
    { id: '2', name: 'Sarah Jenkins', time: '09:45 AM', phone: '+1 (555) 987-6543', intent: 'Emergency', sentiment: 'negative' },
    { id: '3', name: 'Mike Davis', time: '08:15 AM', phone: '+1 (555) 234-5678', intent: 'Question', sentiment: 'neutral' }
  ];

  const transcript = [
    { speaker: 'Caller', text: "Hi, I need to schedule a cleaning for next week if possible." },
    { speaker: 'AI', text: "I can absolutely help with that. Are you a new or existing patient?" },
    { speaker: 'Caller', text: "Existing. My name is John Smith." },
    { speaker: 'AI', text: "Great to hear from you again, John! I have availability next Tuesday at 10:00 AM or Thursday at 2:00 PM. Do either of those work for you?" },
    { speaker: 'Caller', text: "Tuesday at 10 works perfect." },
    { speaker: 'AI', text: "Wonderful. I've got you booked for a cleaning next Tuesday at 10:00 AM. We'll send a confirmation text shortly. Is there anything else I can help you with?" },
    { speaker: 'Caller', text: "Nope, that's it. Thanks!" },
  ];

  const sentimentColors: Record<string, string> = {
    positive: 'var(--vm-positive)',
    negative: '#F87171',
    neutral: 'var(--vm-accent)',
  };

  return (
    <div className="flex h-[calc(100vh-140px)] gap-6">
      
      {/* Left Pane: Call List (30%) */}
      <div className="w-1/3 rounded-2xl flex flex-col overflow-hidden relative"
        style={{ 
          background: 'rgba(24, 24, 27, 0.4)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--vm-border)'
        }}>
        
        {/* Search */}
        <div className="p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[var(--vm-primary-light)]" size={16} style={{ color: 'var(--vm-text-muted)' }} />
            <input type="text" placeholder="Search callers, numbers..." 
              className="w-full rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none transition-all duration-300"
              style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid var(--vm-border)',
                color: 'var(--vm-text)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--vm-border-active)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--vm-border)'}
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {callsList.map((call) => (
            <button 
              key={call.id} 
              onClick={() => setSelectedCall(call.id)}
              className="w-full text-left p-4 transition-all duration-300 hover:bg-white/5 relative overflow-hidden"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.03)',
                background: selectedCall === call.id ? 'rgba(139, 92, 246, 0.05)' : 'transparent',
              }}
            >
              {selectedCall === call.id && (
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--vm-primary)] to-[var(--vm-primary-dim)] shadow-[0_0_10px_var(--vm-primary)]" />
              )}
              <div className="flex justify-between items-start mb-1 pl-2">
                <h4 className="font-bold text-white text-sm tracking-tight">{call.name}</h4>
                <span className="text-xs font-medium" style={{ color: 'var(--vm-text-muted)' }}>{call.time}</span>
              </div>
              <p className="text-xs mb-3 pl-2" style={{ color: 'var(--vm-text-muted)' }}>{call.phone}</p>
              <div className="flex items-center justify-between pl-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--vm-text-secondary)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {call.intent}
                </span>
                <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: sentimentColors[call.sentiment], boxShadow: call.sentiment === 'positive' ? '0 0 5px rgba(52,211,153,0.5)' : 'none' }} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Pane: Call Detail (70%) */}
      <div className="flex-1 rounded-2xl flex flex-col overflow-hidden relative shadow-2xl"
        style={{ 
          background: 'rgba(24, 24, 27, 0.4)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--vm-border)'
        }}>
        
        {/* Header */}
        <div className="p-6 flex justify-between items-start z-10 relative"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(12, 12, 14, 0.3)' }}>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
              John Smith
            </h2>
            <p className="text-sm mt-1.5 font-medium" style={{ color: 'var(--vm-text-secondary)' }}>+1 (555) 012-3456 • <span style={{ color: 'var(--vm-primary-light)' }}>Duration: 2m 14s</span></p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]"
            style={{ color: '#FFFFFF', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--vm-border)' }}>
            <Download size={16} /> Export
          </button>
        </div>

        {/* Audio Player */}
        <div className="px-6 py-5 flex items-center gap-5 z-10 relative"
          style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            style={{ background: 'linear-gradient(135deg, var(--vm-primary), var(--vm-primary-dim))', color: 'white' }}>
            <Play size={20} className="ml-1 fill-current" />
          </button>
          <div className="flex-1 h-10 rounded-xl relative overflow-hidden flex items-center px-2"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.2)' }}>
             <div className="h-full absolute left-0 top-0 opacity-20" style={{ width: '33%', background: 'linear-gradient(90deg, transparent, var(--vm-primary))' }}></div>
             {/* Waveform */}
             <div className="w-full flex justify-between items-center gap-[2px] opacity-60 z-10">
               {Array.from({ length: 50 }).map((_, i) => (
                 <div key={i} className={`w-1 rounded-full ${i < 17 ? 'bg-[var(--vm-primary-light)] drop-shadow-[0_0_3px_var(--vm-primary)]' : 'bg-[var(--vm-text-muted)]'}`} style={{ height: `${Math.random() * 80 + 20}%` }}></div>
               ))}
             </div>
          </div>
          <span className="text-sm font-semibold shrink-0 font-mono tracking-wider" style={{ color: 'var(--vm-text-secondary)' }}>00:45 / 02:14</span>
        </div>

        {/* Content Area (Transcript + Insights) */}
        <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* Transcript */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar pr-4">
            {transcript.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.speaker === 'Caller' ? 'items-end' : 'items-start'} group animate-in fade-in slide-in-from-bottom-2 duration-500`} style={{ animationFillMode: 'both', animationDelay: `${i * 100}ms` }}>
                <span className="text-[10px] font-bold uppercase tracking-wider mb-2 ml-1 opacity-70"
                  style={{ color: 'var(--vm-text-muted)' }}>{msg.speaker}</span>
                <div className="max-w-[80%] p-4 text-sm leading-relaxed shadow-lg relative overflow-hidden"
                  style={{
                    background: msg.speaker === 'Caller' 
                      ? 'rgba(255,255,255,0.03)' 
                      : 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(124,58,237,0.05))',
                    backdropFilter: 'blur(10px)',
                    color: msg.speaker === 'Caller' ? 'var(--vm-text)' : 'white',
                    borderRadius: msg.speaker === 'Caller' ? '1.5rem 1.5rem 0.25rem 1.5rem' : '1.5rem 1.5rem 1.5rem 0.25rem',
                    border: msg.speaker === 'Caller' 
                      ? '1px solid rgba(255,255,255,0.05)' 
                      : '1px solid rgba(139,92,246,0.3)',
                  }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* AI Insights Panel */}
          <div className="w-[340px] p-6 overflow-y-auto"
            style={{ background: 'rgba(0,0,0,0.2)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-3 mb-8" style={{ color: 'var(--vm-primary-light)' }}>
              <div className="p-2 rounded-xl" style={{ background: 'rgba(139,92,246,0.15)' }}>
                <BrainCircuit size={20} className="animate-pulse" />
              </div>
              <h3 className="font-black text-lg tracking-tight">AI Insights</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--vm-text-muted)' }}>Summary</h4>
                <p className="text-sm leading-relaxed p-5 rounded-2xl"
                  style={{ color: 'var(--vm-text)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  Existing patient John Smith called to schedule a cleaning. The AI successfully booked him for next Tuesday at 10:00 AM.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--vm-text-muted)' }}>Next Steps (Actioned)</h4>
                <div className="p-5 rounded-2xl space-y-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="flex items-start gap-3 group/step">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5 transition-transform group-hover/step:scale-110" style={{ color: 'var(--vm-positive)' }} />
                    <span className="text-sm line-through font-medium" style={{ color: 'var(--vm-text-muted)' }}>Add appointment to GHL Calendar</span>
                  </div>
                  <div className="flex items-start gap-3 group/step">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5 transition-transform group-hover/step:scale-110" style={{ color: 'var(--vm-positive)' }} />
                    <span className="text-sm line-through font-medium" style={{ color: 'var(--vm-text-muted)' }}>Send SMS confirmation</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--vm-text-muted)' }}>Sentiment</h4>
                <div className="p-5 rounded-2xl flex items-center gap-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">
                      <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                      <circle cx="28" cy="28" r="24" fill="none" stroke="var(--vm-positive)" strokeWidth="4" strokeDasharray="150.7" strokeDashoffset="30" className="transition-all duration-1000" />
                    </svg>
                    <span className="absolute text-sm font-black text-white">80%</span>
                  </div>
                  <div>
                    <span className="text-lg font-black tracking-tight block" style={{ color: 'var(--vm-positive)' }}>Positive</span>
                    <span className="text-xs font-medium" style={{ color: 'var(--vm-text-muted)' }}>Analysis complete</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
