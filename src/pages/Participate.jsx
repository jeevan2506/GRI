import React from 'react'

export default function Participate(){
  const participationWays = [
    {
      title: 'Digital Marketing',
      description: 'Help promote our initiatives through social media, content creation, and online campaigns to increase awareness and engagement.'
    },
    {
      title: 'Photography', 
      description: 'Capture impactful moments during field visits, workshops, and community interactions to document our journey and tell compelling stories.'
    },
    {
      title: 'Documentation',
      description: 'Assist in creating detailed reports, case studies, and process documentation to preserve knowledge and share our learnings.'
    },
    {
      title: 'Designing',
      description: 'Apply your creative skills to develop visual materials, user interfaces, and innovative solutions that address rural challenges.'
    },
    {
      title: 'Technical',
      description: 'Contribute your technical expertise to build prototypes, develop applications, and implement sustainable technological solutions.'
    }
  ]

  return (
    <div className="grid" style={{gap:32}}>
      <div className="section-heading" style={{textAlign:'center', justifyContent:'center'}}>
        <div>
          <small style={{color:'var(--muted)'}}>Join us</small>
          <h2>Participate</h2>
        </div>
      </div>

      <div className="card" style={{padding:24, textAlign:'center'}}>
        <h3 style={{fontSize:'clamp(20px, 2.5vw, 28px)', marginBottom:16, color:'var(--text)'}}>Make a Difference</h3>
        <p style={{fontSize:'clamp(16px, 1.4vw, 18px)', lineHeight:1.6, color:'var(--muted)', maxWidth:'700px', margin:'0 auto 24px'}}>
          Join our mission to create sustainable solutions for rural communities. Whether you're a student, faculty member, or community leader, there's a meaningful way for you to contribute.
        </p>
      </div>

      <div className="card-grid" style={{gap:20}}>
        {participationWays.map((way, index) => (
          <article key={index} className="card">
            <div className="body" style={{textAlign:'center'}}>
              <h3>{way.title}</h3>
              <p>{way.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="card" style={{padding:32, textAlign:'center', background:'#ffffff', border:'1px solid var(--border)'}}>
        <h3 style={{fontSize:'clamp(18px, 2vw, 24px)', marginBottom:16, color:'var(--text)'}}>Ready to Get Involved?</h3>
        <p style={{fontSize:'16px', color:'var(--muted)', marginBottom:24, maxWidth:'600px', margin:'0 auto 24px'}}>
          We're always looking for passionate individuals to join our grassroot innovation community.
        </p>
        <button 
          onClick={() => window.location.href = 'mailto:gri@jainuniversity.ac.in?subject=Interested in Participating&body=Hi, I\'m interested in participating in GRI initiatives. Please provide more details about how I can get involved.'}
          style={{
            fontSize:'18px', 
            padding:'14px 28px', 
            background:'#0056b3', 
            color:'white', 
            textDecoration:'none', 
            border:'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            display: 'inline-block',
            margin: '0 auto',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          PARTICIPATE NOW
        </button>
      </div>
    </div>
  )
}
