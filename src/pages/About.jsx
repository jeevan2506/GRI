import React from 'react'

export default function About(){
  return (
    <div className="grid" style={{gap:16}}>
      <section>
        <div className="section-heading">
          <div>
            <small style={{color:'var(--muted)'}}>Who we are</small>
            <h2>About GRI</h2>
          </div>
        </div>
        <div className="card" style={{padding:16}}>
          <p>
            Grassroot Innovation (GRI) at Jain University fosters community-led innovation by
            bridging academic research with rural insights. We focus on sustainable, frugal
            solutions that address local needs, while enabling students to learn through hands-on
            immersion and co-creation.
          </p>
        </div>
      </section>
    </div>
  )
}
