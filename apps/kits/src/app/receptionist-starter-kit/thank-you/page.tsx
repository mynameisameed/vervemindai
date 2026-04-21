"use client";

import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, Download, PlayCircle, Settings } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we might verify the session_id here
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [sessionId]);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-inter selection:bg-brand-teal selection:text-brand-dark flex flex-col items-center py-20 px-6">
      
      {/* Success Animation Area */}
      <div className="w-24 h-24 mb-10 relative">
        <div className="absolute inset-0 bg-brand-teal/20 rounded-full animate-ping" />
        <div className="relative w-full h-full bg-brand-dark border-2 border-brand-teal rounded-full flex items-center justify-center">
          <CheckCircle2 size={48} className="text-brand-teal" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
          You're in! 🎉
        </h1>
        <p className="text-xl text-brand-muted leading-relaxed">
          Your payment was successful. We've just sent an email with your instant access links and setup instructions.
        </p>
      </div>

      {/* Action Cards */}
      <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        
        {/* Step 1: Download */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
            <Download size={32} className="text-brand-teal" />
          </div>
          <h3 className="font-bold text-xl mb-3">Step 1: Get Your Files</h3>
          <p className="text-brand-muted text-sm mb-8 leading-relaxed">
            Access the Google Drive folder containing all prompt templates, SMS scripts, and the setup SOP.
          </p>
          <a href="https://drive.google.com/drive/folders/1yoZAszZizj9bEY_Pk6jmGQMxfVnSTuMQ" target="_blank" rel="noopener noreferrer" className="mt-auto w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
            Open Drive Folder
          </a>
        </div>

        {/* Step 2: Watch Setup */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
            <PlayCircle size={32} className="text-blue-400" />
          </div>
          <h3 className="font-bold text-xl mb-3">Step 2: Watch Walkthrough</h3>
          <p className="text-brand-muted text-sm mb-8 leading-relaxed">
            Follow along with the 15-minute Loom video where I show you exactly how to import the GHL snapshot and connect Vapi.
          </p>
          <a href="#" className="mt-auto w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
            Watch Tutorial
          </a>
        </div>

      </div>

      {/* Upsell Banner */}
      <div className="max-w-3xl w-full bg-gradient-to-r from-brand-teal/20 to-transparent border border-brand-teal/30 rounded-3xl p-1 relative overflow-hidden">
        <div className="bg-brand-dark rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold mb-4 uppercase tracking-wider text-brand-muted">
              <Settings size={14} /> Optional Upgrade
            </div>
            <h3 className="text-2xl font-black mb-3">Want this fully set up for you?</h3>
            <p className="text-brand-muted leading-relaxed">
              Skip the technical setup. We'll install the workflows, configure your Twilio numbers, and customize the AI prompt for your specific business — <strong>delivered in 48 hours for $299.</strong>
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <a href="https://calendly.com/vervemindai/lead" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-teal text-brand-dark font-black px-8 py-5 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all">
              Book Setup Call <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-dark text-white flex items-center justify-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
