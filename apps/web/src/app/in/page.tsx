<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VerveMind India - AI Appointment Booking for Clinics</title>
    <meta name="description" content="Transform your clinic with AI-powered appointment booking. Start at just ₹8,000/month.">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root{--p:#6366F1;--s:#10B981;--a:#F59E0B;--d:#1F2937;--g:#6B7280;--l:#F9FAFB;--bg:linear-gradient(135deg,#6366F1,#8B5CF6);--sh:0 4px 6px rgba(0,0,0,.1);--sh2:0 20px 25px rgba(0,0,0,.1)}
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Plus Jakarta Sans',sans-serif;color:var(--d);line-height:1.6}
        .c{max-width:1200px;margin:0 auto;padding:0 24px}
        nav{position:fixed;top:0;left:0;right:0;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);z-index:1000;padding:16px 0;border-bottom:1px solid rgba(0,0,0,.05)}
        .nc{display:flex;justify-content:space-between;align-items:center}
        .logo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:24px;color:var(--p)}
        .li{width:40px;height:40px;background:var(--bg);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700}
        .nk{display:flex;gap:32px;align-items:center}
        .nk a{color:var(--g);text-decoration:none;font-weight:500}
        .nk a:hover{color:var(--p)}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:12px;font-weight:600;font-size:16px;text-decoration:none;transition:.2s;cursor:pointer;border:none}
        .bp{background:var(--bg);color:#fff;box-shadow:0 4px 14px rgba(99,102,241,.4)}
        .bp:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(99,102,241,.5)}
        .hero{padding:160px 0 100px;background:linear-gradient(180deg,#F0F1FF,#fff);position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-50%;right:-20%;width:800px;height:800px;background:radial-gradient(circle,rgba(99,102,241,.1),transparent 70%);border-radius:50%}
        .hc{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
        .hero h1{font-size:56px;font-weight:800;line-height:1.1;margin-bottom:24px}
        .hero h1 span{background:var(--bg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .hero p{font-size:20px;color:var(--g);margin-bottom:32px;max-width:500px}
        .hs{display:flex;gap:40px;margin-top:48px;padding-top:32px;border-top:1px solid rgba(0,0,0,.1)}
        .st{text-align:left}
        .sv{font-size:36px;font-weight:800;color:var(--p)}
        .sl{font-size:14px;color:var(--g)}
        .hf{background:#fff;padding:40px;border-radius:24px;box-shadow:var(--sh2)}
        .hf h3{font-size:24px;margin-bottom:8px}
        .hf p{color:var(--g);margin-bottom:24px}
        .fg{margin-bottom:20px}
        .fg label{display:block;font-weight:600;margin-bottom:8px;font-size:14px}
        .fg input,.fg select{width:100%;padding:14px 16px;border:2px solid #E5E7EB;border-radius:12px;font-size:16px;font-family:inherit}
        .fg input:focus,.fg select:focus{outline:none;border-color:var(--p)}
        .pi{display:flex;align-items:center;gap:12px}
        .pp{display:flex;align-items:center;gap:8px;padding:14px 16px;background:var(--l);border:2px solid #E5E7EB;border-radius:12px;font-weight:600}
        .pp span{color:var(--g)}
        .tb{display:flex;gap:16px;margin-top:20px;flex-wrap:wrap}
        .tba{display:flex;align-items:center;gap:6px;font-size:13px;color:var(--g)}
        .tba svg{width:16px;height:16px;color:var(--s)}
        section{padding:100px 0}
        .sh{text-align:center;max-width:700px;margin:0 auto 60px}
        .slb{display:inline-block;padding:8px 16px;background:rgba(99,102,241,.1);color:var(--p);border-radius:20px;font-weight:600;font-size:14px;margin-bottom:16px}
        .sh h2{font-size:40px;font-weight:700;margin-bottom:16px}
        .sh p{font-size:18px;color:var(--g)}
        #problem{background:var(--l)}
        .pg{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
        .pc{padding:32px;background:#fff;border-radius:20px;text-align:center;transition:.3s}
        .pc:hover{transform:translateY(-8px)}
        .pi2{width:72px;height:72px;background:var(--l);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:32px}
        .pc h3{font-size:20px;margin-bottom:12px}
        .pc p{color:var(--g);font-size:15px}
        #solution{background:var(--bg);color:#fff}
        #solution .sh h2,#solution .sh p{color:#fff}
        #solution .slb{background:rgba(255,255,255,.2);color:#fff}
        .sg{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
        .sf{display:flex;flex-direction:column;gap:24px}
        .sft{display:flex;gap:20px;padding:24px;background:rgba(255,255,255,.1);border-radius:16px}
        .fi{width:48px;height:48px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0}
        .sft h4{font-size:18px;margin-bottom:8px}
        .sft p{font-size:14px;opacity:.9}
        .si{background:#fff;border-radius:24px;padding:32px;box-shadow:var(--sh2)}
        .pm{background:linear-gradient(180deg,#1F2937,#374151);border-radius:16px;padding:16px;color:#fff}
        .ps{background:#fff;border-radius:12px;overflow-hidden;color:var(--d)}
        .ah{background:var(--bg);padding:16px;color:#fff;text-align:center;font-weight:600}
        .ab{padding:20px}
        .cm{background:#F3F4F6;padding:12px 16px;border-radius:12px;margin-bottom:12px;font-size:14px}
        .cm.ai{background:var(--p);color:#fff;margin-left:20px}
        .cm.user{margin-right:20px}
        .ac{background:#fff;border:2px solid #E5E7EB;border-radius:12px;padding:16px;margin-top:16px}
        .ac .time{color:var(--p);font-weight:700;font-size:20px}
        .ac .dr{font-size:14px;color:var(--g)}
        #testimonials{background:var(--l)}
        .tg{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
        .tc{background:#fff;padding:32px;border-radius:20px;box-shadow:var(--sh)}
        .th{display:flex;align-items:center;gap:16px;margin-bottom:20px}
        .ta{width:56px;height:56px;border-radius:50%;background:var(--bg);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:20px}
        .ti h4{font-size:16px;margin-bottom:4px}
        .ti span{font-size:14px;color:var(--g)}
        .ts{color:var(--a);margin-bottom:16px;font-size:18px}
        .tt{color:var(--g);font-size:15px;line-height:1.7}
        .tm{display:flex;gap:24px;margin-top:20px;padding-top:20px;border-top:1px solid #E5E7EB}
        .m{text-align:center}
        .mv{font-size:24px;font-weight:700;color:var(--s)}
        .ml{font-size:12px;color:var(--g)}
        #pricing{}
        .prg{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        .prc{padding:32px;border-radius:20px;border:2px solid #E5E7EB;text-align:center;transition:.3s;position:relative}
        .prc:hover{border-color:var(--p);transform:translateY(-4px)}
        .prc.f{border-color:var(--p);background:linear-gradient(180deg,#F0F1FF,#fff)}
        .prc.f::before{content:'Most Popular';position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--bg);color:#fff;padding:4px 16px;border-radius:20px;font-size:12px;font-weight:600}
        .pci{width:64px;height:64px;background:var(--l);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:28px}
        .prc h3{font-size:20px;margin-bottom:8px}
        .pp{font-size:36px;font-weight:800;color:var(--p);margin-bottom:8px}
        .pp span{font-size:16px;font-weight:500;color:var(--g)}
        .per{color:var(--g);font-size:14px;margin-bottom:24px}
        .pfl{text-align:left;margin-bottom:32px}
        .pfl li{display:flex;align-items:center;gap:12px;padding:10px 0;font-size:14px;color:var(--g);list-style:none}
        .pfl li svg{width:20px;height:20px;color:var(--s);flex-shrink:0}
        .prc .btn{width:100%}
        .pno{text-align:center;margin-top:24px;color:var(--g);font-size:14px}
        .pno strong{color:var(--s)}
        #faq{background:var(--l)}
        .faqg{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:900px;margin:0 auto}
        .fi{background:#fff;padding:28px;border-radius:16px;box-shadow:var(--sh)}
        .fi h4{font-size:18px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center}
        .fi h4::after{content:'+';font-size:24px;color:var(--p);font-weight:300}
        .fi p{color:var(--g);font-size:15px;line-height:1.7}
        .cta{background:var(--bg);text-align:center;color:#fff;padding:100px 0}
        .cta h2{font-size:48px;margin-bottom:16px}
        .cta p{font-size:20px;opacity:.9;max-width:600px;margin:0 auto 40px}
        .cb{display:flex;gap:16px;justify-content:center}
        .cta .btn-white{padding:16px 40px;font-size:18px;background:#fff;color:var(--p);border-radius:12px;font-weight:600}
        .cta .btn-white:hover{transform:translateY(-2px);box-shadow:var(--sh2)}
        footer{background:#1F2937;color:#fff;padding:60px 0 30px}
        .fg{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
        .fb p{color:#9CA3AF;margin:16px 0;font-size:14px}
        .fc h5{font-size:14px;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;color:#9CA3AF}
        .fc a{display:block;color:#9CA3AF;text-decoration:none;padding:8px 0;font-size:14px}
        .fc a:hover{color:#fff}
        .fbottom{padding-top:30px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#9CA3AF}
        .upi{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.1);padding:8px 16px;border-radius:8px;font-size:13px}
        @media(max-width:1024px){.hc{grid-template-columns:1fr}.pg,.tg,.prg{grid-template-columns:repeat(2,1fr)}.sg{grid-template-columns:1fr}.fg{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:768px){.hero h1{font-size:40px}.nk{display:none}.pg,.tg,.prg,.faqg{grid-template-columns:1fr}.hs{flex-direction:column;gap:24px}.cta h2{font-size:32px}.cb{flex-direction:column}.fg{grid-template-columns:1fr}.fbottom{flex-direction:column;gap:16px;text-align:center}}
    </style>
</head>
<body>
<nav><div class="c nc"><div class="logo"><div class="li">V</div>VerveMind India</div><div class="nk"><a href="#problem">Problems</a><a href="#solution">Solution</a><a href="#testimonials">Success Stories</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href="#contact" class="btn bp">Get Started</a></div></div></nav>
<section class="hero"><div class="c hc"><div><h1>Fill Your Clinic's <span>Appointment Book</span> While You Sleep</h1><p>AI-powered booking that calls patients, confirms appointments, and brings back no-shows — working 24/7 for clinics across India.</p><div class="hs"><div class="st"><div class="sv">500+</div><div class="sl">Clinics in India</div></div><div class="st"><div class="sv">₹50Cr+</div><div class="sl">Revenue Generated</div></div><div class="st"><div class="sv">40%</div><div class="sl">More Appointments</div></div></div></div><div class="hf" id="contact"><h3>Start Your Free Trial</h3><p>No credit card required. 14-day free trial.</p><form><div class="fg"><label>Clinic Name</label><input type="text" placeholder="e.g., Apollo Clinic" required></div><div class="fg"><label>Phone Number</label><div class="pi"><div class="pp"><span>🇮🇳</span><span>+91</span></div><input type="tel" placeholder="98765 43210" required style="flex:1"></div></div><div class="fg"><label>City</label><select required><option value="">Select your city</option><option value="mumbai">Mumbai</option><option value="delhi">Delhi</option><option value="bangalore">Bangalore</option><option value="chennai">Chennai</option><option value="hyderabad">Hyderabad</option><option value="kolkata">Kolkata</option><option value="pune">Pune</option><option value="other">Other</option></select></div><button type="submit" class="btn bp" style="width:100%">Start Free Trial</button></form><div class="tb"><div class="tba"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>256-bit SSL Security</div><div class="tba"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>ISO 27001 Certified</div></div></div></div></section>
<section id="problem"><div class="c"><div class="sh"><span class="slb">The Challenge</span><h2>Why Clinic Owners Lose₹ Lakhs Every Month</h2><p>These silent revenue killers are destroying your practice — and you might not even know it.</p></div><div class="pg"><div class="pc"><div class="pi2">📞</div><h3>Missed Calls = Missed Patients</h3><p>On average, clinics miss 30% of incoming calls during peak hours. Each missed call could be a patient you'll never get back.</p></div><div class="pc"><div class="pi2">🗓️</div><h3>No-Shows Destroy Your Schedule</h3><p>15-25% of appointments are no-shows. That's 1 in 4 slots wasted — pure revenue loss, every single day.</p></div><div class="pc"><div class="pi2">💰</div><h3>Old Patients Never Return</h3><p>Your database has 5,000 patients, but only 500 came last year. The rest forgot you exist — and so did their wallet.</p></div><div class="pc"><div class="pi2">⏰</div><h3>Staff Time Wasted</h3><p>Your front desk spends 4+ hours daily on appointment confirmations. That's salary money down the drain.</p></div><div class="pc"><div class="pi2">🤝</div><h3>Competition Goes Digital</h3><p>New clinics with AI booking are stealing your patients. They're offering what you can't — instant booking, 24/7.</p></div><div class="pc"><div class="pi2">😤</div><h3>Overbooking Chaos</h3><p>Double-booking leads to angry patients and reviews. Managing this manually is impossible at scale.</p></div></div></div></section>
<section id="solution"><div class="c"><div class="sh"><span class="slb">The Solution</span><h2>Your AI Receptionist That Never Sleeps</h2><p>One system handles bookings, confirmations, and patient reactivation — automatically.</p></div><div class="sg"><div class="sf"><div class="sft"><div class="fi">🤖</div><div><h4>AI Voice Receptionist</h4><p>Natural Hindi/English conversations. Handles booking, rescheduling, and inquiries — 24/7, even at 2 AM.</p></div></div><div class="sft"><div class="fi">📲</div><div><h4>WhatsApp Integration</h4><p>Send appointment reminders, receive confirmations, and share reports — all through WhatsApp they already use.</p></div></div><div class="sft"><div class="fi">🔄</div><div><h4>Patient Reactivation Engine</h4><p>Automatically reach out to patients who haven't visited in 6+ months. Win them back with personalized offers.</p></div></div><div class="sft"><div class="fi">💳</div><div><h4>UPI & Payment Integration</h4><p>Collect advance payments via UPI, Google Pay, PhonePe. Reduce no-shows by 70% with skin in the game.</p></div></div><div class="sft"><div class="fi">📊</div><div><h4>Smart Analytics Dashboard</h4><p>See exactly how many appointments you gained, revenue generated, and staff time saved — in real-time.</p></div></div></div><div class="si"><div class="pm"><div class="ps">">VerveMind Assistant</div><div class="ab"><div class="cm user">Hi<div class="ah, I want to book a consultation</div><div class="cm ai">Namaste! Which doctor would you like to see?</div><div class="cm user">Dr. Sharma, for tomorrow if possible</div><div class="cm ai">Perfect! I have slots at 10 AM, 2 PM, or 4 PM.</div><div class="cm user">10 AM works</div><div class="cm ai"><b>Confirmed!</b> Tomorrow at 10 AM. Send UPI link for ₹500 advance?</div><div class="ac"><div class="time">10:00 AM</div><div class="dr">Dr. Priya Sharma - General Medicine</div><div style="margin-top:8px;font-size:12px;color:#10B981">✓ Confirmed via UPI</div></div></div></div></div></div></section>
<section id="testimonials"><div class="c"><div class="sh"><span class="slb">Success Stories</span><h2>Trusted by 500+ Clinics Across India</h2><p>Real results from real clinic owners who transformed their practice.</p></div><div class="tg"><div class="tc"><div class="th"><div class="ta">RK</div><div class="ti"><h4>Dr. Rajesh Kumar</h4><span>Sharma Dental Clinic, Delhi</span></div></div><div class="ts">★★★★★</div><p class="tt">"We were losing ₹3 lakhs/month to no-shows. VerveMind reduced that by 80%. The Hindi voice bot is incredible — patients love talking to it. Best investment we made."</p><div class="tm"><div class="m"><div class="mv">+45%</div><div class="ml">Appointments</div></div><div class="m"><div class="mv">₹2.1L</div><div class="ml">Saved/Month</div></div></div></div><div class="tc"><div class="th"><div class="ta">SP</div><div class="ti"><h4>Dr. Sunita Patel</h4><span>Patel Eye Care, Mumbai</span></div></div><div class="ts">★★★★★</div><p class="tt">"The patient reactivation feature brought back 200 patients in the first month alone! We hadn't seen some of them in years. Revenue up 35% — without spending a rupee on ads."</p><div class="tm"><div class="m"><div class="mv">+200</div><div class="ml">Patients Reactivated</div></div><div class="m"><div class="mv">35%</div><div class="ml">Revenue Up</div></div></div></div><div class="tc"><div class="th"><div class="ta">AM</div><div class="ti"><h4>Dr. Amit Mehta</h4><span>Mehta Child Care, Bangalore</span></div></div><div class="ts">★★★★★</div><p class="tt">"Parents book via WhatsApp now — it's so easy. UPI payments reduced no-shows dramatically. My front desk finally focuses on patient care, not endless phone calls."</p><div class="tm"><div class="m"><div class="mv">-70%</div><div class="ml">No-Shows</div></div><div class="m"><div class="mv">₹1.5L</div><div class="ml">Extra/Month</div></div></div></div></div></div></section>
<section id="pricing"><div class="c"><div class="sh"><span class="slb">Pricing</span><h2>Simple, Transparent Pricing</h2><p>No hidden fees. No surprises. Choose the plan that fits your clinic.</p></div><div class="prg"><div class="prc"><div class="pci">🌱</div><h3>Starter</h3><div class="pp">₹8,000<span>/mo</span></div><div class="per">Billed annually</div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>AI Voice Receptionist</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>100 appointments/month</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>WhatsApp Integration</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Basic Analytics</li></ul><a href="#contact" class="btn bp">Get Started</a></div><div class="prc f"><div class="pci">🚀</div><h3>Growth</h3><div class="pp">₹18,000<span>/mo</span></div><div class="per">Billed annually</div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Everything in Starter</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>300 appointments/month</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Patient Reactivation</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>UPI Payment Integration</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Advanced Analytics</li></ul><a href="#contact" class="btn bp">Get Started</a></div><div class="prc"><div class="pci">⚡</div><h3>Professional</h3><div class="pp">₹35,000<span>/mo</span></div><div class="per">Billed annually</div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Everything in Growth</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Unlimited appointments</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Multi-branch Support</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Custom Integrations</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Dedicated Account Manager</li></ul><a href="#contact" class="btn bp">Get Started</a></div><div class="prc"><div class="pci">🏥</div><h3>Enterprise</h3><div class="pp">₹75,000<span>/mo</span></div><div class="per">Billed annually</div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Everything in Professional</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Hospital Management API</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Custom AI Training</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>On-premise Deployment</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>24/7 Priority Support</li></ul><a href="#contact" class="btn bp">Get Started</a></div></div><div class="pno">All plans include <strong>14-day free trial</strong> • <strong>No setup fees</strong> • Cancel anytime</div></div></section>
<section id="faq"><div class="c"><div class="sh"><span class="slb">FAQ</span><h2>Frequently Asked Questions</h2><p>Everything you need to know about VerveMind.</p></div><div class="faqg"><div class="fi"><h4>How does the AI voice bot handle Hindi conversations?</h4><p>Our AI is trained on thousands of Hindi and English conversations specific to Indian healthcare. It naturally switches between languages based on patient preference and handles regional accents seamlessly.</p></div><div class="fi"><h4>Can I collect payments via UPI?</h4><p>Yes! Integrate with Razorpay or CCAvenue to collect advance payments via UPI, Google Pay, PhonePe, or any UPI app. This reduces no-shows by up to 70%.</p></div><div class="fi"><h4>What happens during the 14-day free trial?</h4><p>Full access to all features with no limitations. Set up your clinic, train the AI, and see real appointments booked. No credit card required.</p></div><div class="fi"><h4>Is my patient data secure?</h4><p>Absolutely. We're ISO 27001 certified with 256-bit SSL encryption. Patient data is stored in compliance with Indian data protection regulations.</p></div><div class="fi"><h4>Can I integrate with my existing clinic software?</h4><p>Yes! We integrate with Practo, Lybrate, HMS, and most Indian clinic management software. Custom integrations available on Professional and Enterprise plans.</p></div><div class="fi"><h4>How long does setup take?</h4><p>Most clinics are up and running within 24 hours. Our onboarding team guides you through setup, AI training, and WhatsApp integration.</p></div></div></div></section>
<section class="cta"><div class="c"><h2>Ready to Transform Your Clinic?</h2><p>Join 500+ clinics already using VerveMind to fill their appointment books automatically.</p><div class="cb"><a href="#contact" class="btn btn-white">Start Free Trial</a></div></div></section>
<footer><div class="c"><div class="fg"><div class="fb"><div class="logo"><div class="li">V</div>VerveMind India</div><p>AI-powered appointment booking for modern clinics across India. Helping doctors focus on patient care, not paperwork.</p></div><div class="fc"><h5>Product</h5><a href="#solution">Features</a><a href="#pricing">Pricing</a><a href="#testimonials">Success Stories</a><a href="#faq">FAQ</a></div><div class="fc"><h5>Company</h5><a href="#">About Us</a><a href="#">Careers</a><a href="#">Contact</a><a href="#">Blog</a></div><div class="fc"><h5>Legal</h5><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Data Security</a></div></div><div class="fbottom"><div>&copy; 2024 VerveMind India. All rights reserved.</div><div class="upi">💳 Powered by UPI & Indian Payment Gateways</div></div></div></footer>
</body>
</html>
