"use client";

import React from 'react';
import { Plus, Play, Pause, MoreVertical, Activity, PhoneOutgoing, MessageSquare } from 'lucide-react';

export default function CampaignsPage() {
  const campaigns = [
    { id: 1, name: 'Dental Missed Call Text-Back', status: 'Active', type: 'SMS Follow-up', runs: '842', conv: '24%', roi: '$4.2k', icon: MessageSquare },
    { id: 2, name: 'HVAC Emergency Dispatch', status: 'Active', type: 'Inbound Voice', runs: '156', conv: '41%', roi: '$12.5k', icon: PhoneOutgoing },
    { id: 3, name: 'MedSpa Reactivation', status: 'Paused', type: 'Outbound Voice', runs: '1,200', conv: '8%', roi: '$1.8k', icon: PhoneOutgoing },
  ];

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif", color: 'var(--vm-text)' }}>
            Campaigns
          </h1>
          <p style={{ color: 'var(--vm-text-secondary)', marginTop: '4px' }}>Manage your active AI workflows and automations.</p>
        </div>
        <button className="font-black px-6 py-3 rounded-xl flex items-center gap-2 transition-all text-white"
          style={{ background: 'linear-gradient(135deg, var(--vm-primary), var(--vm-primary-dim))', boxShadow: '0 4px 20px var(--vm-primary-glow)' }}>
          <Plus size={20} />
          Create New Campaign
        </button>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="rounded-2xl p-6 group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            style={{ 
              background: 'rgba(24, 24, 27, 0.4)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--vm-border)',
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)'
            }}>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, -20%), rgba(139, 92, 246, 0.08), transparent 40%)' }} />

            {/* Status & Actions */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-lg"
                  style={{
                    background: camp.status === 'Active' ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(124,58,237,0.05))' : 'var(--vm-surface-highest)',
                    border: camp.status === 'Active' ? '1px solid var(--vm-border-active)' : '1px solid var(--vm-border)',
                    color: camp.status === 'Active' ? 'var(--vm-primary-light)' : 'var(--vm-text-muted)',
                  }}>
                  <camp.icon size={24} className={camp.status === 'Active' ? 'drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : ''} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{camp.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                      style={{
                        background: camp.status === 'Active' ? 'var(--vm-positive-surface)' : 'rgba(255,255,255,0.05)',
                        border: camp.status === 'Active' ? '1px solid rgba(52, 211, 153, 0.2)' : '1px solid var(--vm-border)',
                        color: camp.status === 'Active' ? 'var(--vm-positive)' : 'var(--vm-text-muted)',
                        boxShadow: camp.status === 'Active' ? 'inset 0 0 10px rgba(52,211,153,0.1)' : 'none'
                      }}>
                      {camp.status === 'Active' ? <Activity size={12} className="animate-pulse" /> : <Pause size={12} />}
                      {camp.status}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ color: 'var(--vm-text-secondary)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--vm-border)' }}>
                      {camp.type}
                    </span>
                  </div>
                </div>
              </div>
              <button style={{ color: 'var(--vm-text-muted)' }} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 py-5 mb-6 relative z-10"
              style={{ borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
              <div className="group/metric hover:-translate-y-0.5 transition-transform">
                <p className="text-xs mb-1.5 font-medium tracking-wide uppercase" style={{ color: 'var(--vm-text-secondary)' }}>Total Runs</p>
                <p className="text-2xl font-bold text-white tracking-tight">{camp.runs}</p>
              </div>
              <div className="group/metric hover:-translate-y-0.5 transition-transform">
                <p className="text-xs mb-1.5 font-medium tracking-wide uppercase" style={{ color: 'var(--vm-text-secondary)' }}>Conv. Rate</p>
                <p className="text-2xl font-bold text-white tracking-tight">{camp.conv}</p>
              </div>
              <div className="group/metric hover:-translate-y-0.5 transition-transform">
                <p className="text-xs mb-1.5 font-medium tracking-wide uppercase" style={{ color: 'var(--vm-text-secondary)' }}>Est. ROI</p>
                <p className="text-2xl font-black drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" style={{ color: 'var(--vm-accent)' }}>{camp.roi}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-4 relative z-10">
              <button className="flex-1 text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--vm-border)' }}>
                Edit Workflow
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 text-sm font-bold py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: camp.status === 'Active' ? 'rgba(255,255,255,0.03)' : 'linear-gradient(135deg, var(--vm-primary), var(--vm-primary-dim))',
                  border: camp.status === 'Active' ? '1px solid var(--vm-border)' : 'none',
                  color: camp.status === 'Active' ? 'var(--vm-text)' : '#FFFFFF',
                  boxShadow: camp.status === 'Active' ? 'none' : '0 4px 15px var(--vm-primary-glow)'
                }}>
                {camp.status === 'Active' ? <><Pause size={16} /> Pause</> : <><Play size={16} className="fill-current" /> Resume</>}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
