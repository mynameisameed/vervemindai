<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local SEO Magic - VerveMind</title>
    <meta name="description" content="Dominate local search results. Get found by customers in your area.">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root{--p:#10B981;--s:#3B82F6;--d:#1F2937;--g:#6B7280;--l:#ECFDF5;--bg:linear-gradient(135deg,#10B981,#3B82F6);--sh:0 4px 6px rgba(0,0,0,.1);--sh2:0 20px 25px rgba(0,0,0,.1)}
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
        .bp{background:var(--bg);color:#fff;box-shadow:0 4px 14px rgba(16,185,129,.4)}
        .bp:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(16,185,129,.5)}
        .hero{padding:160px 0 100px;background:linear-gradient(180deg,#D1FAE5,#fff);position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;top:-50%;right:-20%;width:800px;height:800px;background:radial-gradient(circle,rgba(16,185,129,.1),transparent 70%);border-radius:50%}
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
        .slb{display:inline-block;padding:8px 16px;background:rgba(16,185,129,.1);color:var(--p);border-radius:20px;font-weight:600;font-size:14px;margin-bottom:16px}
        .sh h2{font-size:40px;font-weight:700;margin-bottom:16px}
        .sh p{font-size:18px;color:var(--g)}
        #services{background:var(--l)}
        .sg{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
        .sc{padding:32px;background:#fff;border-radius:20px;box-shadow:var(--sh)}
        .si{width:64px;height:64px;background:var(--l);border-radius:16px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:28px}
        .sc h3{font-size:20px;margin-bottom:12px;text-align:center}
        .sc p{color:var(--g);font-size:15px;text-align:center}
        #results{background:#fff}
        .rg{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;text-align:center}
        .rc{padding:32px;border-radius:20px;background:var(--l)}
        .rv{font-size:48px;font-weight:800;color:var(--p)}
        .rl{font-size:14px;color:var(--g);margin-top:8px}
        #pricing{background:var(--l)}
        .pg{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:900px;margin:0 auto}
        .pc{padding:40px;background:#fff;border-radius:24px;text-align:center;box-shadow:var(--sh)}
        .pc.f{border:3px solid var(--p);transform:scale(1.05)}
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
        @media(max-width:1024px){.hc{grid-template-columns:1fr}.sg,.rg,.pg{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:768px){.hero h1{font-size:40px}.nk{display:none}.sg,.rg,.pg{grid-template-columns:1fr}.cta h2{font-size:32px}}
    </style>
</head>
<body>
<nav><div class="c nc"><div class="logo"><div class="li">🔍</div>Local SEO Magic</div><div class="nk"><a href="#services">Services</a><a href="#results">Results</a><a href="#pricing">Pricing</a><a href="https://vervemindai.com" class="btn bp">Back to Main Site</a></div></div></nav>
<section class="hero"><div class="c hc"><div><h1>Be Found By <span>Local Customers</span></h1><p>Dominate Google Maps, local search results, and attract customers in your area searching for your services right now.</p><div class="hs"><div class="st"><div class="sv">200%</div><div class="sl">More Local Leads</div></div><div class="st"><div class="sv">#1</div><div class="sl">Google Ranking</div></div><div class="st"><div class="sv">24/7</div><div class="sl">Visibility</div></div></div></div></div></section>
<section id="services"><div class="c"><div class="sh"><span class="slb">Services</span><h2>Complete Local SEO</h2><p>Everything you need to dominate local search.</p></div><div class="sg"><div class="sc"><div class="si">📍</div><h3>Google Business Profile</h3><p>Optimized profile that ranks higher and converts more clicks into customers.</p></div><div class="sc"><div class="si">⭐</div><h3>Review Management</h3><p>Build 5-star reviews with automated request systems and response strategies.</p></div><div class="sc"><div class="si">📝</div><h3>Local Content</h3><p>SEO-optimized content that targets your local keywords and service areas.</p></div><div class="sc"><div class="si">🔗</div><h3>Local Backlinks</h3><p>Build authority with relevant local citations and backlink opportunities.</p></div><div class="sc"><div class="si">📊</div><h3>Analytics Dashboard</h3><p>Track rankings, calls, and conversions with detailed reporting.</p></div><div class="sc"><div class="si">📱</div><h3>Mobile Optimization</h3><p>Fast, mobile-friendly websites that convert local traffic.</p></div></div></div></section>
<section id="results"><div class="c"><div class="sh"><span class="slb">Results</span><h2>What You'll Get</h2><p>Real results from real local businesses.</p></div><div class="rg"><div class="rc"><div class="rv">#1-3</div><div class="rl">Google Maps Ranking</div></div><div class="rc"><div class="rv">+200%</div><div class="rl">More Phone Calls</div></div><div class="rc"><div class="rv">+150%</div><div class="rl">Website Visits</div></div><div class="rc"><div class="rv">5x</div><div class="rl">ROI in 6 Months</div></div></div></div></section>
<section id="pricing"><div class="c"><div class="sh"><span class="slb">Pricing</span><h2>Simple Local SEO Packages</h2><p>One price, everything included.</p></div><div class="pg"><div class="pc"><h3>Starter</h3><div class="pp">₹12,000<span>/mo</span></div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Google Business Profile</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Basic optimization</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Monthly reports</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>5 keyword tracking</li></ul><a href="#" class="btn bp">Get Started</a></div><div class="pc f"><h3>Growth</h3><div class="pp">₹25,000<span>/mo</span></div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Everything in Starter</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Local content creation</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Review management</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>20 keyword tracking</li></ul><a href="#" class="btn bp">Get Started</a></div><div class="pc"><h3>Enterprise</h3><div class="pp">₹50,000<span>/mo</span></div><ul class="pfl"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Everything in Growth</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Website SEO audit</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Competitor analysis</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Unlimited keywords</li></ul><a href="#" class="btn bp">Get Started</a></div></div></div></section>
<section class="cta"><div class="c"><h2>Start Dominating Local Search</h2><p>Get found by customers in your area today.</p><a href="#" class="btn btn-white">Claim Your Free Audit</a></div></section>
<footer><div class="c"><div class="fg"><div class="fb"><div class="logo"><div class="li">🔍</div>Local SEO Magic</div><p>A VerveMind product. Dominate local search and grow your business.</p></div><div class="fc"><h5>Product</h5><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="https://vervemindai.com">Main Site</a></div><div class="fc"><h5>Company</h5><a href="#">About</a><a href="#">Contact</a></div></div><div class="fbottom">&copy; 2024 Local SEO Magic. All rights reserved.</div></div></footer>
</body>
</html>
