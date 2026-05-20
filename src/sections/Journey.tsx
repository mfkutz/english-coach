import { Briefcase, Sunrise, Coffee, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const stages = [
  {
    number: '01',
    icon: Briefcase,
    title: 'Antes del trabajo',
    color: 'indigo',
    situations: [
      'Entrevistas técnicas',
      'Behavioral questions',
      'Negociación salarial',
      'Follow-ups por email',
    ],
  },
  {
    number: '02',
    icon: Sunrise,
    title: 'Primeras semanas',
    color: 'violet',
    situations: [
      'Presentarte al equipo',
      'Standups diarios',
      'Hacer preguntas sin miedo',
      'Slack y email profesional',
    ],
  },
  {
    number: '03',
    icon: Coffee,
    title: 'Día a día',
    color: 'purple',
    situations: [
      '1:1s con tu manager',
      'Dar updates de proyecto',
      'Expresar desacuerdo con tacto',
      'Small talk con el equipo',
    ],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Crecimiento',
    color: 'fuchsia',
    situations: [
      'Performance reviews',
      'Pedir aumento o promoción',
      'Dar feedback al equipo',
      'Liderar reuniones',
    ],
  },
]

const colorMap: Record<string, { border: string; bg: string; icon: string; num: string }> = {
  indigo: {
    border: 'hover:border-indigo-500/40',
    bg: 'bg-indigo-500/10',
    icon: 'text-indigo-400',
    num: 'text-indigo-500/20',
  },
  violet: {
    border: 'hover:border-violet-500/40',
    bg: 'bg-violet-500/10',
    icon: 'text-violet-400',
    num: 'text-violet-500/20',
  },
  purple: {
    border: 'hover:border-purple-500/40',
    bg: 'bg-purple-500/10',
    icon: 'text-purple-400',
    num: 'text-purple-500/20',
  },
  fuchsia: {
    border: 'hover:border-fuchsia-500/40',
    bg: 'bg-fuchsia-500/10',
    icon: 'text-fuchsia-400',
    num: 'text-fuchsia-500/20',
  },
}

export default function Journey() {
  const { ref, inView } = useInView()

  return (
    <section id="journey" className="py-14 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-10 out-of-view transition-all duration-700 ${inView ? 'in-view' : ''}`}
        >
          <p className="text-indigo-400 text-sm font-mono font-medium uppercase tracking-widest mb-4">
            El journey completo
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Te acompañamos en cada etapa
          </h2>
          <p className="text-[#8888bb] text-lg font-body max-w-xl mx-auto">
            No solo para conseguir el trabajo. Ahí recién empieza todo.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage, idx) => {
            const colors = colorMap[stage.color]
            const Icon = stage.icon
            return (
              <div
                key={stage.number}
                className={`relative bg-[#0d0d28] border border-[#1a1a40] rounded-2xl p-6 card-hover ${colors.border} group`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Large background number */}
                <span className={`absolute top-4 right-4 font-display font-bold text-7xl leading-none select-none ${colors.num} group-hover:opacity-40 transition-opacity`}>
                  {stage.number}
                </span>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon size={18} className={colors.icon} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg mb-4 leading-tight">
                  {stage.title}
                </h3>

                {/* Situations */}
                <ul className="space-y-2">
                  {stage.situations.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[#8888bb] font-body group-hover:text-[#aaaacc] transition-colors">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2a2a5a] flex-shrink-0 group-hover:bg-indigo-500/50 transition-colors" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Connector hint */}
        <div className="hidden lg:flex justify-between items-center mt-4 px-8 pointer-events-none select-none">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 mx-4 h-px bg-gradient-to-r from-[#1a1a40] via-indigo-500/20 to-[#1a1a40]" />
          ))}
        </div>
      </div>
    </section>
  )
}
