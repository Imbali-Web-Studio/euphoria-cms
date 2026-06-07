'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-contact">
            <span className="top-bar-item"><a href="tel:+18004602686">+1 800-460-2686</a></span>
            <span className="top-bar-item"><a href="https://instagram.com/euphorialoungevibez" target="_blank" rel="noopener noreferrer">@euphorialoungevibez</a></span>
            <span className="top-bar-item top-bar-item--hours">Wed–Thu 8PM–2AM · Fri–Sat 7PM–3AM</span>
          </div>
          <div className="top-bar-social">
            <a href="https://facebook.com" className="top-bar-social-link" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com/euphorialoungevibez" className="top-bar-social-link" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com" className="top-bar-social-link" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://tiktok.com" className="top-bar-social-link" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-bar">
          <div className="nav-group nav-group--left">
            <ul className="nav-links nav-links--left">
              <li><button onClick={() => handleScroll('about')}>About</button></li>
              <li><button onClick={() => handleScroll('menu')}>Menu</button></li>
              <li><button onClick={() => handleScroll('events')}>Events</button></li>
              <li><button onClick={() => handleScroll('parties')}>Private Events</button></li>
            </ul>
          </div>
          <button onClick={() => handleScroll('hero')} className="nav-logo">
            <img src="/images/logo.png" alt="Euphoria" />
          </button>
          <div className="nav-group nav-group--right">
            <ul className="nav-links nav-links--right">
              <li><button onClick={() => handleScroll('gallery')}>Gallery</button></li>
              <li><button onClick={() => handleScroll('reservation')}>Reservations</button></li>
            </ul>
            <button className="nav-cta" onClick={() => handleScroll('reservation')}><span>Reserve Now</span></button>
          </div>
        </div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>
        <nav className="mobile-menu-panel">
          <button onClick={() => handleScroll('about')}>About</button>
          <button onClick={() => handleScroll('menu')}>Menu</button>
          <button onClick={() => handleScroll('events')}>Events</button>
          <button onClick={() => handleScroll('parties')}>Private Events</button>
          <button onClick={() => handleScroll('gallery')}>Gallery</button>
          <button onClick={() => handleScroll('reservation')}>Reservations</button>
        </nav>
      </div>
    </>
  )
}