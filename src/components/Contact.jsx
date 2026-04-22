import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.msg}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:bl.en.u4eac23051@bl.students.amrita.edu?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Get in <span>touch</span></h2>
      </div>
      <div className="contact-wrap">
        <div className="contact-info">
          <p className="contact-lead">
            Open to internships, collaborations, and interesting problems.
          </p>
          <div className="contact-meta">
            <div>
              <span>Email</span>
              <a href="mailto:bl.en.u4eac23051@bl.students.amrita.edu" style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: '13px', wordBreak: 'break-all' }}>
                bl.en.u4eac23051@bl.students.amrita.edu
              </a>
            </div>
            <div>
              <span>Phone</span>
              <span style={{ color: 'var(--ink)', textTransform: 'none', fontSize: '13px', letterSpacing: 0 }}>+91 82170 97271</span>
            </div>
            <div>
              <span>Location</span>
              <span style={{ color: 'var(--ink)', textTransform: 'none', fontSize: '13px', letterSpacing: 0 }}>Bangalore, India</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input required type="text" placeholder="Your name"
            value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Your email"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <textarea required rows="5" placeholder="Your message"
            value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} />
          <button type="submit" className="btn btn-primary">
            <Send size={14} /> {sent ? 'Sent' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}