"use client";

import React, { useState } from 'react';
import { Network, Database, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Bot } from 'lucide-react';

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clinicName: '',
    niche: 'dental',
    bookingUrl: '',
    pmsSystem: 'dentrix',
    brandTone: 'professional',
    customOffer: '',
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', background: '#09090B', color: '#FFF', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* ═══ Top Nav ═══ */}
      <nav style={{ 
        height: 70, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', 
        alignItems: 'center', padding: '0 32px', justifyContent: 'space-between',
        background: 'rgba(9,9,11,0.8)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 
      }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
          VerveMind<span style={{ color: '#00F5D4' }}>.AI</span> <span style={{ color: '#52525B', fontSize: 16, fontWeight: 500, marginLeft: 12 }}>/ Agent Onboarding</span>
        </div>
      </nav>

      {/* ═══ Main Content ═══ */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 24px' }}>
        
        {/* Progress Bar */}
        <div style={{ width: '100%', maxWidth: 700, marginBottom: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 16, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
            <div style={{ position: 'absolute', top: 16, left: 0, height: 2, width: `${(step - 1) * 33.33}%`, background: '#00F5D4', transition: 'width 0.4s ease', zIndex: 1 }} />
            
            {[
              { id: 1, title: "Identity", icon: <Bot size={16} /> },
              { id: 2, title: "Systems", icon: <Database size={16} /> },
              { id: 3, title: "Knowledge", icon: <MessageSquare size={16} /> },
              { id: 4, title: "Deploy", icon: <Network size={16} /> }
            ].map((s) => (
              <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2, position: 'relative' }}>
                <div style={{ 
                  width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: step >= s.id ? '#00F5D4' : '#18181B', color: step >= s.id ? '#000' : '#A1A1AA',
                  border: step >= s.id ? 'none' : '2px solid rgba(255,255,255,0.1)', transition: 'all 0.3s'
                }}>
                  {step > s.id ? <CheckCircle2 size={18} /> : s.icon}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: step >= s.id ? '#E5E2E1' : '#52525B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Container */}
        <div style={{ width: '100%', maxWidth: 640, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 24, padding: 40, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          
          {/* STEP 1: IDENTITY */}
          {step === 1 && (
            <div className="fade-in">
              <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#FFF' }}>Clinic Identity</h2>
              <p style={{ color: '#A1A1AA', marginBottom: 32 }}>Tell us about the clinic we are building the AI Receptionist for.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  Practice/Clinic Name
                  <input type="text" placeholder="e.g. Twin Oaks Dentistry" value={formData.clinicName} onChange={(e) => updateForm('clinicName', e.target.value)}
                    style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#FFF', fontSize: 16 }} />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  Vertical / Niche
                  <select value={formData.niche} onChange={(e) => updateForm('niche', e.target.value)}
                    style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#FFF', fontSize: 16, appearance: 'none' }}>
                    <option value="dental">Dental Practice</option>
                    <option value="medspa">Medical Spa / Aesthetics</option>
                    <option value="roofing">Home Services / Roofing</option>
                    <option value="hvac">HVAC</option>
                  </select>
                </label>
              </div>
            </div>
          )}

          {/* STEP 2: SYSTEMS */}
          {step === 2 && (
            <div className="fade-in">
              <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#FFF' }}>System Integration</h2>
              <p style={{ color: '#A1A1AA', marginBottom: 32 }}>How will the AI connect to your existing calendar and patient records?</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  Primary PMS / EHR System
                  <select value={formData.pmsSystem} onChange={(e) => updateForm('pmsSystem', e.target.value)}
                    style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#FFF', fontSize: 16, appearance: 'none' }}>
                    <option value="dentrix">Dentrix</option>
                    <option value="opendental">Open Dental</option>
                    <option value="boulevard">Boulevard</option>
                    <option value="zenoti">Zenoti</option>
                    <option value="jobber">Jobber</option>
                    <option value="servicetitan">ServiceTitan</option>
                    <option value="other">Other / Standard Calendly</option>
                  </select>
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  Public Booking URL (Optional)
                  <input type="url" placeholder="https://calendly.com/your-clinic" value={formData.bookingUrl} onChange={(e) => updateForm('bookingUrl', e.target.value)}
                    style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#FFF', fontSize: 16 }} />
                </label>
              </div>
            </div>
          )}

          {/* STEP 3: KNOWLEDGE */}
          {step === 3 && (
            <div className="fade-in">
              <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#FFF' }}>Knowledge Base</h2>
              <p style={{ color: '#A1A1AA', marginBottom: 32 }}>Configure how the agent sounds and responds to inquiries.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  AI Personality / Tone
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                    {['professional', 'warm', 'urgent'].map(preset => (
                      <div key={preset} onClick={() => updateForm('brandTone', preset)} style={{ 
                        padding: '16px', borderRadius: 12, border: formData.brandTone === preset ? '1px solid #00F5D4' : '1px solid rgba(255,255,255,0.1)', 
                        background: formData.brandTone === preset ? 'rgba(0,245,212,0.1)' : 'rgba(0,0,0,0.4)', cursor: 'pointer', textAlign: 'center',
                        color: formData.brandTone === preset ? '#00F5D4' : '#A1A1AA', fontWeight: 600, textTransform: 'capitalize' 
                      }}>
                        {preset}
                      </div>
                    ))}
                  </div>
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  Current Special Offer (Agent will pitch this if relevant)
                  <textarea rows={3} placeholder="e.g. We have a new patient special this month: $99 for exam, x-rays, and cleaning." value={formData.customOffer} onChange={(e) => updateForm('customOffer', e.target.value)}
                    style={{ padding: '14px 16px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#FFF', fontSize: 16, resize: 'none' }} />
                </label>
              </div>
            </div>
          )}

          {/* STEP 4: DEPLOY */}
          {step === 4 && (
            <div className="fade-in" style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: 80, height: 80, borderRadius: 40, background: 'rgba(0,245,212,0.1)', border: '2px solid rgba(0,245,212,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#00F5D4' }}>
                <Bot size={40} />
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: '#FFF' }}>Ready to Synthesize</h2>
              <p style={{ color: '#A1A1AA', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
                We have all the data needed to generate the Vapi instruction set and Voice profile for {formData.clinicName || 'your clinic'}.
              </p>

              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px', textAlign: 'left', marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}><span style={{ color: '#A1A1AA' }}>Clinic:</span> <span style={{ fontWeight: 600 }}>{formData.clinicName}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}><span style={{ color: '#A1A1AA' }}>Niche:</span> <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{formData.niche}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#A1A1AA' }}>System:</span> <span style={{ fontWeight: 600, textTransform: 'capitalize' }}>{formData.pmsSystem}</span></div>
              </div>
            </div>
          )}

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <button onClick={prevStep} disabled={step === 1} style={{ 
              display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, fontWeight: 600,
              background: 'transparent', color: step === 1 ? '#52525B' : '#A1A1AA', border: 'none', cursor: step === 1 ? 'not-allowed' : 'pointer' 
            }}>
              <ChevronLeft size={18} /> Back
            </button>
            
            {step < 4 ? (
              <button onClick={nextStep} style={{ 
                display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, fontWeight: 700,
                background: '#FFF', color: '#000', border: 'none', cursor: 'pointer' 
              }}>
                Next Step <ChevronRight size={18} />
              </button>
            ) : (
              <button onClick={() => alert('Synthesis triggered! (Dummy action)')} style={{ 
                display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, fontWeight: 700,
                background: 'linear-gradient(135deg, #00DFC1, #00F5D4)', color: '#09090B', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 16px rgba(0,245,212,0.2)'
              }}>
                Deploy Agent
              </button>
            )}
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}} />
    </div>
  );
}
