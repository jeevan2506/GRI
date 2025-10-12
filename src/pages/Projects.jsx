import React from 'react'

export default function Projects(){
  const projects = [
    {t:'Low-cost water filter', d:'Locally sourced materials for safe drinking water.'},
    {t:'Solar study lamps', d:'Affordable, sustainable lighting for students.'},
    {t:'Agri soil tester', d:'Rapid soil testing kit for better crop planning.'},
    {t:'Biogas digester', d:'Household organic waste to energy.'},
    {t:'Portable cold storage', d:'Reducing post-harvest losses with frugal design.'},
    {t:'Assistive mobility aid', d:'Improving accessibility with low-cost prosthetics.'}
  ]
  return (
    <div className="grid" style={{gap:16}}>
      <div className="section-heading">
        <div>
          <small style={{color:'var(--muted)'}}>Work</small>
          <h2>Projects</h2>
        </div>
      </div>
      <div className="card-grid">
        {projects.map((p,i)=> (
          <article key={i} className="card">
            <div className="body">
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
