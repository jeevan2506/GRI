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
        <div style={{
          display:'grid', 
          gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', 
          gap:'25px', 
          marginTop:'20px',
          perspective: '1000px'
        }}>
          {[
            {number:'10+', label:'Rural Communities Engaged', icon:'🏘️', color:'#4e7aef'},
            {number:'25+', label:'Student-Led Projects', icon:'🎓', color:'#e74694'},
            {number:'5+', label:'Implemented Solutions', icon:'✅', color:'#3cba92'},
            {number:'1000+', label:'Community Interactions', icon:'🤝', color:'#f5b942'}
          ].map((stat, i) => (
            <div key={i} style={{
              background:`linear-gradient(135deg, white 0%, #f8f9fa 100%)`, 
              padding:'32px 24px', 
              borderRadius:'16px', 
              textAlign:'center', 
              boxShadow:`0 10px 30px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)`, 
              border:`1px solid var(--border)`, 
              transition:'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: `translateY(0) rotateY(0)`,
              position: 'relative',
              overflow: 'hidden',
              animation: `fadeInUp 0.6s ease-out ${0.2 + i * 0.15}s both`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) rotateY(5deg)';
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.05), 0 0 20px rgba(${stat.color.replace('#', '').match(/../g).map(h => parseInt(h, 16)).join(',')}, 0.2)`;
              e.currentTarget.style.borderColor = stat.color;
              e.currentTarget.style.background = `linear-gradient(135deg, white 0%, #f8f9fa 80%, rgba(${stat.color.replace('#', '').match(/../g).map(h => parseInt(h, 16)).join(',')}, 0.05) 100%)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.background = 'linear-gradient(135deg, white 0%, #f8f9fa 100%)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                background: `radial-gradient(circle, rgba(${stat.color.replace('#', '').match(/../g).map(h => parseInt(h, 16)).join(',')}, 0.1) 0%, rgba(255,255,255,0) 70%)`,
                borderRadius: '50%',
                zIndex: '0',
                transition: 'all 0.5s ease'
              }}></div>
              <div style={{
                fontSize:'42px', 
                marginBottom:'16px',
                background: `linear-gradient(135deg, ${stat.color} 0%, rgba(${stat.color.replace('#', '').match(/../g).map(h => parseInt(h, 16)).join(',')}, 0.7) 100%)`,
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '24px',
                margin: '0 auto 20px',
                boxShadow: `0 10px 20px rgba(${stat.color.replace('#', '').match(/../g).map(h => parseInt(h, 16)).join(',')}, 0.2)`,
                color: 'white',
                transform: 'rotate(0deg)',
                transition: 'all 0.5s ease',
                position: 'relative',
                zIndex: '1'
              }}
              className="achievement-icon"
              >{stat.icon}</div>
              <div style={{
                fontSize:'clamp(32px, 3.5vw, 42px)', 
                fontWeight:'800', 
                background: `linear-gradient(to right, ${stat.color}, rgba(${stat.color.replace('#', '').match(/../g).map(h => parseInt(h, 16)).join(',')}, 0.7))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px',
                position: 'relative',
                display: 'inline-block',
                textShadow: '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                zIndex: '1'
              }}
              className="achievement-number"
              >
                {stat.number}
              </div>
              <div style={{
                fontSize:'16px', 
                fontWeight: '600',
                color:'var(--text)',
                marginTop: '10px',
                position: 'relative',
                zIndex: '1',
                transition: 'all 0.3s ease',
                padding: '0 10px'
              }}>{stat.label}</div>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '5px',
                background: stat.color,
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.5s ease',
                zIndex: '0'
              }}
              className="achievement-underline"
              ></div>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          div:hover .achievement-icon {
            transform: rotate(10deg) scale(1.05);
          }
          
          div:hover .achievement-number {
            transform: scale(1.1);
          }
          
          div:hover .achievement-underline {
            transform: scaleX(1);
          }
        `}</style>
      </section>
    </div>
  )
}
