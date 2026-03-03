export default function HomePage() {
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,background:'rgba(255,255,255,.95)',backdropFilter:'blur(10px)',zIndex:1000,padding:'16px 0',borderBottom:'1px solid rgba(0,0,0,.05)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#6366F1'}}>
            <div style={{width:40,height:40,background:'linear-gradient(135deg,#6366F1,#8B5CF6)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>V</div>
            VerveMind
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            <a href="#features" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Features</a>
            <a href="#solutions" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Solutions</a>
            <a href="https://blitz.vervemindai.com" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Blitz</a>
            <a href="https://seo.vervemindai.com" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>SEO</a>
            <a href="https://voice.vervemindai.com" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Voice AI</a>
            <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#6366F1,#8B5CF6)',color:'#fff',boxShadow:'0 4px 14px rgba(99,102,241,.4)'}}>Get Started</a>
          </div>
        </div>
      </nav>
      <section style={{padding:'160px 0 100px',background:'linear-gradient(180deg,#F0F1FF,#fff)',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
          <div>
            <h1 style={{fontSize:56,fontWeight:800,lineHeight:1.1,marginBottom:24,color:'#6366F1'}}>AI That Gets Things Done</h1>
            <p style={{fontSize:20,color:'#6B7280',marginBottom:32,maxWidth:500}}>Intelligent automation for modern businesses. From voice assistants to lead generation — we build AI that works.</p>
            <div style={{display:'flex',gap:40,marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,.1)'}}>
              <div><div style={{fontSize:36,fontWeight:800,color:'#6366F1'}}>200+</div><div style={{fontSize:14,color:'#6B7280'}}>Businesses Served</div></div>
              <div><div style={{fontSize:36,fontWeight:800,color:'#6366F1'}}>$2M+</div><div style={{fontSize:14,color:'#6B7280'}}>Revenue Generated</div></div>
              <div><div style={{fontSize:36,fontWeight:800,color:'#6366F1'}}>10K+</div><div style={{fontSize:14,color:'#6B7280'}}>Leads Captured</div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" style={{padding:'100px 0',background:'#F9FAFB'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(99,102,241,.1)',color:'#6366F1',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Features</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Powerful AI Tools</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>Everything you need to automate and scale your business.</p>
        </div>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
          {[
            {icon:'🤖',title:'Voice AI',desc:'Intelligent voice assistants that handle calls, bookings, and customer inquiries 24/7.'},
            {icon:'⚡',title:'Automation',desc:'Automate repetitive tasks, follow-ups, and workflows to save time and reduce errors.'},
            {icon:'📊',title:'Analytics',desc:'Real-time insights into your business performance with actionable recommendations.'},
            {icon:'💬',title:'Chatbots',desc:'AI-powered chatbots that engage visitors and convert them into leads.'},
            {icon:'🔗',title:'Integrations',desc:'Connect with your existing tools: CRM, email, calendar, and more.'},
            {icon:'🛡️',title:'Security',desc:'Enterprise-grade security with data encryption and compliance.'},
          ].map((f,i)=>(
            <div key={i} style={{padding:32,background:'#fff',borderRadius:20,textAlign:'center',boxShadow:'0 4px 6px rgba(0,0,0,.1)'}}>
              <div style={{width:72,height:72,background:'#F9FAFB',borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:32}}>{f.icon}</div>
              <h3 style={{fontSize:20,marginBottom:12}}>{f.title}</h3>
              <p style={{color:'#6B7280',fontSize:15}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer style={{background:'#1F2937',color:'#fff',padding:'60px 0 30px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:40,marginBottom:40}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#6366F1',marginBottom:16}}>
                <div style={{width:40,height:40,background:'linear-gradient(135deg,#6366F1,#8B5CF6)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>V</div>
                VerveMind
              </div>
              <p style={{color:'#9CA3AF',fontSize:14}}>AI-powered solutions for modern businesses.</p>
            </div>
          </div>
          <div style={{paddingTop:30,borderTop:'1px solid rgba(255,255,255,.1)',textAlign:'center',fontSize:14,color:'#9CA3AF'}}>© 2024 VerveMind. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
