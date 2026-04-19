"use client";

import React, { useState } from 'react';
import { Home, LayoutGrid, PhoneCall, Settings, CreditCard, Search, Bell, Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/dashboard', icon: Home },
    { name: 'Campaigns', href: '/campaigns', icon: LayoutGrid },
    { name: 'Call Intelligence', href: '/calls', icon: PhoneCall },
  ];

  const bottomNav = [
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Billing', href: '/billing', icon: CreditCard },
  ];

  return (
    <div className="flex h-screen text-[var(--vm-text)] overflow-hidden relative" style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif", background: 'var(--vm-base)' }}>
      
      {/* Luminescent Base Layer */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, #0C0C0E 100%)' }} />
      
      {/* Noise Film Grain Overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 9999,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        mixBlendMode: 'overlay'
      }} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar - Glassmorphism */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] lg:static lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ 
          background: 'rgba(17, 17, 20, 0.4)', 
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRight: '1px solid var(--vm-border)'
        }}>
        <div className="flex flex-col h-full relative z-10">
          
          {/* Logo */}
          <div className="h-20 flex items-center px-8 border-b border-white/5">
            <Link href="/dashboard" className="text-xl font-black tracking-tight text-white flex items-center gap-2.5 no-underline transition-transform hover:scale-[1.02]" style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]" style={{ background: 'linear-gradient(135deg, var(--vm-primary), var(--vm-primary-dim))' }}>
                <Zap className="text-white" size={18} />
              </div>
              <span>Verve<span style={{ color: 'var(--vm-primary-light)' }}>Mind</span></span>
            </Link>
          </div>

          {/* Main Nav */}
          <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} 
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 no-underline relative overflow-hidden"
                  style={{
                    background: isActive ? 'var(--vm-primary-surface)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--vm-text-secondary)',
                    fontWeight: isActive ? 600 : 400,
                  }}>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(139,92,246,0.1)] to-transparent pointer-events-none" />
                  )}
                  <item.icon size={18} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} style={{ color: isActive ? 'var(--vm-primary-light)' : 'var(--vm-text-muted)' }} />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Nav */}
          <div className="p-4 space-y-1.5 border-t border-white/5">
             {bottomNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} 
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 no-underline hover:bg-white/5"
                  style={{
                    background: isActive ? 'var(--vm-primary-surface)' : 'transparent',
                    color: isActive ? '#FFFFFF' : 'var(--vm-text-secondary)',
                    fontWeight: isActive ? 600 : 400,
                  }}>
                  <item.icon size={18} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} style={{ color: isActive ? 'var(--vm-primary-light)' : 'var(--vm-text-muted)' }} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        
        {/* Top Header - Glassmorphic */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30" 
          style={{ 
            background: 'rgba(12, 12, 14, 0.6)', 
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--vm-border)'
          }}>
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" style={{ color: 'var(--vm-text-secondary)' }} onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-[var(--vm-primary-light)]" size={16} style={{ color: 'var(--vm-text-muted)' }} />
              <input type="text" placeholder="Search calls, logs..." 
                className="py-2.5 pl-10 pr-4 text-sm text-white rounded-xl focus:outline-none transition-all duration-300 w-72 focus:w-80"
                style={{
                  background: 'rgba(24, 24, 27, 0.5)',
                  border: '1px solid var(--vm-border)',
                  color: 'var(--vm-text)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--vm-border-active)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--vm-border)'}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors" style={{ color: 'var(--vm-text-secondary)' }}>
              <Bell size={20} className="hover:animate-swing" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#0C0C0E]" style={{ background: 'var(--vm-primary)' }}></span>
            </button>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(139,92,246,0.15)] cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(124,58,237,0.1))',
                border: '1px solid var(--vm-border-active)',
                color: 'var(--vm-primary-light)',
              }}>
              VM
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 relative scroll-smooth">
          <div className="max-w-7xl mx-auto pb-12 relative z-10">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}
