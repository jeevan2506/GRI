import React from 'react'

export default function Participate(){
  const participationWays = [
    {
      title: 'Community Champion',
      description: 'Bridge the gap between university research and rural communities. Help us understand local needs and facilitate workshops in your area.'
    },
    {
      title: 'Student Researcher', 
      description: 'Join hands-on research projects with real-world impact. Conduct field studies, develop prototypes, and learn through rural experiences.'
    },
    {
      title: 'Volunteer',
      description: 'Contribute your skills to meaningful grassroot initiatives. Support workshops, documentation, and community engagement activities.'
    },
    {
      title: 'Faculty Mentor',
      description: 'Guide student projects and provide academic expertise. Mentor researchers and contribute domain knowledge to solutions.'
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

      <div className="card" style={{padding:32, textAlign:'center', background:'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)', border:'2px solid var(--border)'}}>
        <h3 style={{fontSize:'clamp(18px, 2vw, 24px)', marginBottom:16, color:'var(--text)'}}>Ready to Get Involved?</h3>
        <p style={{fontSize:'16px', color:'var(--muted)', marginBottom:24, maxWidth:'600px', margin:'0 auto 24px'}}>
          We're always looking for passionate individuals to join our grassroot innovation community.
        </p>
        <a 
          className="btn" 
          href="mailto:gri@jainuniversity.ac.in?subject=Interested in Participating&body=Hi, I'm interested in participating in GRI initiatives. Please provide more details about how I can get involved."
          style={{fontSize:'16px', padding:'12px 24px'}}
        >
          Express Interest
        </a>
      </div>
    </div>
  )
}
