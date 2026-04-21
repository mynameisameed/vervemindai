"use client";

import React from 'react';
import { Phone, Users, DollarSign, Activity, Play, Settings, Power, ArrowRight, Zap, Target, Cpu, TrendingUp } from 'lucide-react';

export default function DashboardHome() {
  const metrics = [
    { label: 'Neural Captures', value: '1,248', trend: '+12%', icon: Phone, color: '#00F5D4', glow: 'rgba(0, 245, 212, 0.4)' },
    { label: 'Signal Conversion', value: '342', trend: '+8%', icon: Target, color: '#d2bbff', glow: 'rgba(210, 187, 255, 0.4)' },
    { label: 'Recovered Yield', value: '$12,450', trend: '+15%', icon: DollarSign, color: '#F59E0B', glow: 'rgba(245, 158, 11, 0.4)' },
    { label: 'Node Efficiency', value: '99.8%', trend: '+0.2%', icon: Cpu, color: '#34D399', glow: 'rgba(52, 211, 153, 0.4)' },
  ];

  const recentIntercepts = [
    { id: 1, time: '10:42 AM', entity: 'John Smith', protocol: 'Lead Capture', status: 'Priority', confidence: '98%' },
    { id: 2, time: '09:15 AM', entity: 'Sarah Connor', protocol: 'Inquiry', status: 'Resolved', confidence: '94%' },
    { id: 3, time: 'Yesterday', entity: 'Unknown Node', protocol: 'Spam Reject', status: 'Blocked', confidence: '99%' },
    { id: 4, time: 'Yesterday', entity: 'Mike Ross', protocol: 'Reschedule', status: 'Resolved', confidence: '91%' },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-12 min-h-full">
      
      {/* Central Command Deck */}
      <div className="flex-1 space-y-16">
        
        {/* Intelligence Header */}
        <div className="relative">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl glass-panel border border-white/5 text-vm-primary text-[10px] font-bold tracking-[0.3em] mb-10 uppercase">
            <span className="w-2 h-2 rounded-full bg-vm-primary animate-pulse shadow-[0_0_15px_#00F5D4]"></span>
            System Status: Neural Grid Active
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.85]" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
            Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vm-primary via-white to-vm-secondary">Terminal</span>
          </h1>
          <p className="text-vm-text-secondary text-xl max-w-2xl leading-relaxed">
            Infrastructure operating at <span className="text-white font-bold">99.8% precision</span>. All synthetic nodes are synchronized with the central intelligence core.
          </p>
        </div>

        {/* Telemetry Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="glass-panel rounded-[32px] p-8 relative group transition-all duration-700 hover:bg-white/[0.03] hover:translate-y-[-8px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${m.color}10, transparent 70%)` }} />
              
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/5 group-hover:glow-cyan transition-all duration-500">
                  <m.icon size={24} style={{ color: m.color }} />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-vm-positive/10 border border-vm-positive/20">
                  <TrendingUp size={12} className="text-vm-positive" />
                  <span className="text-[10px] font-black text-vm-positive tracking-wider">{m.trend}</span>
                </div>
              </div>
              
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-vm-text-muted mb-3">{m.label}</p>
                <h3 className="text-4xl font-black text-white tracking-tighter" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>{m.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Neural Intercepts Terminal */}
        <div className="glass-panel rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
          <div className="p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 bg-white/[0.01]">
            <div>
              <div className="text-vm-primary text-[9px] font-bold tracking-[0.4em] uppercase mb-2">Live Stream</div>
              <h2 className="text-3xl font-black text-white tracking-tight" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                Signal Intercepts
              </h2>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 group text-white px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-vm-primary hover:text-black hover:border-vm-primary transition-all duration-500">
              Full Intelligence Archive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/[0.01]">
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.4em] font-bold text-vm-text-muted">Time</th>
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.4em] font-bold text-vm-text-muted">Entity</th>
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.4em] font-bold text-vm-text-muted">Protocol</th>
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.4em] font-bold text-vm-text-muted">Confidence</th>
                  <th className="px-10 py-6 text-[10px] uppercase tracking-[0.4em] font-bold text-vm-text-muted text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.03]">
                {recentIntercepts.map((item, idx) => (
                  <tr key={item.id} className="group hover:bg-white/[0.02] transition-all duration-300">
                    <td className="px-10 py-8 text-sm text-vm-text-secondary font-mono">{item.time}</td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-[10px] font-black text-white">
                          {item.entity[0]}
                        </div>
                        <span className="font-bold text-white text-base tracking-tight">{item.entity}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <span className="px-4 py-1.5 rounded-xl text-[10px] font-bold bg-white/5 border border-white/10 text-vm-text-secondary uppercase tracking-widest">
                        {item.protocol}
                      </span>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-vm-primary" style={{ width: item.confidence }} />
                        </div>
                        <span className="text-[10px] font-bold text-vm-primary">{item.confidence}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8 text-right">
                      <button className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-vm-primary hover:tracking-[0.3em] transition-all duration-500">
                        Analyze
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Intelligence Sidebar */}
      <div className="xl:w-96 space-y-8">
        
        {/* Core Monitor */}
        <div className="glass-panel rounded-[40px] p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-vm-primary/5 blur-3xl rounded-full -mr-24 -mt-24 group-hover:bg-vm-primary/10 transition-all duration-700" />
          
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white flex items-center gap-3">
              <Zap size={16} className="text-vm-primary" />
              Core Engine
            </h3>
            <div className="w-12 h-6 rounded-full bg-vm-primary/20 p-1 cursor-pointer">
              <div className="w-4 h-4 rounded-full bg-vm-primary shadow-[0_0_15px_#00F5D4] ml-auto"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-vm-text-muted">
                <span>Neural Load</span>
                <span className="text-white">2.4%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-vm-primary w-[24%] shadow-[0_0_15px_#00F5D4]"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-vm-text-muted">
                <span>Latency</span>
                <span className="text-white">12ms</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-vm-secondary w-[12%] shadow-[0_0_15px_#d2bbff]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Rapid Protocols */}
        <div className="glass-panel rounded-[40px] p-10">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Rapid Protocols</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-vm-primary/30 hover:bg-vm-primary/5 transition-all duration-500 group">
              <span className="text-[11px] font-bold uppercase tracking-widest text-vm-text-secondary">Run Voice Test</span>
              <Play size={18} className="group-hover:text-vm-primary transition-colors" />
            </button>
            <button className="w-full flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-vm-secondary/30 hover:bg-vm-secondary/5 transition-all duration-500 group">
              <span className="text-[11px] font-bold uppercase tracking-widest text-vm-text-secondary">Sync Config</span>
              <Settings size={18} className="group-hover:text-vm-secondary transition-colors" />
            </button>
          </div>
        </div>

        {/* System Intelligence Card */}
        <div className="rounded-[40px] p-10 bg-gradient-to-br from-vm-primary/20 via-vm-secondary/10 to-transparent border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:glow-cyan transition-all duration-500">
              <Activity size={40} className="text-vm-primary animate-pulse" />
            </div>
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>Advisor</h4>
            <p className="text-sm text-vm-text-secondary leading-relaxed mb-10">
              Unusual call volume detected in <span className="text-white">Region: SFO</span>. Suggest enabling peak-hour intake protocol.
            </p>
            <button className="w-full py-5 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-widest hover:scale-[1.02] transition-all duration-500 shadow-2xl">
              Initialize Protocol
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
