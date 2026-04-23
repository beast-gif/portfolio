export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span>© 2026 Sai Amrith Reddy</span>
          <span className="footer-sep">·</span>
          <span>Built with React + Vite</span>
        </div>

        <div className="webring">
          <span className="webring-label">amrita.town</span>
          <a href="https://amrita.town/prev" title="Previous site">← prev</a>
          <a href="https://amrita.town" title="amrita.town home">⌂ home</a>
          <a href="https://amrita.town/random" title="Random site">⚄ random</a>
          <a href="https://amrita.town/next" title="Next site">next →</a>
        </div>

        <div className="footer-right">
          <span className="footer-blink">Available for opportunities</span>
        </div>
      </div>
    </footer>
  )
}