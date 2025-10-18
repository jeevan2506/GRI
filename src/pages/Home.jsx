import React from 'react'
import { Link } from 'react-router-dom'
import { homeImages } from '../assets/galleryData'
import MarqueeGallery from '../components/MarqueeGallery'

export default function Home(){
  const topRow = homeImages.slice(0, Math.ceil(homeImages.length/2))
  const bottomRow = homeImages.slice(Math.ceil(homeImages.length/2))

  return (
    <div className="grid" style={{gap:32}}>
      <section className="hero">
        <div>
          <div className="hero-tag">GRI • Jain University</div>
          <h1>Grassroot Research and Innovation for Rural Impact</h1>
          <p>
            We partner with rural communities to co-create sustainable solutions through research,
            student engagement, and frugal innovation. Explore our activities, projects, and impact.
          </p>
          <div className="hero-cta">
            <Link to="/participate" className="btn">Participate</Link>
            <Link to="/activities" className="btn ghost">View Activities</Link>
          </div>
        </div>
        <div className="home-hero-media">
          <MarqueeGallery items={topRow} />
          <div style={{height:16}}></div>
          <MarqueeGallery items={bottomRow} />
          <div className="stat">1000+ community interactions</div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <small style={{color:'var(--muted)'}}>Who we are</small>
            <h2>About GRI</h2>
          </div>
        </div>
        <div className="card about-card" style={{padding:'30px', background:'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)', border:'1px solid var(--border)', animation:'fadeInUp 0.6s ease-out 0.4s both', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <p style={{fontSize:'clamp(16px, 1.4vw, 18px)', lineHeight:'1.6', color:'var(--text)', margin:0, maxWidth:'800px'}}>
              <span style={{fontSize:'clamp(20px, 1.8vw, 22px)', fontWeight:'600', color:'var(--brand)', display:'block', marginBottom:'10px'}}>Grassroot Innovation (GRI)</span> 
              at Jain University serves as a vital platform that integrates academic research with valuable insights from rural communities. This initiative emphasizes the development of sustainable and cost-effective solutions tailored to address specific local challenges.
            </p>
            
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px', marginTop:'10px'}}>
              <div style={{background:'rgba(var(--brand-rgb), 0.05)', padding:'20px', borderRadius:'8px', border:'1px solid rgba(var(--brand-rgb), 0.1)'}}>
                <h3 style={{fontSize:'18px', marginTop:0, color:'var(--brand)'}}>Our Mission</h3>
                <p style={{margin:0, fontSize:'15px'}}>To bridge the gap between academic knowledge and rural needs through collaborative research and innovation that creates sustainable impact.</p>
              </div>
              
              <div style={{background:'rgba(var(--brand-rgb), 0.05)', padding:'20px', borderRadius:'8px', border:'1px solid rgba(var(--brand-rgb), 0.1)'}}>
                <h3 style={{fontSize:'18px', marginTop:0, color:'var(--brand)'}}>Our Approach</h3>
                <p style={{margin:0, fontSize:'15px'}}>By fostering active engagement between students and community members, GRI provides a unique experiential learning environment through immersive, hands-on involvement and co-creation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <small style={{color:'var(--muted)'}}>What we do</small>
            <h2>Activities</h2>
          </div>
          <Link to="/activities" className="btn ghost">Explore</Link>
        </div>
        <div className="card-grid">
          {[
            {t:'Field Immersions', d:'Community visits and need finding across rural clusters to identify authentic local challenges.', icon: '🔍'},
            {t:'Workshops', d:'Capacity building, design thinking, and frugal innovation sessions to develop practical skills.', icon: '🛠️'},
            {t:'Prototyping', d:'Rapid prototyping and low-cost solution development with direct community feedback.', icon: '💡'},
          ].map((c,i)=> (
            <article className="card" key={i} style={{transition:'transform 0.3s ease'}}>
              <div style={{position:'relative', overflow:'hidden'}}>
                <img 
                  src={homeImages[i % homeImages.length].src} 
                  alt={homeImages[i % homeImages.length].caption}
                  loading="lazy"
                  style={{maxWidth:'100%', height:'auto', transition:'transform 0.5s ease'}}
                />
                <div style={{position:'absolute', top:'10px', right:'10px', background:'var(--brand)', color:'white', width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px'}}>
                  {c.icon}
                </div>
              </div>
              <div className="body">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <small style={{color:'var(--muted)'}}>Our Impact</small>
            <h2>Key Achievements</h2>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'20px', marginTop:'10px'}}>
          {[
            {number:'10+', label:'Rural Communities Engaged', icon:'🏘️'},
            {number:'25+', label:'Student-Led Projects', icon:'🎓'},
            {number:'5+', label:'Implemented Solutions', icon:'✅'},
            {number:'1000+', label:'Community Interactions', icon:'🤝'}
          ].map((stat, i) => (
            <div key={i} style={{background:'white', padding:'24px', borderRadius:'10px', textAlign:'center', boxShadow:'0 4px 15px rgba(0,0,0,0.05)', border:'1px solid var(--border)', transition:'transform 0.3s ease'}}>
              <div style={{fontSize:'24px', marginBottom:'8px'}}>{stat.icon}</div>
              <div style={{fontSize:'clamp(24px, 2.5vw, 32px)', fontWeight:'700', color:'var(--brand)'}}>{stat.number}</div>
              <div style={{fontSize:'14px', color:'var(--muted)'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
