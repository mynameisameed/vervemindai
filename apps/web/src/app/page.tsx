<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VerveMind - AI-Powered Business Solutions</title>
    <meta name="description" content="Transform your business with AI-powered solutions. Voice AI, automation, and more.">
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
        section{padding:100px 0}
        .sh{text-align:center;max-width:700px;margin:0 auto 60px}
        .slb{display:inline-block;padding:8px 16px;background:rgba(99,102,241,.1);color:var(--p);border-radius:20px;font-weight:600;font-size:14px;margin-bottom:16px}
        .sh h2{font-size:40px;font-weight:700;margin-bottom:16px}
        .sh p{font-size:18px;color:var(--g)}
        #features{background:var(--l)}
        .fg{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
        .fc{padding:32px;background:#fff;border-radius:20px;text-align:center;transition:.3s;box-shadow:var(--sh)}
        .fc:hover{transform:translateY(-8px)}
        .fi{width:72px;height:72px;background:var(--l);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:32px}
        .fc h3{font-size:20px;margin-bottom:12px}
        .fc p{color:var(--g);font-size:15px}
        #solutions{background:var(--bg);color:#fff}
        #solutions .sh h2,#solutions .sh p{color:#fff}
        #solutions .slb{background:rgba(255,255,255,.2);color:#fff}
        .sg{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
        .sf{display:flex;flex-direction:column;gap:24px}
        .sft{display:flex;gap:20px;padding:24px;background:rgba(255,255,255,.1);border-radius:16px}
        .fi2{width:48px;height:48px;background:#fff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0}
        .sft h4{font-size:18px;margin-bottom:8px}
        .sft p{font-size:14px;opacity:.9}
        .cta{background:var(--bg);text-align:center;color:#fff;padding:100px 0}
        .cta h2{font-size:48px;margin-bottom:16px}
        .cta p{font-size:20px;opacity:.9;max-width:600px;margin:0 auto 40px}
        .cb{display:flex;gap:16px;justify-content:center}
        .cta .btn-white{padding:16px 40px;font-size:18px;background:#fff;color:var(--p);border-radius:12px;font-weight:600;text-decoration:none;display:inline-block}
        .cta .btn-white:hover{transform:translateY(-2px);box-shadow:var(--sh2)}
        footer{background:#1F2937;color:#fff;padding:60px 0 30px}
        .fg{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
        .fb p{color:#9CA3AF;margin:16px 0;font-size:14px}
        .fc h5{font-size:14px;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;color:#9CA3AF}
        .fc a{display:block;color:#9CA3AF;text-decoration:none;padding:8px 0;font-size:14px}
        .fc a:hover{color:#fff}
        .fbottom{padding-top:30px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#9CA3AF}
        @media(max-width:1024px){.hc{grid-template-columns:1fr}.fg,.sg{grid-template-columns:1fr}.fg{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:768px){.hero h1{font-size:40px}.nk{display:none}.fg{grid-template-columns:1fr}.cta h2{font-size:32px}.cb{flex-direction:column}.fg{grid-template-columns:1fr}.fbottom{flex-direction:column;gap:16px;text-align:center}}
    </style>
</head>
<body>
<nav><div class="c nc"><div class="logo"><div class="li">V</div>VerveMind</div><div class="nk"><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#pricing">Pricing</a><a href="https://blitz.vervemindai.com">Blitz</a><a href="https://seo.vervemindai.com">SEO</a><a href="https://voice.vervemindai.com">Voice AI</a><a href="#contact" class="btn bp">Get Started</a></div></div></nav>
<section class="hero"><div class="c hc"><div><h1>AI That <span>Gets Things Done</span></h1><p>Intelligent automation for modern businesses. From voice assistants to lead generation — we build AI that works.</p><div class="hs"><div class="st"><div class="sv">200+</div><div class="sl">Businesses Served</div></div><div class="st"><div class="sv">$2M+</div><div class="sl">Revenue Generated</div></div><div class="st"><div class="sv">10K+</div><div class="sl">Leads Captured</div></div></div></div><div></div></div></section>
<section id="features"><div class="c"><div class="sh"><span class="slb">Features</span><h2>Powerful AI Tools</h2><p>Everything you need to automate and scale your business.</p></div><div class="fg"><div class="fc"><div class="fi">🤖</div><h3>Voice AI</h3><p>Intelligent voice assistants that handle calls, bookings, and customer inquiries 24/7.</p></div><div class="fc"><div class="fi">⚡</div><h3>Automation</h3><p>Automate repetitive tasks, follow-ups, and workflows to save time and reduce errors.</p></div><div class="fc"><div class="fi">📊</div><h3>Analytics</h3><p>Real-time insights into your business performance with actionable recommendations.</p></div><div class="fc"><div class="fi">💬</div><h3>Chatbots</h3><p>AI-powered chatbots that engage visitors and convert them into leads.</p></div><div class="fc"><div class="fi">🔗</div><h3>Integrations</h3><p>Connect with your existing tools: CRM, email, calendar, and more.</p></div><div class="fc"><div class="fi">🛡️</div><h3>Security</h3><p>Enterprise-grade security with data encryption and compliance.</p></div></div></div></section>
<section id="solutions"><div class="c"><div class="sh"><span class="slb">Solutions</span><h2>Industry-Specific AI</h2><p>Tailored solutions for different business needs.</p></div><div class="sg"><div class="sf"><div class="sft"><div class="fi2">🏥</div><div><h4>Healthcare</h4><p>AI receptionists for clinics, appointment booking, patient follow-ups.</p></div></div><div class="sft"><div class="fi2">🏢</div><div><h4>Real Estate</h4><p>Lead qualification, property showings, automated follow-ups.</p></div></div><div class="sft"><div class="fi2">🍽️</div><div><h4>Restaurants</h4><p>Table reservations, orders, delivery coordination.</p></div></div><div class="sft"><div class="fi2">🛒</div><div><h4>Retail</h4><p>Inventory management, customer support, upselling.</p></div></div></div><div></div></div></section>
<section class="cta" id="contact"><div class="c"><h2>Ready to Transform Your Business?</h2><p>Get started with AI that actually works for you.</p><div class="cb"><a href="#" class="btn btn-white">Start Free Trial</a></div></div></section>
<footer><div class="c"><div class="fg"><div class="fb"><div class="logo"><div class="li">V</div>VerveMind</div><p>AI-powered solutions for modern businesses. Helping companies grow with intelligent automation.</p></div><div class="fc"><h5>Product</h5><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#pricing">Pricing</a><a href="https://voice.vervemindai.com">Voice AI</a></div><div class="fc"><h5>Company</h5><a href="#">About</a><a href="#">Contact</a><a href="#">Careers</a></div><div class="fc"><h5>Legal</h5><a href="#">Privacy</a><a href="#">Terms</a></div></div><div class="fbottom"><div>&copy; 2024 VerveMind. All rights reserved.</div></div></div></footer>
</body>
</html>
