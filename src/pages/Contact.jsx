import React from 'react'

export default function Contact(){
  return (
    <div className="grid" style={{gap:32}}>
      <div className="section-heading" style={{textAlign:'center', justifyContent:'center'}}>
        <div>
          <small style={{color:'var(--muted)'}}>Say hello</small>
          <h2>Contact</h2>
        </div>
      </div>

      <div className="card" style={{padding:24, textAlign:'center'}}>
        <h3 style={{fontSize:'clamp(20px, 2.5vw, 28px)', marginBottom:16, color:'var(--text)'}}>Get in Touch</h3>
        <p style={{fontSize:'clamp(16px, 1.4vw, 18px)', lineHeight:1.6, color:'var(--muted)', maxWidth:'700px', margin:'0 auto 24px'}}>
          Have questions about our grassroot innovation programs? Want to collaborate or contribute? We'd love to hear from you.
        </p>
      </div>

      <div className="card-grid" style={{gap:20}}>
        <article className="card">
          <div className="body" style={{textAlign:'center'}}>
            <h3>Address</h3>
            <p>Jain University<br />Bengaluru, Karnataka 560069<br />India</p>
          </div>
        </article>
        
        <article className="card">
          <div className="body" style={{textAlign:'center'}}>
            <h3>Email</h3>
            <p><a href="mailto:gri@jainuniversity.ac.in" style={{color:'var(--brand)'}}>gri@jainuniversity.ac.in</a></p>
          </div>
        </article>
        
        <article className="card">
          <div className="body" style={{textAlign:'center'}}>
            <h3>Office Hours</h3>
            <p>Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
          </div>
        </article>
      </div>

      <div className="card" style={{padding:32, background:'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)', border:'2px solid var(--border)'}}>
        <h3 style={{fontSize:'clamp(18px, 2vw, 24px)', marginBottom:24, color:'var(--text)', textAlign:'center'}}>Send us a Message</h3>
        
        <form onSubmit={(e) => e.preventDefault()} style={{display:'grid', gap:16, maxWidth:600, margin:'0 auto'}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
            <input 
              placeholder="Your name" 
              style={{
                padding:12, 
                borderRadius:8, 
                border:'1px solid var(--border)', 
                background:'white', 
                color:'var(--text)',
                fontSize:14
              }} 
            />
            <input 
              placeholder="Email" 
              type="email"
              style={{
                padding:12, 
                borderRadius:8, 
                border:'1px solid var(--border)', 
                background:'white', 
                color:'var(--text)',
                fontSize:14
              }} 
            />
          </div>
          
          <input 
            placeholder="Subject" 
            style={{
              padding:12, 
              borderRadius:8, 
              border:'1px solid var(--border)', 
              background:'white', 
              color:'var(--text)',
              fontSize:14
            }} 
          />
          
          <textarea 
            placeholder="Your message" 
            rows="5" 
            style={{
              padding:12, 
              borderRadius:8, 
              border:'1px solid var(--border)', 
              background:'white', 
              color:'var(--text)',
              fontSize:14,
              resize:'vertical'
            }} 
          />
          
          <button 
            className="btn" 
            type="submit"
            style={{
              fontSize:'16px', 
              padding:'12px 24px',
              justifySelf:'center',
              maxWidth:'200px'
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
