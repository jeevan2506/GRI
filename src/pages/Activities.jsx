import React from 'react'

export default function Activities(){
  const activities = [
    {
      t: 'Grassroots Innovation Learning',
      d: 'Learning directly from communities — especially in villages — by observing how people creatively address everyday challenges with limited resources and immense wisdom.'
    },
    {
      t: 'Village Visits & Field Research',
      d: 'Students visit nearby villages to learn from the lived experiences of common people, gain life lessons, and understand local problems that demand thoughtful solutions.'
    },
    {
      t: 'Observing Innovative Practices',
      d: 'Through field visits, students observe innovative practices emerging from the grassroots and apply their own critical and innovative thinking.'
    },
    {
      t: 'Design Solutions',
      d: 'Design solutions that bridge classroom knowledge with real-world needs, connecting education with empathy, engineering with society, and innovation with purpose.'
    },
    {
      t: 'Community Immersions',
      d: 'Field research, interviews, and need discovery with rural stakeholders.'
    },
    {
      t: 'Design Workshops',
      d: 'Hands-on sessions on design thinking and low-cost prototyping.'
    },
    {
      t: 'Innovation Sprints',
      d: 'Rapid testing of ideas through frugal, local materials.'
    },
    {
      t: 'Capacity Building',
      d: 'Training for students and community champions to scale solutions.'
    }
  ]
  return (
    <div className="grid" style={{gap:16}}>
      <div className="section-heading" style={{textAlign:'center', justifyContent:'center'}}>
        <div>
          <small style={{color:'var(--muted)'}}>Engage</small>
          <h2>Activities</h2>
        </div>
      </div>
      <div className="card-grid">
        {activities.map((a,i)=> (
          <article key={i} className="card">
            <div className="body" style={{textAlign:'center'}}>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
