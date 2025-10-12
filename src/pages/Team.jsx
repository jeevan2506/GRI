import React from 'react'

export default function Team(){
  const team = [
    {n:'Coordinator', r:'Program Lead'},
    {n:'Faculty Mentor', r:'Innovation Advisor'},
    {n:'Student Fellow', r:'Field Research'},
    {n:'Community Champion', r:'Extension Liaison'}
  ]
  return (
    <div className="grid" style={{gap:16}}>
      <div className="section-heading" style={{textAlign:'center', justifyContent:'center'}}>
        <div>
          <small style={{color:'var(--muted)'}}>People</small>
          <h2>Team</h2>
        </div>
      </div>
      <div className="card-grid">
        {team.map((m,i)=> (
          <article key={i} className="card">
            <div className="body" style={{textAlign:'center'}}>
              <h3>{m.n}</h3>
              <p>{m.r}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
