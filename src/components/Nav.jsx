import { Sun, Moon } from 'lucide-react'

export default function Nav({ theme, toggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/profile.jpg" alt="Sai Amrith Reddy" className="nav-avatar" />
        <div className="nav-logo">amrith.dev</div>
      </div>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}