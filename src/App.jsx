import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import Activities from './pages/Activities'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Participate from './pages/Participate'
import FieldVisit from './pages/FieldVisit'
import FieldVisitDetail from './pages/FieldVisitDetail'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import UserLogin from './pages/UserLogin'

import PageTransition from './shared/PageTransition'
import SectionHeading from './shared/SectionHeading'
import NotificationIcon from './components/NotificationIcon'
import AddToHomeScreen from './components/AddToHomeScreen'
import { NotificationProvider } from './context/NotificationContext'
import logo from './assets/logo.jpeg'
import jgiLogo from './assets/jgi_logo.png'
import './styles/notifications.css'

function Navbar(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="nav">
      <div className="container inner">
        <NavLink to="/" className="brand" onClick={closeMobileMenu}>
          <img src={jgiLogo} alt="JGI Logo" className="logo jgi-logo" />
          <img src={logo} alt="GRI Logo" className="logo gri-logo" />
          <div className="brand-text" style={{ marginRight: '20px' }}>
            <span className="brand-mark">GRI</span>
            <span className="brand-name">Grassroot Research and Innovation</span>
          </div>
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="links desktop-links">
          <NavLink to="/activities" style={{ marginRight: '10px' }}>Activities</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/field-visit">Visits</NavLink>
          <NavLink to="/participate">Participate</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="notification-container">
            <NotificationIcon />
          </div>
          <NavLink to="/login">Login</NavLink>
          <AddToHomeScreen />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav-right">
          <div className="notification-container mobile-navbar-notification">
            <NotificationIcon />
          </div>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-links">
            <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/activities" onClick={closeMobileMenu}>Activities</NavLink>
            <NavLink to="/gallery" onClick={closeMobileMenu}>Gallery</NavLink>
            <NavLink to="/team" onClick={closeMobileMenu}>Team</NavLink>
            <NavLink to="/field-visit" onClick={closeMobileMenu}>Field Visits</NavLink>
            <NavLink to="/participate" onClick={closeMobileMenu}>Participate</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
            <NavLink to="/login" onClick={closeMobileMenu}>Login</NavLink>
            <div className="mobile-add-to-home-wrapper">
              <AddToHomeScreen />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  )
}

function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <div className="brand" style={{marginBottom:8, display:'flex', alignItems:'center', gap:8}}>
              <img src={logo} alt="GRI Logo" className="logo" style={{width:48, height:48}} />
              <div>
                <span className="brand-mark">GRI</span> Grassroot Research and Innovation
              </div>
            </div>
            <small>Jain University • Bengaluru, Karnataka</small>
            <p style={{color:'var(--muted)'}}>
              Showcasing rural engagement, innovations, and community impact across grassroots ecosystems.
            </p>
          </div>
          <div>
            <SectionHeading title="Contact" subtitle="Reach us" />
            <div style={{display:'grid', gap:8}}>
              <a href="mailto:griresearch.jain@gmail.com"><FiMail/> griresearch.jain@gmail.com</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FiLinkedin/> LinkedIn</a>
              <a href="https://www.instagram.com/jainresearch_gri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer"><FiInstagram/> Instagram</a>
              </div>
          </div>
          <div>
            <SectionHeading title="Quick links" subtitle="Navigate" />
            <div style={{display:'grid', gap:8}}>
              <NavLink to="/participate">Participate</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/activities">Activities</NavLink>
              <NavLink to="/team">Team</NavLink>
            </div>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:16, color:'var(--muted)'}}>
          <small>© {new Date().getFullYear()} GRI • Jain University</small>
          
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <NotificationProvider>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route index element={<PageTransition><Home/></PageTransition>} />
          <Route path="activities" element={<PageTransition><Activities/></PageTransition>} />
          <Route path="gallery" element={<PageTransition><Gallery/></PageTransition>} />
          <Route path="team" element={<PageTransition><Team/></PageTransition>} />
          <Route path="participate" element={<PageTransition><Participate/></PageTransition>} />
          <Route path="field-visit" element={<PageTransition><FieldVisit/></PageTransition>} />
          <Route path="fieldvisit/:id" element={<PageTransition><FieldVisitDetail/></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact/></PageTransition>} />
          <Route path="login" element={<PageTransition><UserLogin/></PageTransition>} />
          {/* Admin routes - hidden from normal navigation */}
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </NotificationProvider>
  )
}
