import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const checkHover = (e) => {
      const el = e.target
      const isInteractive = el.closest('a, button, input, textarea, [role="button"]')
      setHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkHover)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkHover)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </>
  )
}