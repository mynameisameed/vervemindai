"use client";

import React, { useState } from 'react';
import { BarChart3, Users, PhoneCall, Calendar, Play, Pause, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <nav style={{ 
        height: 70, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', 
        alignItems: 'center', padding: '0 32px', justifyContent: 'space-between',
        background: 'rgba(9,9,11,0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 
      }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
          VerveMind<span style={{ color: '#00F5D4' }}>.AI</span> <span style={{ color: '#52525B', fontSize: 16, fontWeight: 500, marginLeft: 12 }}>/ Client Portal</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 14, color: '#A1A1AA' }}>Demo Clinic</div>
          <div style={{ width: 36, height: 36, borderRadius: 18, background: 'rgba(0,245,212,0.1)', border: '1px solid rgba(0,245,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00F5D4', fontWeight: 600 }}>
            DC
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: 40, maxWidth: 1200, margin: '0 auto', width: '100%', flex: 1 }}>
        <header style={{ marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>Campaign Overview</h1>
            <p style={{ color: '#A1A1AA', fontSize: 16, margin: 0 }}>Live metrics and insights for the past 30 days.</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ 
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
              color: '#A1A1AA', padding: '10px 20px', borderRadius: 8, fontSize: 14, cursor: 'pointer', fontWeight: 600 
            }}>
              Export Report
            </button>
            <a href="/onboarding" style={{ 
              background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', border: 'none', textDecoration: 'none',
              color: '#09090B', padding: '10px 24px', borderRadius: 8, fontSize: 14, cursor: 'pointer', fontWeight: 700,
              display: 'flex', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,245,212,0.2)'
            }}>
              + New Agent
            </a>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 40 }}>
          <StatCard icon={<PhoneCall size={20} color="#00F5D4" />} title="Inbound Calls Handled" value="342" trend="+12% / mo" />
          <StatCard icon={<Calendar size={20} color="#38bdf8" />} title="Appointments Booked" value="68" trend="+8% / mo" />
          <StatCard icon={<Users size={20} color="#a78bfa" />} title="Reactivation Leads" value="12" trend="+24% / mo" />
          <StatCard icon={<BarChart3 size={20} color="#fb923c" />} title="Est. Revenue Saved" value="$14,500" trend="+15% / mo" />
        </div>

        {/* Recent Calls Area */}
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: '#E5E2E1', margin: 0 }}>Recent AI Conversations</h2>
            <div style={{ fontSize: 14, color: '#00F5D4', cursor: 'pointer' }}>View All →</div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <ExpandableCallRow 
              name="John Doe" 
              time="10 mins ago" 
              duration="2m 34s" 
              status="Booked" 
              type="New Patient"
              summary="Caller successfully booked a consultation for Botox this Friday at 2:00 PM."
              transcript={[
                { speaker: 'AI', text: 'Thank you for calling Demo Clinic. How can I assist you today?' },
                { speaker: 'Caller', text: 'Hi, I saw your ad on Instagram and wanted to know about Botox.' },
                { speaker: 'AI', text: 'I can certainly help with that! We have openings this week. Would you like to schedule a consultation?' }
              ]}
            />
            <ExpandableCallRow 
              name="Sarah Smith" 
              time="45 mins ago" 
              duration="4m 12s" 
              status="Qualified" 
              type="Reactivation"
              summary="Followed up on a missed appointment. Caller is interested but needs to check schedule."
              transcript={[
                { speaker: 'AI', text: 'Hi Sarah, it\'s Ava from Demo Clinic calling.' },
                { speaker: 'Caller', text: 'Oh hi. Yeah, I\'ve been meaning to call you back.' },
                { speaker: 'AI', text: 'No problem at all! Would you like to reschedule your cleaning?' }
              ]}
            />
            <ExpandableCallRow 
              name="Mike Johnson" 
              time="2 hours ago" 
              duration="1m 45s" 
              status="Escalated" 
              type="Billing Question"
              summary="Caller had a complex question regarding their previous invoice. Transferring to human staff."
              transcript={[
                { speaker: 'Caller', text: 'Listen, I have a question about my bill from last Tuesday.' },
                { speaker: 'AI', text: 'I understand. Billing questions are best handled by our billing coordinator. Shall I transfer you?' }
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, trend }: any) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
        <div style={{ fontSize: 14, color: '#A1A1AA', fontWeight: 500 }}>{title}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>{value}</div>
        <div style={{ fontSize: 13, color: '#10B981', fontWeight: 600 }}>{trend}</div>
      </div>
    </div>
  );
}

function ExpandableCallRow({ name, time, duration, status, type, summary, transcript }: any) {
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const getStatusColor = (s: string) => {
    if (s === 'Booked') return { bg: 'rgba(16,185,129,0.1)', text: '#10B981', border: 'rgba(16,185,129,0.2)' };
    if (s === 'Escalated') return { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', border: 'rgba(239,68,68,0.2)' };
    return { bg: 'rgba(255,255,255,0.05)', text: '#A1A1AA', border: 'rgba(255,255,255,0.1)' };
  };
  const colors = getStatusColor(status);

  return (
    <div style={{ 
      background: expanded ? 'rgba(255,255,255,0.03)' : 'transparent', 
      border: `1px solid ${expanded ? 'rgba(0,245,212,0.15)' : 'transparent'}`, 
      borderRadius: 12, transition: 'all 0.2s', overflow: 'hidden' 
    }}>
      {/* Row Header */}
      <div 
        onClick={() => setExpanded(!expanded)}
        style={{ 
          display: 'grid', gridTemplateColumns: '2fr 1fr 1.5fr 1fr 40px', padding: '16px 20px', 
          cursor: 'pointer', alignItems: 'center', fontSize: 14,
          borderBottom: expanded ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, background: '#18181B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A1A1AA', border: '1px solid rgba(255,255,255,0.1)' }}>
            {name.charAt(0)}
          </div>
          <div>
            <div style={{ color: '#E5E2E1', fontWeight: 500 }}>{name}</div>
            <div style={{ color: '#71717A', fontSize: 12, marginTop: 2 }}>{time}</div>
          </div>
        </div>
        <div style={{ color: '#A1A1AA' }}>{type}</div>
        <div>
          <span style={{ padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
            {status}
          </span>
        </div>
        <div style={{ color: '#71717A' }}>{duration}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', color: '#A1A1AA' }}>
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: 32 }}>
          {/* Left: Summary & Playback */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', color: '#71717A', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 8 }}>Call Summary</div>
              <p style={{ color: '#E5E2E1', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{summary}</p>
            </div>
            
            <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: 12, color: '#71717A', marginBottom: 12, display: 'flex', justifyContent: 'space-between' }}>
                <span>Recording</span>
                <span>{duration}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); setPlaying(!playing); }}
                  style={{ width: 40, height: 40, borderRadius: 20, background: '#00F5D4', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#09090B' }}
                >
                  {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" style={{ marginLeft: 2 }} />}
                </button>
                {/* Fake Waveform */}
                <div style={{ flex: 1, height: 24, display: 'flex', alignItems: 'center', gap: 3, opacity: 0.5 }}>
                  {Array.from({length: 30}).map((_, i) => (
                    <div key={i} style={{ flex: 1, backgroundColor: playing && i < 10 ? '#00F5D4' : '#52525B', height: `${Math.max(20, Math.random() * 100)}%`, borderRadius: 2, transition: 'background 0.3s' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Transcript */}
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)', maxHeight: 220, overflowY: 'auto' }}>
            <div style={{ fontSize: 12, textTransform: 'uppercase', color: '#71717A', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
              <FileText size={14} /> Brief Transcript
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {transcript.map((line: any, idx: number) => (
                <div key={idx} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, padding: '2px 6px', borderRadius: 4, height: 'fit-content', background: line.speaker === 'AI' ? 'rgba(0,245,212,0.1)' : 'rgba(255,255,255,0.05)', color: line.speaker === 'AI' ? '#00F5D4' : '#A1A1AA' }}>
                    {line.speaker}
                  </div>
                  <div style={{ color: '#E5E2E1', fontSize: 14, lineHeight: 1.5 }}>
                    {line.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
