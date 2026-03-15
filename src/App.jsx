import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css'

const TABS = [
  { id: 'about',     label: 'About Me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'resume',    label: 'Resume' },
  { id: 'contact',   label: 'Contact' },
]

function App() {
  const [active, setActive] = useState('about')
  const sectionRefs = useRef({})
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x7ed466,
      backgroundColor: 0x110525,
    })
    return () => { if (vantaEffect.current) vantaEffect.current.destroy() }
  }, [])

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const observers = []
    TABS.forEach(({ id }) => {
      const el = sectionRefs.current[id]
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  return (
    <div className="app">
      <div ref={vantaRef} className="vanta-bg" />
      <header className="header">
        <h1 className="header-name">Sean Lai</h1>
        <p className="header-subtitle">Computer Science &amp; Engineering @ Santa Clara University</p>
      </header>

      <div className="tab-wrapper">
        <nav className="tab-nav" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              className={`tab-btn${active === tab.id ? ' active' : ''}`}
              onClick={() => scrollTo(tab.id)}
            >
              {active === tab.id && (
                <motion.span
                  layoutId="tab-indicator"
                  className="tab-indicator"
                  style={{ position: 'absolute', inset: 0 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <main className="content">
        <section id="about" ref={(el) => (sectionRefs.current['about'] = el)} className="page-section">
          <About />
        </section>
        <section id="portfolio" ref={(el) => (sectionRefs.current['portfolio'] = el)} className="page-section">
          <Portfolio />
        </section>
        <section id="resume" ref={(el) => (sectionRefs.current['resume'] = el)} className="page-section">
          <Resume />
        </section>
        <section id="contact" ref={(el) => (sectionRefs.current['contact'] = el)} className="page-section">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
