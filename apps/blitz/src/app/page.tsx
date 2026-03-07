export default function BlitzPage() {
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,background:'rgba(255,255,255,.95)',backdropFilter:'blur(10px)',zIndex:1000,padding:'16px 0',borderBottom:'1px solid rgba(0,0,0,.05)'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#F59E0B'}}>
            <div style={{width:40,height:40,background:'linear-gradient(135deg,#F59E0B,#EF4444)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>⚡</div>
            Reactivation Blitz
          </div>
          <div style={{display:'flex',gap:32,alignItems:'center'}}>
            <a href="#what" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>What It Is</a>
            <a href="#how" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>How It Works</a>
            <a href="#pricing" style={{color:'#6B7280',textDecoration:'none',fontWeight:500}}>Pricing</a>
            <a href="https://vervemindai.com" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#F59E0B,#EF4444)',color:'#fff',boxShadow:'0 4px 14px rgba(245,158,11,.4)'}}>Back to Main Site</a>
          </div>
        </div>
      </nav>
      <section style={{padding:'160px 0 100px',background:'linear-gradient(180deg,#FEF3C7,#fff)',position:'relative',overflow:'hidden'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <h1 style={{fontSize:56,fontWeight:800,lineHeight:1.1,marginBottom:24,color:'#F59E0B'}}>Win Back Your Lost Customers</h1>
          <p style={{fontSize:20,color:'#6B7280',marginBottom:32,maxWidth:500}}>The complete system to reactivate past clients, re-engage cold leads, and turn "gone" customers into repeat buyers.</p>
          <div style={{display:'flex',gap:40,marginTop:48,paddingTop:32,borderTop:'1px solid rgba(0,0,0,.1)'}}>
            <div><div style={{fontSize:36,fontWeight:800,color:'#F59E0B'}}>73%</div><div style={{fontSize:14,color:'#6B7280'}}>Average Recovery Rate</div></div>
            <div><div style={{fontSize:36,fontWeight:800,color:'#F59E0B'}}>3.2x</div><div style={{fontSize:14,color:'#6B7280'}}>ROI on Campaign</div></div>
            <div><div style={{fontSize:36,fontWeight:800,color:'#F59E0B'}}>14 Days</div><div style={{fontSize:14,color:'#6B7280'}}>To First Results</div></div>
          </div>
        </div>
      </section>
      <section id="pricing" style={{padding:'100px 0',background:'#FEF3C7'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',textAlign:'center',marginBottom:60}}>
          <span style={{display:'inline-block',padding:'8px 16px',background:'rgba(245,158,11,.1)',color:'#F59E0B',borderRadius:20,fontWeight:600,fontSize:14,marginBottom:16}}>Pricing</span>
          <h2 style={{fontSize:40,fontWeight:700,marginBottom:16}}>Simple, Performance-Based Pricing</h2>
          <p style={{fontSize:18,color:'#6B7280'}}>Pay for results, not promises.</p>
        </div>
        <div style={{maxWidth:900,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32}}>
          {[
            {name:'Starter',price:'₹15,000',features:['Up to 1,000 contacts','Email + SMS campaigns','Basic segmentation','Weekly reports']},
            {name:'Growth',price:'₹35,000',features:['Up to 10,000 contacts','All channels included','AI-powered personalization','Daily reports + calls'],popular:true},
            {name:'Enterprise',price:'₹75,000',features:['Unlimited contacts','Dedicated account manager','Custom integrations','Priority support']},
          ].map((p,i)=>(
            <div key={i} style={{padding:40,background:'#fff',borderRadius:24,textAlign:'center',boxShadow:'0 4px 6px rgba(0,0,0,.1)',position:'relative',transform:p.popular?'scale(1.05)':'scale(1)',border:p.popular?'3px solid #F59E0B':'none'}}>
              {p.popular && <div style={{position:'absolute',top:-14,left:'50%',transform:'translateX(-50%)',background:'linear-gradient(135deg,#F59E0B,#EF4444)',color:'#fff',padding:'6px 20px',borderRadius:20,fontSize:12,fontWeight:700}}>Best Value</div>}
              <h3 style={{fontSize:24,marginBottom:20}}>{p.name}</h3>
              <div style={{fontSize:48,fontWeight:800,color:'#1F2937',marginBottom:20}}>{p.price}<span style={{fontSize:18,color:'#6B7280'}}>/mo</span></div>
              <ul style={{textAlign:'left',margin:'30px 0'}}>
                {p.features.map((f,j)=>(
                  <li key={j} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 0',borderBottom:'1px solid #eee',listStyle:'none'}}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#10B981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://calendly.com/vervemindai/30min" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,padding:'12px 24px',borderRadius:12,fontWeight:600,fontSize:16,textDecoration:'none',background:'linear-gradient(135deg,#F59E0B,#EF4444)',color:'#fff',width:'100%'}}>Book Strategy Call</a>
            </div>
          ))}
        </div>
      </section>
      <footer style={{background:'#1F2937',color:'#fff',padding:'60px 0 30px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40,marginBottom:40}}>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:24,color:'#F59E0B',marginBottom:16}}>
                <div style={{width:40,height:40,background:'linear-gradient(135deg,#F59E0B,#EF4444)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>⚡</div>
                Reactivation Blitz
              </div>
              <p style={{color:'#9CA3AF',fontSize:14}}>A VerveMind product. The smartest way to recover lost revenue.</p>
            </div>
          </div>
          <div style={{paddingTop:30,borderTop:'1px solid rgba(255,255,255,.1)',textAlign:'center',fontSize:14,color:'#9CA3AF'}}>© 2024 Reactivation Blitz. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
