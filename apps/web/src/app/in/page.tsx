export default function IndiaPage() {
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,background:'rgba(255,255,255,.95)',backdropFilter:'blur(10px)',zIndex:1000,padding:'16px 0',borderBottom:'1px solid rgba(0,0,0,.05)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#6366F1'}}>
            <div style={{width:40,height:40,background:'linear-gradient(135deg,#6366F1,#8B5CF6)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>V</div>
            VerveMind India
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            <a href="#problem" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Problems</a>
            <a href="#solution" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Solution</a>
            <a href="#pricing" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Pricing</a>
            <a href="#faq" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>FAQ</a>
            <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#6366F1,#8B5CF6)',color:'#fff',boxShadow:'0 4px 14px rgba(99,102,241,.4)'}}>Get Started</a>
          </div>
        </div>
      </nav>
      <section style={{padding:'160px 0 100px',background:'linear-gradient(180deg,#F0F1FF,#fff)',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center'}}>
          <div>
            <h1 style={{fontSize:56,fontWeight:800,lineHeight:1.1,marginBottom:24}}>Fill Your Clinic's <span style={{background:'linear-gradient(135deg,#6366F1,#8B5CF6)','-webkit-background-clip':'text','-webkit-text-fill-color':'transparent'}}>Appointment Book</span> While You Sleep</h1>
            <p style={{fontSize:20,color:'#6B7280',marginBottom:32,maxWidth:500}}>AI-powered booking that calls patients, confirms appointments, and brings back no-shows — working 24/7 for clinics across India.</p>
            <div style={{display:'flex',gap:40,marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,.1)'}}>
              <div><div style={{fontSize:36,fontWeight:800,color:'#6366F1'}}>500+</div><div style={{fontSize:14,color:'#6B7280'}}>Clinics in India</div></div>
              <div><div style={{fontSize:36,fontWeight:800,color:'#6366F1'}}>₹50Cr+</div><div style={{fontSize:14,color:'#6B7280'}}>Revenue Generated</div></div>
              <div><div style={{fontSize:36,fontWeight:800,color:'#6366F1'}}>40%</div><div style={{fontSize:14,color:'#6B7280'}}>More Appointments</div></div>
            </div>
          </div>
          <div id="contact" style={{background:'#fff',padding:40,borderRadius:24,boxShadow:'0 20px 25px rgba(0,0,0,.1)'}}>
            <h3 style={{fontSize:24,marginBottom:8}}>Start Your Free Trial</h3>
            <p style={{color:'#6B7280',marginBottom:24}}>No credit card required. 14-day free trial.</p>
            <form>
              <div style={{marginBottom:20}}>
                <label style={{display:'block',fontWeight:600,marginBottom:8,fontSize:14}}>Clinic Name</label>
                <input type="text" placeholder="e.g., Apollo Clinic" style={{width:'100%',padding:'14px 16px',border:'2px solid #E5E7EB',borderRadius:12,fontSize:16}} required />
              </div>
              <div style={{marginBottom:20}}>
                <label style={{display:'block',fontWeight:600,marginBottom:8,fontSize:14}}>Phone Number</label>
                <div style={{display:'flex',alignItems:'center',gap:12}}>
                  <div style={{display:'flex',alignItems:'center',gap:8,padding:'14px 16px',background:'#F9FAFB',border:'2px solid #E5E7EB',borderRadius:12,fontWeight:600}}><span>🇮🇳</span><span>+91</span></div>
                  <input type="tel" placeholder="98765 43210" style={{flex:1,padding:'14px 16px',border:'2px solid #E5E7EB',borderRadius:12,fontSize:16}} required />
                </div>
              </div>
              <button type="submit" style={{width:'100%',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#6366F1,#8B5CF6)',color:'#fff',boxShadow:'0 4px 14px rgba(99,102,241,.4)',border:'none',cursor:'pointer'}}>Start Free Trial</button>
            </form>
          </div>
        </div>
      </section>
      <section id="pricing" style={{padding:'100px 0',background:'#F9FAFB'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(99,102,241,.1)',color:'#6366F1',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Pricing</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Simple, Transparent Pricing</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>No hidden fees. No surprises. Choose the plan that fits your clinic.</p>
        </div>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24}}>
          {[
            {name:'Starter',price:'₹8,000',features:['AI Voice Receptionist','100 appointments/month','WhatsApp Integration','Basic Analytics'],popular:false},
            {name:'Growth',price:'₹18,000',features:['Everything in Starter','300 appointments/month','Patient Reactivation','UPI Payment Integration'],popular:true},
            {name:'Professional',price:'₹35,000',features:['Everything in Growth','Unlimited appointments','Multi-branch Support','Custom Integrations'],popular:false},
            {name:'Enterprise',price:'₹75,000',features:['Everything in Professional','Hospital Management API','Custom AI Training','On-premise Deployment'],popular:false},
          ].map((p,i)=>(
            <div key={i} style={{padding:32,borderRadius:20,border:'2px solid #E5E7EB',textAlign:'center',position:'relative',background:p.popular?'linear-gradient(180deg,#F0F1FF,#fff)':'#fff',borderColor:p.popular?'#6366F1':'#E5E7EB'}}>
              {p.popular && <div style={{position:'absolute',top:-12,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#6366F1,#8B5CF6)',color:'#fff',padding:'4px 16px',borderRadius:20,fontSize:12,fontWeight:600}}>Most Popular</div>}
              <div style={{width:64,height:64,background:'#F9FAFB',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px',fontSize:28}}>{['🌱','🚀','⚡','🏥'][i]}</div>
              <h3 style={{fontSize:20,marginBottom:8}}>{p.name}</h3>
              <div style={{fontSize:36,fontWeight:800,color:'#6366F1',marginBottom:8}}>{p.price}<span style={{fontSize:16,fontWeight:500,color:'#6B7280'}}>/mo</span></div>
              <ul style={{textAlign:'left',marginBottom:32}}>
                {p.features.map((f,j)=>(
                  <li key={j} style={{display:'flex',alignItems:'center',gap:12,padding:'10px 0',fontSize:14,color:'#6B7280',listStyle:'none'}}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10B981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:p.popular?'linear-gradient(135deg,#6366F1,#8B5CF6)':'transparent',color:p.popular?'#fff':'#6366F1',border:p.popular?'none':'2px solid #6366F1',width:'100%'}}>Get Started</a>
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
                VerveMind India
              </div>
              <p style={{color:'#9CA3AF',fontSize:14}}>AI-powered appointment booking for modern clinics across India.</p>
            </div>
          </div>
          <div style={{paddingTop:30,borderTop:'1px solid rgba(255,255,255,.1)',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:14,color:'#9CA3AF'}}>
            <div>© 2024 VerveMind India. All rights reserved.</div>
            <div style={{display:'flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.1)',padding:'8px 16px',borderRadius:8,fontSize:13}}>💳 Powered by UPI & Indian Payment Gateways</div>
          </div>
        </div>
      </footer>
    </>
  )
}
