<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reactivation Blitz - VerveMind</title>
    <meta name="description" content="Reconnect with your past clients and win them back. The ultimate reactivation campaign system.">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root{--p:#F59E0B;--s:#10B981;--a:#EF4444;--d:#1F2937;--g:#6B7280;--l:#FFFBEB;--bg:linear-gradient(135deg,#F59E0B,#EF4444);--sh:0 4px 6px rgba(0,0,0,.1);--sh2:0 20px 25px rgba(0,0,0,.1)}
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:'Plus Jakarta Sans',sans-serif;color:var(--d);line-height:1.6}
        .c{max-width:1200px;margin:0 auto;padding:0 24px}
        nav{position:fixed;top:0;left:0;right:0;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);z-index:1000;padding:16px 0;border-bottom:1px solid rgba(0,0,0,.05)}
        .nc{display:flex;justify-content:space-between;align-items:center}
        .logo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:24px;color:var(--p)}
        .li{width:40px;height:40px;background:var(--bg);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700}
        .nk{display:flex;gap:32px;align-items:center}
        .nk a{color:var(--g);text-decoration:none;font-weight:500}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:12px;font-weight:600;font-size:16px;text-decoration:none;transition:.2s;cursor:pointer;border:none}
        .bp{background:var(--bg);color:#fff;box-shadow:0 4px 14px rgba(245,158,11,.4)}
        .bp:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(245,158,11,.5)}
        .hero{padding:160px 0 100px;background:linear-gradient(180deg,#FEF3C7,#fff);position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-50%;right:-20%;width:800px;height:800px;background:radial-gradient(circle,rgba(245,158,11,.1),transparent 70%);border-radius:50%}
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
        .slb{display:inline-block;padding:8px 16px;background:rgba(245,158,11,.1);color:var(--p);border-radius:20px;font-weight:600;font-size:14px;margin-bottom:16px}
        .sh h2{font-size:40px;font-weight:700;margin-bottom:16px}
        .sh p{font-size:18px;color:var(--g)}
        #what{background:var(--l)}
        .wg{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
        .wc{padding:32px;background:#fff;border-radius:20px;text-align:center;box-shadow:var(--sh)}
        .wi{width:64px;height:64px;background:var(--l);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:28px}
        .wc h3{font-size:18px;margin-bottom:12px}
        .wc p{color:var(--g);font-size:14px}
        #how{background:#fff}
        .hg{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;position:relative}
        .hc2{text-align:center;position:relative}
        .hc2::after{content:'→';position:absolute;right:-24px;top:30px;font-size:24px;color:var(--p)}
        .hc2:last-child::after{display:none}
        .hn{width:80px;height:80px;background:var(--bg);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:32px;color:#fff;font-weight:700}
        .hc2 h4{font-size:16px;margin-bottom:8px}
        .hc2 p{font-size:13px;color:var(--g)}
        #pricing{background:var(--l)}
        .pg{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:900px;margin:0 auto}
        .pc{padding:40px;background:#fff;border-radius:24px;text-align:center;box-shadow:var(--sh);position:relative}
        .pc.f{border:3px solid var(--p);transform:scale(1.05)}
        .pc.f::before{content:'Best Value';position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--bg);color:#fff;padding:6px 20px;border-radius:20px;font-size:12px;font-weight:700}
        .pp{font-size:48px;font-weight:800;color:var(--d);margin:20px 0}
        .pp span{font-size:18px;color:var(--g)}
        .pfl{text-align:left;margin:30px 0}
        .pfl li{list-style:none;padding:12px 0;border-bottom:1px solid #eee;display:flex;align-items:center;gap:12px}
        .pfl li svg{width:20px;height:20px;color:var(--s)}
        .cta{background:var(--bg);text-align:center;color:#fff;padding:100px 0}
        .cta h2{font-size:48px;margin-bottom:16px}
        .cta p{font-size:20px;opacity:.9;max-width:600px;margin:0 auto 40px}
        .cta .btn-white{padding:16px 40px;font-size:18px;background:#fff;color:var(--p);border-radius:12px;font-weight:600;text-decoration:none;display:inline-block}
        footer{background:#1F2937;color:#fff;padding:60px 0 30px}
        .fg{display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px}
        .fb p{color:#9CA3AF;margin:16px 0;font-size:14px}
        .fc h5{font-size:14px;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;color:#9CA3AF}
        .fc a{display:block;color:#9CA3AF;text-decoration:none;padding:8px 0;font-size:14px}
        .fbottom{padding-top:30px;border-top:1px solid rgba(255,255,255,.1);text-align:center;font-size:14px;color:#9CA3AF}
        @media(max-width:1024px){.hc{grid-template-columns:1fr}.wg{grid-template-columns:repeat(2,1fr)}.hg{grid-template-columns:repeat(3,1fr)}.pg{grid-template-columns:1fr}}
        @media(max-width:768px){.hero h1{font-size:40px}.nk{display:none}.wg,.hg{grid-template-columns:1fr}.cta h2{font-size:32px}}
    </style>
</head>
<body>
<nav><div class="c nc"><div class="logo"><div class="li">⚡</div>Reactivation Blitz</div><div class="nk"><a href="#what">What It Is</a><a href="#how">How It Works</a><a href="#pricing">Pricing</a><a href="https://vervemindai.com" class="btn bp">Back to Main Site</a></div></div></nav>
<section class="hero"><div class="c hc"><div><h1>Win Back Your <span>Lost Customers</span></h1><p>The complete system to reactivate past clients, re-engage cold leads, and turn "gone" customers into repeat buyers.</p><div class="hs"><div class="st"><div class="sv">73%</div><div class="sl">Average Recovery Rate</div></div><div class="st"><div class="sv">3.2x</div><div class="sl">ROI on Campaign</div></div><div class="st"><div class="sv">14 Days</div><div class="sl">To First Results</div></div></div></div></div></section>
<section id="what"><div class="c"><div class="sh"><span class="slb">What It Is</span><h2>Your Customer Recovery Engine</h2><p>A systematic approach to bringing back customers who once loved your business.</p></div><div class="wg"><div class="wc"><div class="wi">🔍</div><h3>Identify</h3><p>We find your dormant customers, lapsed subscribers, and past clients who haven't purchased in 90+ days.</p></div><div class="wc"><div class="wi">✉️</div><h3>Reach Out</h3><p>Multi-channel campaigns: email, SMS, WhatsApp, and voice — personalized to each segment.</p></div><div class="wc"><div class="wi">🎁</div><h3>Win Back</h3><p>Special offers, exclusive deals, and personalized incentives designed to convert.</p></div><div class="wc"><div class="wi">💎</div><h3>Retain</h3><p>Automated follow-ups and loyalty programs to keep them coming back.</p></div></div></div></section>
<section id="how"><div class="c"><div class="sh"><span class="slb">How It Works</span><h2>5 Steps to Recovery</h2><p>A proven process that works for any business.</p></div><div class="hg"><div class="hc2"><div class="hn">1</div><h4>Audit</h4><p>We analyze your customer database</p></div><div class="hc2"><div class="hn">2</div><h4>Segment</h4><p>Group by purchase history & behavior</p></div><div class="hc2"><div class="hn">3</div><h4>Create</h4><p>Build personalized campaigns</p></div><div class="hc2"><div class="hn">4</div><h4>Launch</h4><p>Deploy across all channels</p></div><div class="hc2"><div class="hn">5</div><h4>Scale</h4><p>Optimize based on results</p></div></div></div></section>
<section id="pricing"><div class="c"><div class="sh"><span class="slb">Pricing</span><h2>Simple, Performance-Based Pricing</h2><p>Pay for results, not promises.</p></div><div class="pg"><div class="pc"><h3>Starter</h3><div class="pp">₹15,000<span>/mo</span></div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Up to 1,000 contacts</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Email + SMS campaigns</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Basic segmentation</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Weekly reports</li></ul><a href="#" class="btn bp">Get Started</a></div><div class="pc f"><h3>Growth</h3><div class="pp">₹35,000<span>/mo</span></div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Up to 10,000 contacts</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>All channels included</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>AI-powered personalization</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Daily reports + calls</li></ul><a href="#" class="btn bp">Get Started</a></div><div class="pc"><h3>Enterprise</h3><div class="pp">₹75,000<span>/mo</span></div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Unlimited contacts</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Dedicated account manager</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Custom integrations</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Priority support</li></ul><a href="#" class="btn bp">Get Started</a></div></div></div></section>
<section class="cta"><div class="c"><h2>Ready to Win Them Back?</h2><p>Don't let another customer slip away. Start your reactivation campaign today.</p><a href="#" class="btn btn-white">Start Your Campaign</a></p></div></section>
<footer><div class="c"><div class="fg"><div class="fb"><div class="logo"><div class="li">⚡</div>Reactivation Blitz</div><p>A VerveMind product. The smartest way to recover lost revenue.</p></div><div class="fc"><h5>Product</h5><a href="#what">Features</a><a href="#pricing">Pricing</a><a href="https://vervemindai.com">Main Site</a></div><div class="fc"><h5>Company</h5><a href="#">About</a><a href="#">Contact</a></div></div><div class="fbottom">&copy; 2024 Reactivation Blitz. All rights reserved.</div></div></footer>
</body>
</html>
