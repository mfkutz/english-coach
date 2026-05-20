import Badge from '../components/Badge'
import { useInView } from '../hooks/useInView'
import { Check, Circle } from 'lucide-react'

const phases = [
  {
    number: '00',
    name: 'Pivote',
    status: 'active' as const,
    statusLabel: 'En curso',
    description: 'Redefinir la app como coach de carrera completo, no solo entrevistas.',
    items: [
      { done: true, text: 'Pipeline de audio (STT → GPT → TTS)' },
      { done: true, text: 'Auth, suscripción, feedback estructurado' },
      { done: false, text: 'Onboarding por situación ("¿qué tenés esta semana?")' },
      { done: false, text: '6 situaciones iniciales con roleplay' },
      { done: false, text: 'Home por etapa de carrera' },
    ],
  },
  {
    number: '01',
    name: 'Catálogo completo',
    status: 'next' as const,
    statusLabel: 'Próximo',
    description: 'Cubrir las 4 etapas del journey con situaciones reales y contexto del usuario.',
    items: [
      { done: false, text: '15+ situaciones profesionales' },
      { done: false, text: 'Subir JD, CV o agenda de reunión' },
      { done: false, text: 'Sesiones de duración flexible (5/10/15 min)' },
      { done: false, text: 'Guardar contexto de empresa y rol' },
    ],
  },
  {
    number: '02',
    name: 'Retención',
    status: 'planned' as const,
    statusLabel: 'Planificado',
    description: 'Que el usuario tenga razones para volver todos los días.',
    items: [
      { done: false, text: 'Historial y progreso por situación' },
      { done: false, text: 'Streak diario y metas semanales' },
      { done: false, text: 'Sugerencias basadas en feedback recibido' },
      { done: false, text: 'Onboarding progresivo post-registro' },
    ],
  },
  {
    number: '03',
    name: 'Diferenciadores',
    status: 'planned' as const,
    statusLabel: 'Planificado',
    description: 'Features que nos separan de cualquier app genérica de inglés.',
    items: [
      { done: false, text: 'Roleplay con empresa real (usa JD para personalizar)' },
      { done: false, text: 'Práctica de Slack y email profesional' },
      { done: false, text: 'Distintos acentos (americano, británico, indio)' },
      { done: false, text: 'Vocabulary builder por situación' },
    ],
  },
]

const phaseColors = {
  active: { num: 'text-indigo-500/40', border: 'border-indigo-500/30', glow: 'shadow-indigo-500/10' },
  next: { num: 'text-amber-500/30', border: 'border-amber-500/20', glow: 'shadow-amber-500/5' },
  planned: { num: 'text-slate-500/25', border: 'border-slate-500/15', glow: '' },
}

export default function Roadmap() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="roadmap" className="py-14 px-6 bg-[#05050f] relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-10 out-of-view transition-all duration-700 ${inView ? 'in-view' : ''}`}
        >
          <p className="text-indigo-400 text-sm font-mono font-medium uppercase tracking-widest mb-4">
            Roadmap público
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Lo que estamos construyendo
          </h2>
          <p className="text-[#8888bb] text-lg font-body max-w-xl mx-auto">
            Transparencia total. Esto es lo que viene y en qué estamos trabajando ahora mismo.
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {phases.map((phase, idx) => {
            const colors = phaseColors[phase.status]
            return (
              <div
                key={phase.number}
                className={`relative bg-[#0a0a20] border ${colors.border} rounded-2xl overflow-hidden flex flex-col shadow-lg ${colors.glow} card-hover`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Phase header */}
                <div className="px-5 pt-5 pb-4 border-b border-[#111135]">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`font-mono font-bold text-4xl leading-none select-none ${colors.num}`}>
                      {phase.number}
                    </span>
                    <Badge variant={phase.status} label={phase.statusLabel} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg leading-tight mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-[#6666aa] text-xs font-body leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-1.5 px-5 py-4 flex-1">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      {item.done ? (
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex-shrink-0 flex items-center justify-center">
                          <Check size={9} className="text-indigo-400" strokeWidth={3} />
                        </div>
                      ) : (
                        <Circle
                          size={16}
                          className={`mt-0.5 flex-shrink-0 ${
                            phase.status === 'active'
                              ? 'text-[#2a2a5a]'
                              : 'text-[#1e1e35]'
                          }`}
                        />
                      )}
                      <span
                        className={`text-xs font-body leading-relaxed ${
                          item.done ? 'text-[#8888bb] line-through' :
                          phase.status === 'active' ? 'text-[#aaaacc]' : 'text-[#6666aa]'
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Active glow bottom bar */}
                {phase.status === 'active' && (
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                )}
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#4444aa] text-sm font-mono mt-10">
          ¿Tenés ideas? El roadmap evoluciona con el feedback de usuarios.
        </p>
      </div>
    </section>
  )
}
