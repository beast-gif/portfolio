import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Download, Mail, ArrowDown } from 'lucide-react'

const GithubIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)
const LinkedinIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const AnimatedText = ({ text, delay = 0, className = '' }) => (
  <span className={className}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay + i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ display: 'inline-block', whiteSpace: 'pre' }}
      >
        {char}
      </motion.span>
    ))}
  </span>
)

export default function Hero() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const clock = time.toLocaleTimeString('en-GB', { hour12: false })

  return (
    <section className="hero" id="home">
      <div className="hud">
        <div className="hud-row"><span>LOC</span> Bangalore, IN</div>
        <div className="hud-row"><span>TIME</span> {clock} IST</div>
        <div className="hud-row"><span>STATUS</span> <em>Open to internships</em></div>
      </div>

      <div className="tech-orbit" aria-hidden="true">
        <div className="orbit-ring ring-1"></div>
        <div className="orbit-ring ring-2"></div>
        <div className="orbit-ring ring-3"></div>
        <div className="orbit-dot dot-1"></div>
        <div className="orbit-dot dot-2"></div>
        <div className="orbit-dot dot-3"></div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-sticker"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Available for internships · 2026
        </motion.div>

        <h1 className="hero-name">
          <AnimatedText text="Sai Amrith" delay={0.2} className="name-first" />
          <AnimatedText text="Reddy." delay={0.7} className="name-last accent-word" />
        </h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          Engineer · <strong>AI/ML</strong> · <strong>Full-stack</strong> · <strong>Embedded</strong>
        </motion.p>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          EAC student at Amrita Vishwa Vidyapeetham. I build ML pipelines,
          embedded systems, and full-stack apps — focused on shipping things
          that actually work.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <MagneticButton href="/resume.pdf" download primary>
            <Download size={14} /> Download resume
          </MagneticButton>
          <MagneticButton href="#contact">
            <Mail size={14} /> Get in touch
          </MagneticButton>
          <MagneticButton href="https://github.com/beast-gif" external>
            <GithubIcon size={14} /> GitHub
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/sai-amrith-reddy-918280317" external>
            <LinkedinIcon size={14} /> LinkedIn
          </MagneticButton>
        </motion.div>

        {/* Currently line */}
        <motion.div
          className="currently"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          <span className="currently-dot"></span>
          <span className="currently-label">Currently</span>
          <span className="currently-text">
            Exploring transformer architectures & building an AI video pipeline
          </span>
        </motion.div>

        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <span>Scroll</span>
          <div className="scroll-line"></div>
          <ArrowDown size={12} />
        </motion.div>
      </div>
    </section>
  )
}

function MagneticButton({ children, href, download, external, primary }) {
  const ref = useRef(null)
  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2 - 2}px)`
  }
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }
  const props = {
    ref, href,
    className: `btn ${primary ? 'btn-primary' : ''}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    ...(download && { download: true }),
    ...(external && { target: '_blank', rel: 'noreferrer' })
  }
  return <a {...props}>{children}</a>
}