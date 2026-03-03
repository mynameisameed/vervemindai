export default function VoicePage() {
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,background:'rgba(255,255,255,.95)',backdropFilter:'blur(10px)',zIndex:1000,padding:'16px 0',borderBottom:'1px solid rgba(0,0,0,.05)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#8B5CF6'}}>
            <div style={{width:40,height:40,background:'linear-gradient(135deg,#8B5CF6,#EC4899)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>🎙️</div>
            Voice AI
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            <a href="#features" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Features</a>
            <a href="#demo" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Demo</a>
            <a href="#pricing" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Pricing</a>
            <a href="https://vervemindai.com" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#8B5CF6,#EC4899)',color:'#fff',boxShadow:'0 4px 14px rgba(139,92,246,.4)'}}>Back to Main Site</a>
          </div>
        </div>
      </nav>
      <section style={{padding:'160px 0 100px',background:'linear-gradient(180deg,#F3E8FF,#fff)',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <h1 style={{fontSize:56,fontWeight:800,lineHeight:1.1,marginBottom:24,color:'#8B5CF6'}}>Your AI Voice Assistant That Actually Works</h1>
          <p style={{fontSize:20,color:'#6B7280',marginBottom:32,maxWidth:600}}>Natural conversations, 24/7 availability, and seamless integrations. Build the perfect voice AI for your business.</p>
          <div style={{display:'flex',gap:40,marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,.1)'}}>
            <div><div style={{fontSize:36,fontWeight:800,color:'#8B5CF6'}}>50+</div><div style={{fontSize:14,color:'#6B7280'}}>Languages Supported</div></div>
            <div><div style={{fontSize:36,fontWeight:800,color:'#8B5CF6'}}>99.9%</div><div style={{fontSize:14,color:'#6B7280'}}>Uptime SLA</div></div>
            <div><div style={{fontSize:36,fontWeight:800,color:'#8B5CF6'}}>24/7</div><div style={{fontSize:14,color:'#6B7280'}}>Availability</div></div>
          </div>
        </div>
      </section>
      <section id="features" style={{padding:'100px 0',background:'#F9FAFB'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(139,92,246,.1)',color:'#8B5CF6',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Features</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Powerful Voice AI Capabilities</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>Everything you need to build world-class voice experiences.</p>
        </div>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
          {[
            {icon:'🗣️',title:'Natural Conversations',desc:'Advanced NLP for human-like dialogue that understands context and intent.'},
            {icon:'🔗',title:'Easy Integration',desc:'Connect to your existing systems via API, webhooks, or SDKs.'},
            {icon:'📞',title:'Phone Integration',desc:'Handle inbound and outbound calls seamlessly with PSTN connectivity.'},
            {icon:'🧠',title:'Custom Training',desc:'Train on your own data for industry-specific responses.'},
            {icon:'📊',title:'Analytics',desc:'Track conversations, sentiment, and performance metrics.'},
            {icon:'🔒',title:'Enterprise Security',desc:'SOC 2 compliant with end-to-end encryption.'},
          ].map((f,i)=>(
            <div key={i} style={{padding:32,background:'#fff',borderRadius:20,boxShadow:'0 4px 6px rgba(0,0,0,.1)'}}>
              <div style={{width:72,height:72,background:'#F3E8FF',borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:32}}>{f.icon}</div>
              <h3 style={{fontSize:20,marginBottom:12,textAlign:'center'}}>{f.title}</h3>
              <p style={{color:'#6B7280',fontSize:15,textAlign:'center'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="demo" style={{padding:'100px 0',background:'#fff'}}>
        <div style={{maxWidth:800,margin:'0 auto',padding:'0 24px',textAlign:'center'}}>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Try It Now</h2>
          <p style={{fontSize:18,color:'#6B7280',marginBottom:40}}>Experience our voice AI in action. Start a conversation below.</p>
          <div style={{background:'#F3E8FF',padding:60,borderRadius:24,minHeight:300,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <div style={{fontSize:64,marginBottom:20}}>🎙️</div>
            <p style={{color:'#6B7280',fontSize:18}}>Voice AI Demo Coming Soon</p>
            <p style={{color:'#9CA3AF',marginTop:12}}>Contact us to schedule a personalized demo</p>
          </div>
        </div>
      </section>
      <section id="pricing" style={{padding:'100px 0',background:'#F9FAFB'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(139,92,246,.1)',color:'#8B5CF6',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Pricing</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Simple, Usage-Based Pricing</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>Pay only for what you use. No hidden fees.</p>
        </div>
        <div style={{maxWidth:900,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
          {[
            {name:'Starter',price:'₹5,000',features:['1,000 minutes/month','Basic NLP','Email support','Standard voice options']},
            {name:'Growth',price:'₹15,000',features:['5,000 minutes/month','Advanced NLP','Priority support','Custom voice','API access'],popular:true},
            {name:'Enterprise',price:'Custom',features:['Unlimited minutes','Custom training','Dedicated support','Custom integrations','SLA guarantee']},
          ].map((p,i)=>(
            <div key={i} style={{padding:40,background:'#fff',borderRadius:24,textAlign:'center',boxShadow:'0 4px 6px rgba(0,0,0,.1)',position:'relative',transform:p.popular?'scale(1.05)':'scale(1)',border:p.popular?'3px solid #8B5CF6':'none'}}>
              {p.popular && <div style={{position:'absolute',top:-14,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#8B5CF6,#EC4899)',color:'#fff',padding:'6px 20px',borderRadius:20,fontSize:12,fontWeight:700}}>Most Popular</div>}
              <h3 style={{fontSize:24,marginBottom:20}}>{p.name}</h3>
              <div style={{fontSize:48,fontWeight:800,color:'#1F2937',marginBottom:20}}>{p.price}<span style={{fontSize:18,color:'#6B7280'}}>{p.price === 'Custom' ? '' : '/mo'}</span></div>
              <ul style={{textAlign:'left',margin:'30px 0'}}>
                {p.features.map((f,j)=>(
                  <li key={j} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 0',borderBottom:'1px solid #eee',listStyle:'none'}}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#8B5CF6" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:p.popular?'linear-gradient(135deg,#8B5CF6,#EC4899)':'#F3E8FF',color:p.popular?'#fff':'#8B5CF6',width:'100%'}}>Get Started</a>
            </div>
          ))}
        </div>
      </section>
      <footer style={{background:'#1F2937',color:'#fff',padding:'60px 0 30px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40,marginBottom:40}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#8B5CF6',marginBottom:16}}>
                <div style={{width:40,height:40,background:'linear-gradient(135deg,#8B5CF6,#EC4899)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>🎙️</div>
                Voice AI
              </div>
              <p style={{color:'#9CA3AF',fontSize:14}}>A VerveMind product. Intelligent voice solutions for modern businesses.</p>
            </div>
          </div>
          <div style={{paddingTop:30,borderTop:'1px solid rgba(255,255,255,.1)',textAlign:'center',fontSize:14,color:'#9CA3AF'}}>© 2024 Voice AI. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
