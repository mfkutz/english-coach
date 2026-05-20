import PhoneMockup from '../components/PhoneMockup'

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-grid pt-16">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-indigo-300 text-xs font-mono font-medium">Proximamente en App Store & Google Play</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white">
                El inglés profesional que{' '}
                <span className="text-gradient">necesitás para crecer</span>{' '}
                en empresas internacionales
              </h1>
              <p className="text-[#8888bb] text-lg lg:text-xl font-body leading-relaxed max-w-xl">
                No es otra app de inglés. Es tu coach para entrevistas, reuniones, 1:1s y todo lo que viene después.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#download"
                className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-body font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
                Descargar app
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-body font-medium px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Ver cómo funciona
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-2">
                {['#6366f1','#8b5cf6','#a78bfa','#c4b5fd','#ddd6fe'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#07071a] flex items-center justify-center text-[10px] text-white font-bold font-mono"
                    style={{ backgroundColor: color }}
                  >
                    {['M','A','J','L','C'][i]}
                  </div>
                ))}
              </div>
              <p className="text-[#6666aa] text-sm font-body">
                <span className="text-white font-semibold">200+</span> devs en lista de espera
              </p>
            </div>
          </div>

          {/* Phone mockup + floating cards */}
          <div className="relative flex justify-center items-center h-[560px]">
            {/* Floating card: Feedback */}
            <div className="absolute top-8 -left-4 lg:left-0 z-20 animate-float-delayed">
              <div className="bg-[#0d0d28]/95 backdrop-blur border border-[#1e1e50] rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[10px] text-[#6666aa] font-mono uppercase tracking-wider mb-1">Grammar</p>
                <div className="flex items-center gap-2">
                  <span className="text-white font-display font-bold text-xl">8.4</span>
                  <span className="text-green-400 text-xs font-mono">↑ +2.1</span>
                </div>
                <div className="flex gap-1 mt-1.5">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className={`h-1 w-3 rounded-full ${i <= 8 ? 'bg-indigo-500' : 'bg-[#1e1e50]'}`} />
                  ))}
                  {[9,10].map(i => (
                    <div key={i} className="h-1 w-3 rounded-full bg-[#1e1e50]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="relative z-10">
              <PhoneMockup />
            </div>

            {/* Floating card: Streak */}
            <div className="absolute bottom-12 -right-4 lg:right-0 z-20 animate-float-slow">
              <div className="bg-[#0d0d28]/95 backdrop-blur border border-[#1e1e50] rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[10px] text-[#6666aa] font-mono uppercase tracking-wider mb-1">Sesión completada</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-body font-semibold">1:1 con Manager</p>
                    <p className="text-[#6666aa] text-[10px] font-mono">Fluency 7.8 · Clarity 8.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07071a] to-transparent pointer-events-none" />
    </section>
  )
}
