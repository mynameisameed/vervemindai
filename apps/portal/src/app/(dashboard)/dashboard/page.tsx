"use client";

import React from 'react';
import { Phone, Users, DollarSign, Activity, Play, Settings, Power } from 'lucide-react';

export default function DashboardHome() {
  const metrics = [
    { label: 'Total Calls Managed', value: '1,248', trend: '+12%', icon: Phone, color: 'var(--vm-primary)' },
    { label: 'Leads Generated', value: '342', trend: '+8%', icon: Users, color: 'var(--vm-primary-light)' },
    { label: 'Revenue Recovered', value: '$12,450', trend: '+15%', icon: DollarSign, color: 'var(--vm-accent)' },
    { label: 'AI Answer Rate', value: '99.8%', trend: '+0.2%', icon: Activity, color: 'var(--vm-positive)' },
  ];

  const recentCalls = [
    { id: 1, time: '10:42 AM', name: 'John Smith', intent: 'Booking', status: 'Action Required' },
    { id: 2, time: '09:15 AM', name: 'Sarah Connor', intent: 'Pricing Inquiry', status: 'Resolved' },
    { id: 3, time: 'Yesterday', name: 'Unknown Caller', intent: 'Spam', status: 'Blocked' },
    { id: 4, time: 'Yesterday', name: 'Mike Ross', intent: 'Reschedule', status: 'Resolved' },
  ];

  return (
    <div className="flex flex-col xl:flex-row gap-8">
      
      {/* Left/Center Column (Main Content) */}
      <div className="flex-1 space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif", color: 'var(--vm-text)' }}>
            Welcome back, Dr. Smith
          </h1>
          <p style={{ color: 'var(--vm-text-secondary)', marginTop: '4px' }}>Here is what your AI Receptionist has been up to.</p>
        </div>

        {/* Hero Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
              style={{ background: 'var(--vm-surface)' }}>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${m.color}10, transparent 70%)` }} />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--vm-surface-highest)' }}>
                  <m.icon size={20} style={{ color: m.color }} />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ color: 'var(--vm-positive)', background: 'var(--vm-positive-surface)' }}>
                  {m.trend}
                </span>
              </div>
              <div className="relative z-10">
                <p className="text-sm mb-1" style={{ color: 'var(--vm-text-muted)' }}>{m.label}</p>
                <h3 className="text-2xl font-black text-white">{m.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Recent AI Intercepts */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--vm-surface)' }}>
          <div className="p-6 flex justify-between items-center" style={{ borderBottom: '1px solid var(--vm-border)' }}>
            <h2 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
              Recent AI Intercepts
            </h2>
            <button className="text-sm font-semibold hover:underline" style={{ color: 'var(--vm-primary-light)' }}>View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ background: 'var(--vm-surface-high)' }}>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--vm-text-muted)' }}>Date / Time</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--vm-text-muted)' }}>Contact</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--vm-text-muted)' }}>Intent</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider font-semibold text-right" style={{ color: 'var(--vm-text-muted)' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((call, idx) => (
                  <tr key={call.id} className="transition-colors"
                    style={{ borderBottom: idx < recentCalls.length - 1 ? '1px solid var(--vm-border)' : 'none' }}>
                    <td className="px-6 py-4 text-sm" style={{ color: 'var(--vm-text-secondary)' }}>{call.time}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-white">{call.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'var(--vm-primary-surface)', color: 'var(--vm-primary-light)' }}>
                        {call.intent}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-sm font-semibold transition-colors px-4 py-2 rounded-lg"
                        style={{ color: 'var(--vm-primary-light)', background: 'var(--vm-primary-surface)' }}>
                        View Summary
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Right Column (Quick Actions) */}
      <div className="xl:w-80 space-y-6">
        
        {/* Active Status */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--vm-surface)', border: '1px solid var(--vm-border)' }}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Power size={18} style={{ color: 'var(--vm-positive)' }} />
              System Status
            </h3>
            <div className="w-12 h-6 rounded-full relative cursor-pointer"
              style={{ background: 'var(--vm-positive)', boxShadow: '0 0 15px var(--vm-positive-surface)' }}>
              <div className="absolute right-1 top-1 w-4 h-4 rounded-full" style={{ background: 'var(--vm-base)' }}></div>
            </div>
          </div>
          <p className="text-xs" style={{ color: 'var(--vm-text-muted)' }}>AI Receptionist is currently active and intercepting calls.</p>
        </div>

        {/* Quick Actions List */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--vm-surface)', border: '1px solid var(--vm-border)' }}>
          <h3 className="font-bold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-xl transition-colors group"
              style={{ background: 'var(--vm-surface-high)', border: '1px solid var(--vm-border)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--vm-text)' }}>Test AI Voice</span>
              <Play size={16} className="group-hover:scale-110 transition-transform" style={{ color: 'var(--vm-primary-light)' }} />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-xl transition-colors group"
              style={{ background: 'var(--vm-surface-high)', border: '1px solid var(--vm-border)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--vm-text)' }}>Update Business Info</span>
              <Settings size={16} className="group-hover:text-white transition-colors" style={{ color: 'var(--vm-text-muted)' }} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
