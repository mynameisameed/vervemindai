"use client";

import React, { useState } from 'react';
import { Home, LayoutGrid, PhoneCall, Settings, CreditCard, Search, Bell, Menu, X, Zap, Cpu, Activity, Database, Shield } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Terminal', href: '/dashboard', icon: Home },
    { name: 'Campaigns', href: '/campaigns', icon: LayoutGrid },
    { name: 'Intelligence', href: '/calls', icon: PhoneCall },
  ];

  const bottomNav = [
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Billing', href: '/billing', icon: CreditCard },
  ];

  return (
    <div className="flex h-screen text-vm-text overflow-hidden relative bg-vm-base font-body">
      
      {/* Luminescent Base Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(0, 245, 212, 0.05) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(210, 187, 255, 0.05) 0%, transparent 50%)' }} />
      
      {/* Sidebar - Editorial Glass */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 transform transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:static lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} glass-panel`}
        style={{ borderRight: '1px solid rgba(255, 255, 255, 0.03)', background: 'rgba(13, 13, 15, 0.8)' }}>
        <div className="flex flex-col h-full relative z-10">
          
          {/* Logo Section */}
          <div className="h-28 flex items-center px-10">
            <Link href="/dashboard" className="flex items-center gap-4 no-underline group">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-vm-primary shadow-[0_0_30px_rgba(0,245,212,0.3)] group-hover:shadow-[0_0_50px_rgba(0,245,212,0.5)] transition-all duration-500">
                <Cpu className="text-black" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
                  Verve<span className="text-vm-primary opacity-80">Mind</span>
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-vm-primary animate-pulse" />
                  <span className="text-[9px] font-bold tracking-[0.3em] text-vm-text-muted uppercase">Neural Hub v1.0</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 px-6 py-8 space-y-3 overflow-y-auto">
            <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-vm-text-muted mb-6 px-4">Core Modules</div>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} 
                  className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-[11px] transition-all duration-500 no-underline relative overflow-hidden font-bold tracking-widest uppercase ${isActive ? 'bg-white/[0.03] text-white border border-white/5 shadow-2xl' : 'text-vm-text-muted hover:text-white hover:bg-white/5'}`}>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-vm-primary rounded-r-full shadow-[0_0_15px_#00F5D4]" />
                  )}
                  <item.icon size={18} className={`transition-all duration-500 ${isActive ? 'text-vm-primary' : 'group-hover:text-vm-primary-light'}`} />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Infrastructure Health */}
          <div className="px-10 py-8 border-t border-white/[0.03] space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-bold uppercase tracking-widest text-vm-text-muted">Network Load</span>
                <span className="text-[9px] font-bold text-vm-primary">12%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-vm-primary w-[12%] shadow-[0_0_10px_#00F5D4]" />
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-6 space-y-2 mb-4">
             {bottomNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} 
                  className={`group flex items-center gap-4 px-5 py-3.5 rounded-xl text-[10px] transition-all duration-300 no-underline font-bold tracking-[0.2em] uppercase ${isActive ? 'bg-vm-primary/10 text-white' : 'text-vm-text-muted hover:text-white hover:bg-white/5'}`}>
                  <item.icon size={16} className={`transition-all duration-300 ${isActive ? 'text-vm-primary' : 'group-hover:text-vm-primary-light'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Primary Content Vessel */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        
        {/* Superior Header */}
        <header className="h-24 flex items-center justify-between px-10 lg:px-16 sticky top-0 z-30 glass-panel" 
          style={{ background: 'rgba(13, 13, 15, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.03)' }}>
          <div className="flex items-center gap-8">
            <button className="lg:hidden p-3 rounded-xl bg-white/5 text-vm-text-secondary" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={20} />
            </button>
            <div className="relative hidden md:block group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-vm-text-muted group-focus-within:text-vm-primary transition-colors" size={16} />
              <input type="text" placeholder="Access Neural Archive..." 
                className="py-3.5 pl-14 pr-8 text-[11px] font-bold tracking-widest uppercase text-white rounded-2xl bg-white/[0.02] border border-white/5 focus:border-vm-primary/30 focus:outline-none transition-all w-80 focus:w-96"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden xl:flex items-center gap-4 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="w-2 h-2 rounded-full bg-vm-positive animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-vm-text-muted">Node: SFO-1 Active</span>
            </div>
            
            <button className="relative p-3 rounded-xl bg-white/5 text-vm-text-secondary hover:text-white transition-all">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-vm-primary shadow-[0_0_10px_#00F5D4]"></span>
            </button>
            
            <div className="flex items-center gap-4 pl-8 border-l border-white/10">
              <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-[11px] font-black text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>Dr. Samuel</span>
                <span className="text-[9px] font-bold text-vm-primary tracking-widest uppercase opacity-80">Administrator</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-[11px] font-black text-white hover:border-vm-primary/50 cursor-pointer transition-all duration-500 shadow-xl">
                S
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Stream */}
        <main className="flex-1 overflow-y-auto p-10 lg:p-16 relative scroll-smooth">
          <div className="max-w-7xl mx-auto pb-32 relative z-10">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}
