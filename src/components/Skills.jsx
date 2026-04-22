import { motion } from 'framer-motion'

const groups = [
  { label: 'Languages', items: ['Python', 'Java', 'C', 'Kotlin'] },
  { label: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLP', 'Computer Vision'] },
  { label: 'Web & Backend', items: ['Flask', 'React', 'REST APIs', 'MySQL'] },
  { label: 'Tooling', items: ['Git', 'Linux', 'Manim'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Tech <span>stack</span></h2>
      </div>
      <div className="skills-grid">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            className="skill-group"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <h4 className="skill-label">{g.label}</h4>
            <div className="skill-items">
              {g.items.map(s => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}