export default function SEOPage() {
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,background:'rgba(255,255,255,.95)',backdropFilter:'blur(10px)',zIndex:1000,padding:'16px 0',borderBottom:'1px solid rgba(0,0,0,.05)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#10B981'}}>
            <div style={{width:40,height:40,background:'linear-gradient(135deg,#10B981,#3B82F6)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>🔍</div>
            Local SEO Magic
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            <a href="#services" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Services</a>
            <a href="#results" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Results</a>
            <a href="#pricing" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Pricing</a>
            <a href="https://vervemindai.com" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#10B981,#3B82F6)',color:'#fff',boxShadow:'0 4px 14px rgba(16,185,129,.4)'}}>Back to Main Site</a>
          </div>
        </div>
      </nav>
      <section style={{padding:'160px 0 100px',background:'linear-gradient(180deg,#D1FAE5,#fff)',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <h1 style={{fontSize:56,fontWeight:800,lineHeight:1.1,marginBottom:24,color:'#10B981'}}>Be Found By Local Customers</h1>
          <p style={{fontSize:20,color:'#6B7280',marginBottom:32,maxWidth:500}}>Dominate Google Maps, local search results, and attract customers in your area searching for your services right now.</p>
          <div style={{display:'flex',gap:40,marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,.1)'}}>
            <div><div style={{fontSize:36,fontWeight:800,color:'#10B981'}}>200%</div><div style={{fontSize:14,color:'#6B7280'}}>More Local Leads</div></div>
            <div><div style={{fontSize:36,fontWeight:800,color:'#10B981'}}>#1</div><div style={{fontSize:14,color:'#6B7280'}}>Google Ranking</div></div>
            <div><div style={{fontSize:36,fontWeight:800,color:'#10B981'}}>24/7</div><div style={{fontSize:14,color:'#6B7280'}}>Visibility</div></div>
          </div>
        </div>
      </section>
      <section id="services" style={{padding:'100px 0',background:'#ECFDF5'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(16,185,129,.1)',color:'#10B981',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Services</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Complete Local SEO</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>Everything you need to dominate local search.</p>
        </div>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
          {[
            {icon:'📍',title:'Google Business Profile',desc:'Optimized profile that ranks higher and converts more clicks into customers.'},
            {icon:'⭐',title:'Review Management',desc:'Build 5-star reviews with automated request systems and response strategies.'},
            {icon:'📝',title:'Local Content',desc:'SEO-optimized content that targets your local keywords and service areas.'},
            {icon:'🔗',title:'Local Backlinks',desc:'Build authority with relevant local citations and backlink opportunities.'},
            {icon:'📊',title:'Analytics Dashboard',desc:'Track rankings, calls, and conversions with detailed reporting.'},
            {icon:'📱',title:'Mobile Optimization',desc:'Fast, mobile-friendly websites that convert local traffic.'},
          ].map((f,i)=>(
            <div key={i} style={{padding:32,background:'#fff',borderRadius:20,boxShadow:'0 4px 6px rgba(0,0,0,.1)'}}>
              <div style={{width:64,height:64,background:'#ECFDF5',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28}}>{f.icon}</div>
              <h3 style={{fontSize:20,marginBottom:12,textAlign:'center'}}>{f.title}</h3>
              <p style={{color:'#6B7280',fontSize:15,textAlign:'center'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="pricing" style={{padding:'100px 0',background:'#ECFDF5'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(16,185,129,.1)',color:'#10B981',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Pricing</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Simple Local SEO Packages</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>One price, everything included.</p>
        </div>
        <div style={{maxWidth:900,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
          {[
            {name:'Starter',price:'₹12,000',features:['Google Business Profile','Basic optimization','Monthly reports','5 keyword tracking']},
            {name:'Growth',price:'₹25,000',features:['Everything in Starter','Local content creation','Review management','20 keyword tracking'],popular:true},
            {name:'Enterprise',price:'₹50,000',features:['Everything in Growth','Website SEO audit','Competitor analysis','Unlimited keywords']},
          ].map((p,i)=>(
            <div key={i} style={{padding:40,background:'#fff',borderRadius:24,textAlign:'center',boxShadow:'0 4px 6px rgba(0,0,0,.1)',position:'relative',transform:p.popular?'scale(1.05)':'scale(1)',border:p.popular?'3px solid #10B981':'none'}}>
              {p.popular && <div style={{position:'absolute',top:-14,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#10B981,#3B82F6)',color:'#fff',padding:'6px 20px',borderRadius:20,fontSize:12,fontWeight:700}}>Most Popular</div>}
              <h3 style={{fontSize:24,marginBottom:20}}>{p.name}</h3>
              <div style={{fontSize:48,fontWeight:800,color:'#1F2937',marginBottom:20}}>{p.price}<span style={{fontSize:18,color:'#6B7280'}}>/mo</span></div>
              <ul style={{textAlign:'left',margin:'30px 0'}}>
                {p.features.map((f,j)=>(
                  <li key={j} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 0',borderBottom:'1px solid #eee',listStyle:'none'}}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#3B82F6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#10B981,#3B82F6)',color:'#fff',width:'100%'}}>Get Started</a>
            </div>
          ))}
        </div>
      </section>
      <footer style={{background:'#1F2937',color:'#fff',padding:'60px 0 30px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40,marginBottom:40}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#10B981',marginBottom:16}}>
                <div style={{width:40,height:40,background:'linear-gradient(135deg,#10B981,#3B82F6)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>🔍</div>
                Local SEO Magic
              </div>
              <p style={{color:'#9CA3AF',fontSize:14}}>A VerveMind product. Dominate local search and grow your business.</p>
            </div>
          </div>
          <div style={{paddingTop:30,borderTop:'1px solid rgba(255,255,255,.1)',textAlign:'center',fontSize:14,color:'#9CA3AF'}}>© 2024 Local SEO Magic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
