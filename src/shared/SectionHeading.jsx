import React from 'react'

export default function SectionHeading({ title, subtitle, action }){
  return (
    <div className="section-heading">
      <div>
        {subtitle && <small style={{color:'var(--muted)'}}>{subtitle}</small>}
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  )
}
