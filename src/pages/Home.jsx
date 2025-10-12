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
          <h1>Grassroot Innovation for Rural Impact</h1>
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
        <div className="card about-card" style={{padding:'20px', background:'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)', border:'1px solid var(--border)', animation:'fadeInUp 0.6s ease-out 0.4s both'}}>
          <p style={{fontSize:'clamp(16px, 1.4vw, 18px)', lineHeight:'1.6', color:'var(--text)', margin:0, maxWidth:'800px'}}>
            <span style={{fontSize:'clamp(18px, 1.6vw, 20px)', fontWeight:'600', color:'var(--brand)'}}>Grassroot Innovation (GRI)</span> at Jain University fosters community-led innovation by
            bridging academic research with rural insights. We focus on sustainable, frugal
            solutions that address local needs, while enabling students to learn through hands-on
            immersion and co-creation.
          </p>
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
            {t:'Field Immersions', d:'Community visits and need finding across rural clusters.'},
            {t:'Workshops', d:'Capacity building, design thinking, and frugal innovation.'},
            {t:'Prototyping', d:'Rapid prototyping and low-cost solution development.'},
          ].map((c,i)=> (
            <article className="card" key={i}>
              <img 
                src={homeImages[i % homeImages.length].src} 
                alt={homeImages[i % homeImages.length].caption}
                loading="lazy"
                style={{maxWidth:'100%', height:'auto'}}
              />
              <div className="body">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}