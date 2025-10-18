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
          <h1>Grassroots Research and Innovation for Rural Impact</h1>
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
              <span style={{fontSize:'clamp(20px, 1.8vw, 22px)', fontWeight:'600', color:'var(--brand)', display:'block', marginBottom:'10px'}}>Grassroots Research and Innovation (GRI)</span> 
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

      <section className="website-highlight">
        <div className="section-heading">
          <div>
            <small style={{color:'var(--muted)'}}>Discover</small>
            <h2>GRI Highlights</h2>
          </div>
        </div>
        
        <div className="highlight-container" style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          margin: '30px auto',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
          minHeight: '500px',
          maxWidth: '1200px',
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px'
        }}>
          {/* Animated background elements */}
          <div className="animated-bg" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden'
          }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="floating-circle" style={{
                position: 'absolute',
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 120 + 60}px`,
                borderRadius: '50%',
                background: `rgba(var(--brand-rgb), ${Math.random() * 0.15 + 0.05})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.6 + 0.3,
                transform: 'scale(1)',
                zIndex: 1
              }}></div>
            ))}
          </div>
          
          {/* Main content */}
          <div className="highlight-content" style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 20px',
            textAlign: 'center',
            maxWidth: '900px',
            width: '100%'
          }}>
            <div className="highlight-icon" style={{
              fontSize: '56px',
              marginBottom: '30px',
              background: 'linear-gradient(135deg, var(--brand) 0%, rgba(var(--brand-rgb), 0.7) 100%)',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              color: 'white',
              boxShadow: '0 15px 35px rgba(var(--brand-rgb), 0.4)',
              animation: 'pulse 2.5s infinite',
              transition: 'transform 0.3s ease'
            }}>
              🌱
            </div>
            
            <h3 style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '800',
              marginBottom: '25px',
              background: 'linear-gradient(to right, var(--brand), rgba(var(--brand-rgb), 0.7))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s infinite',
              letterSpacing: '-0.5px',
              lineHeight: '1.2'
            }}>
              Transforming Rural Communities Through Innovation
            </h3>
            
            <p style={{
              fontSize: 'clamp(17px, 1.8vw, 20px)',
              lineHeight: '1.8',
              marginBottom: '35px',
              color: 'var(--text)',
              maxWidth: '800px',
              padding: '0 15px'
            }}>
              GRI connects academic expertise with rural wisdom to create sustainable, impactful solutions. 
              Our collaborative approach has engaged 10+ communities, launched 25+ student projects, 
              and implemented 5+ solutions through 1000+ meaningful interactions.
            </p>
            
            <div className="cta-buttons" style={{
              display: 'flex',
              gap: '25px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '10px'
            }}>
              <Link to="/projects" className="highlight-btn primary" style={{
                display: 'inline-block',
                padding: '15px 30px',
                background: 'linear-gradient(135deg, var(--brand) 0%, rgba(var(--brand-rgb), 0.8) 100%)',
                color: 'white',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '17px',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(var(--brand-rgb), 0.3)',
                transition: 'all 0.3s ease',
                border: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <span style={{ position: 'relative', zIndex: 2 }}>Explore Projects</span>
                <div className="btn-shine" style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
                  transform: 'rotate(45deg)',
                  transition: 'all 0.5s ease',
                  zIndex: 1
                }}></div>
              </Link>
              
              <Link to="/participate" className="highlight-btn secondary" style={{
                display: 'inline-block',
                padding: '15px 30px',
                background: 'transparent',
                color: 'var(--brand)',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '17px',
                textDecoration: 'none',
                boxShadow: '0 0 0 2px var(--brand)',
                transition: 'all 0.3s ease'
              }}>
                Get Involved
              </Link>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-20px) scale(1.1);
            }
          }
          
          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 10px 30px rgba(var(--brand-rgb), 0.3);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 15px 40px rgba(var(--brand-rgb), 0.4);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 10px 30px rgba(var(--brand-rgb), 0.3);
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          
          .highlight-btn.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(var(--brand-rgb), 0.5);
          }
          
          .highlight-btn.primary:hover .btn-shine {
            left: 100%;
          }
          
          .highlight-btn.secondary:hover {
            background: rgba(var(--brand-rgb), 0.1);
            transform: translateY(-3px);
          }
          
          .highlight-content {
            animation: fadeIn 1s ease-out;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </div>
  )
}
