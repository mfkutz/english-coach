import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="download" className="py-20 px-6 border-t border-[#0f0f2e]">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Zap size={15} className="text-white fill-white" />
              </div>
              <span className="text-white font-display font-bold text-lg">JobCoach</span>
            </div>
            <p className="text-[#6666aa] text-sm font-body leading-relaxed max-w-sm">
              Inglés profesional para personas que trabajan (o quieren trabajar) en empresas internacionales. Vertical inicial: tech.
            </p>
            {/* App store badges (placeholders) */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'App Store', icon: '🍎', sub: 'Próximamente' },
                { label: 'Google Play', icon: '▶', sub: 'Próximamente' },
              ].map((store) => (
                <div
                  key={store.label}
                  className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 cursor-default"
                >
                  <span className="text-lg">{store.icon}</span>
                  <div>
                    <p className="text-[#5555aa] text-[10px] font-mono leading-none">{store.sub}</p>
                    <p className="text-white text-sm font-body font-medium leading-tight">{store.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-[#5555aa] text-xs font-mono uppercase tracking-widest">Seguinos</p>
            <div className="space-y-3">
              {[
                { label: 'Twitter / X', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Roadmap', href: '#roadmap' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-[#8888bb] hover:text-white text-sm font-body transition-colors group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2a2a5a] group-hover:bg-indigo-500 transition-colors" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#0f0f2e]">
          <p className="text-[#4444aa] text-xs font-mono">
            © 2025 JobCoach — Inglés profesional para carreras internacionales
          </p>
          <div className="flex items-center gap-1 text-[#4444aa] text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>En desarrollo activo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
