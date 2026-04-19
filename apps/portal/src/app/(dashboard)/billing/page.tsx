"use client";

import React from 'react';
import { CreditCard, ArrowUpRight, CheckCircle2, Package, History } from 'lucide-react';

export default function BillingPage() {
  const invoices = [
    { id: 'INV-001', date: 'April 01, 2026', amount: '$49.00', status: 'Paid' },
    { id: 'INV-002', date: 'March 01, 2026', amount: '$49.00', status: 'Paid' },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif", color: 'var(--vm-text)' }}>
          Billing & Subscription
        </h1>
        <p style={{ color: 'var(--vm-text-secondary)', marginTop: '4px' }}>Manage your plan and view recent transaction history.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Current Plan */}
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-2xl overflow-hidden relative shadow-xl" 
            style={{ 
              background: 'rgba(24, 24, 27, 0.4)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--vm-border)' 
            }}>
            <div className="p-8 flex justify-between items-start relative overflow-hidden">
              {/* Subtle gradient glow */}
              <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 0% 0%, var(--vm-primary-glow), transparent 60%)' }} />
              <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{ background: 'radial-gradient(circle, var(--vm-primary) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--vm-primary-light)' }}>
                  <Package size={14} /> Current Plan
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight">Starter Kit Plus</h2>
                <p style={{ color: 'var(--vm-text-secondary)', marginTop: '8px' }} className="font-medium">Unlimited calls handled by AI Receptionist.</p>
              </div>
              <div className="text-right relative z-10">
                <p className="text-4xl font-black text-white tracking-tighter drop-shadow-md">$49</p>
                <p className="text-sm font-semibold mt-1" style={{ color: 'var(--vm-text-muted)' }}>per month</p>
              </div>
            </div>
            <div className="p-8" style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--vm-text)' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--vm-positive)' }} className="drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]" />
                  Next billing date: <span className="font-black tracking-tight text-white">May 01, 2026</span>
                </div>
                <button className="text-sm font-bold transition-all hover:scale-105" style={{ color: 'var(--vm-primary-light)', textShadow: '0 0 10px rgba(139,92,246,0.5)' }}>Change Plan</button>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="rounded-2xl p-6 relative shadow-xl" 
            style={{ 
              background: 'rgba(24, 24, 27, 0.4)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--vm-border)' 
            }}>
            <h3 className="text-white font-bold mb-5 flex items-center gap-2 tracking-tight">
              <CreditCard size={18} style={{ color: 'var(--vm-text-muted)' }} />
              Payment Method
            </h3>
            <div className="flex items-center justify-between p-5 rounded-xl transition-all duration-300 hover:bg-white/5"
              style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.2)' }}>
              <div className="flex items-center gap-5">
                <div className="w-14 h-9 rounded flex items-center justify-center text-[11px] font-black italic tracking-tighter"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--vm-text-muted)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  VISA
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">Visa ending in 4242</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--vm-text-muted)' }}>Expires 12/28</p>
                </div>
              </div>
              <button className="text-sm font-bold transition-colors hover:text-white" style={{ color: 'var(--vm-primary-light)' }}>Edit</button>
            </div>
          </section>
        </div>

        {/* Invoice History */}
        <section className="rounded-2xl flex flex-col relative shadow-xl overflow-hidden" 
          style={{ 
            background: 'rgba(24, 24, 27, 0.4)', 
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--vm-border)' 
          }}>
          <div className="p-6" style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 className="text-white font-bold flex items-center gap-2 tracking-tight">
              <History size={18} style={{ color: 'var(--vm-text-muted)' }} />
              History
            </h3>
          </div>
          <div className="flex-1 p-2">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex justify-between items-center group p-4 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{inv.date}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--vm-text-muted)' }}>{inv.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white tracking-tight">{inv.amount}</p>
                  <button className="text-[10px] font-black uppercase tracking-wider flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300"
                    style={{ color: 'var(--vm-primary-light)' }}>
                    PDF <ArrowUpRight size={12} strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
