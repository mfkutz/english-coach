import { useState, useEffect } from 'react'
import { Zap } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#07071a]/90 backdrop-blur-md border-b border-[#1a1a40]/60' : 'bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
            <Zap size={15} className="text-white fill-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-display font-bold text-base tracking-tight">JobCoach</span>
            <span className="text-[#5555aa] text-[10px] font-mono hidden sm:block">english for tech careers</span>
          </div>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Cómo funciona', href: '#how-it-works' },
            { label: 'Etapas', href: '#journey' },
            { label: 'Roadmap', href: '#roadmap' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#8888bb] hover:text-white text-sm font-body font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-body font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg shadow-indigo-500/25"
        >
          <span>Descargar</span>
          <span className="text-indigo-200 text-xs font-mono hidden sm:inline">— gratis</span>
        </a>
      </div>
    </nav>
  )
}
