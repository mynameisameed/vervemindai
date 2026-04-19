"use client";

import React from 'react';
import { Key, Database, Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif", color: 'var(--vm-text)' }}>
          Account Settings
        </h1>
        <p style={{ color: 'var(--vm-text-secondary)', marginTop: '4px' }}>Manage your AI configurations and API integrations.</p>
      </div>

      {/* Settings Grid */}
      <div className="space-y-6">
        
        {/* API Keys Section */}
        <section className="rounded-2xl overflow-hidden relative shadow-xl" 
          style={{ 
            background: 'rgba(24, 24, 27, 0.4)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--vm-border)' 
          }}>
          <div className="p-6 flex items-center gap-3 relative z-10" style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="p-2 rounded-xl" style={{ background: 'rgba(139,92,246,0.15)' }}>
              <Key size={18} style={{ color: 'var(--vm-primary-light)' }} />
            </div>
            <h2 className="text-xl font-black text-white tracking-tight">Integrations (BYOK)</h2>
          </div>
          <div className="p-8 space-y-8 relative z-10">
            <div className="grid gap-6">
              <div className="group/input">
                <label className="block text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within/input:text-[var(--vm-primary-light)]" style={{ color: 'var(--vm-text-secondary)' }}>Vapi API Key</label>
                <div className="flex gap-3">
                  <input type="password" value="••••••••••••••••" readOnly 
                    className="flex-1 rounded-xl px-5 py-3.5 text-white font-mono tracking-wider focus:outline-none transition-all duration-300"
                    style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--vm-border-active)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}/>
                  <button className="text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-white/10"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Edit
                  </button>
                </div>
              </div>
              <div className="group/input">
                <label className="block text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within/input:text-[var(--vm-primary-light)]" style={{ color: 'var(--vm-text-secondary)' }}>Twilio Auth Token</label>
                <div className="flex gap-3">
                  <input type="password" value="••••••••••••••••" readOnly 
                    className="flex-1 rounded-xl px-5 py-3.5 text-white font-mono tracking-wider focus:outline-none transition-all duration-300"
                    style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--vm-border-active)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}/>
                  <button className="text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-white/10"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl flex items-start gap-3" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.2)' }}>
               <div className="mt-0.5"><Key size={14} style={{ color: 'var(--vm-primary-light)' }} /></div>
               <p className="text-xs font-medium leading-relaxed" style={{ color: 'var(--vm-text-muted)' }}>VerveMind AI follows a Bring-Your-Own-Key model. Your keys are encrypted at rest using AES-256 and used exclusively for your workflows.</p>
            </div>
          </div>
        </section>

        {/* AI Voice Configuration */}
        <section className="rounded-2xl overflow-hidden relative shadow-xl" 
          style={{ 
            background: 'rgba(24, 24, 27, 0.4)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--vm-border)' 
          }}>
          <div className="p-6 flex items-center gap-3 relative z-10" style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="p-2 rounded-xl" style={{ background: 'rgba(139,92,246,0.15)' }}>
              <Database size={18} style={{ color: 'var(--vm-primary-light)' }} />
            </div>
            <h2 className="text-xl font-black text-white tracking-tight">AI Assistant Profile</h2>
          </div>
          <div className="p-8 space-y-6 relative z-10">
            <div className="group/input">
              <label className="block text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within/input:text-[var(--vm-primary-light)]" style={{ color: 'var(--vm-text-secondary)' }}>Assistant Name</label>
              <input type="text" defaultValue="Chloe" 
                className="w-full rounded-xl px-5 py-3.5 text-white font-bold tracking-tight focus:outline-none transition-all duration-300"
                style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }} 
                onFocus={(e) => e.target.style.borderColor = 'var(--vm-border-active)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'} />
            </div>
            <div className="group/input">
              <label className="block text-xs font-bold uppercase tracking-widest mb-3 transition-colors group-focus-within/input:text-[var(--vm-primary-light)]" style={{ color: 'var(--vm-text-secondary)' }}>Voice Model</label>
              <select className="w-full rounded-xl px-5 py-3.5 text-white font-medium focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                style={{ background: 'rgba(0,0,0,0.3) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%238B5CF6\' stroke-width=\'3\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E") no-repeat right 1rem center', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--vm-border-active)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}>
                <option value="azure">Azure - Emma (Neural)</option>
                <option value="elevenlabs">ElevenLabs - Rachel (Premium)</option>
                <option value="vapi">Vapi - Default</option>
              </select>
            </div>
          </div>
        </section>

        {/* Save Bar */}
        <div className="flex justify-end pt-4">
           <button className="text-white font-black px-10 py-4 rounded-xl flex items-center gap-2 transition-all"
             style={{ background: 'linear-gradient(135deg, var(--vm-primary), var(--vm-primary-dim))', boxShadow: '0 4px 30px var(--vm-primary-glow)' }}>
             <Save size={20} />
             Save All Changes
           </button>
        </div>

      </div>

    </div>
  );
}
