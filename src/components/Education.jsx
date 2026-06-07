import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Education <span>& certs</span></h2>
      </div>
      <div className="edu-list">
        <motion.div className="edu-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="edu-year">2023 — 2027</div>
          <div className="edu-body">
            <h3>Amrita Vishwa Vidyapeetham, Bengaluru</h3>
            <p>B.Tech, Electronics and Computer Engineering</p>
            <span className="edu-meta">CGPA 7.15 / 10</span>
          </div>
        </motion.div>
        <motion.div className="edu-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <div className="edu-year">2022</div>
          <div className="edu-body">
            <h3>Gopalan International School</h3>
            <p>Pre-University (PUC)</p>
          </div>
        </motion.div>
        <motion.div className="edu-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <div className="edu-year">Certifications</div>
          <div className="edu-body">
            <h3>Professional credentials</h3>
            <p>UI/UX Design · Java Developer · Java OOP</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}