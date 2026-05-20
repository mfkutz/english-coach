import { MessageSquare, Mic, BarChart2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '1',
    icon: MessageSquare,
    title: 'Contás qué tenés',
    description:
      '¿Tenés una entrevista, una presentación, un 1:1? Elegís la situación y agregás el contexto real: nombre de la empresa, descripción del puesto, agenda de la reunión.',
    detail: '"Tengo una entrevista técnica en Stripe el jueves"',
  },
  {
    number: '2',
    icon: Mic,
    title: 'Practicás en roleplay real',
    description:
      'La IA actúa como el entrevistador, tu manager o tu equipo. El roleplay está personalizado con tu contexto, no es una simulación genérica.',
    detail: '"Tell me about a challenging project you led recently..."',
  },
  {
    number: '3',
    icon: BarChart2,
    title: 'Mejorás con feedback concreto',
    description:
      'Al terminar la sesión recibís un análisis de gramática, claridad y estructura. Ves exactamente en qué mejorar y cómo vas evolucionando sesión a sesión.',
    detail: 'Clarity 7.8 · Grammar 8.2 · Structure 7.1',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-20 out-of-view transition-all duration-700 ${inView ? 'in-view' : ''}`}
        >
          <p className="text-indigo-400 text-sm font-mono font-medium uppercase tracking-widest mb-4">
            Cómo funciona
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Así funciona
          </h2>
          <p className="text-[#8888bb] text-lg font-body max-w-lg mx-auto">
            Una sesión de 10 minutos con contexto real vale más que un mes de ejercicios genéricos.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1a1a50] to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-last'
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-4 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`flex items-center gap-3 ${isEven ? 'lg:justify-end' : ''}`}>
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                        <Icon size={16} className="text-indigo-400" />
                      </div>
                      <span className="text-[#5555aa] font-mono text-sm">Paso {step.number}</span>
                    </div>
                    <h3 className="font-display font-bold text-white text-2xl lg:text-3xl">
                      {step.title}
                    </h3>
                    <p className="text-[#8888bb] font-body text-base leading-relaxed max-w-md lg:ml-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Step indicator (center, desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#07071a] border-2 border-indigo-500 flex items-center justify-center">
                      <span className="text-indigo-400 font-mono font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Visual card */}
                  <div>
                    <div className="bg-[#0d0d28] border border-[#1a1a40] rounded-2xl p-6 border-gradient">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-400/60" />
                        <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                        <div className="w-2 h-2 rounded-full bg-green-400/60" />
                        <span className="ml-2 text-[#4444aa] text-xs font-mono">jobcoach.app</span>
                      </div>
                      <div className="bg-[#07071a] rounded-xl p-4 border border-[#111140]">
                        <p className="text-indigo-300 font-mono text-sm italic">
                          "{step.detail}"
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="flex-1 h-1.5 bg-[#111140] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
                            style={{ width: ['60%', '80%', '70%'][idx] }}
                          />
                        </div>
                        <span className="text-[#5555aa] font-mono text-[10px]">
                          {['60%', '80%', '70%'][idx]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
