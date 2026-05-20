type BadgeVariant = 'active' | 'next' | 'planned'

interface BadgeProps {
  variant: BadgeVariant
  label: string
}

const styles: Record<BadgeVariant, string> = {
  active: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40',
  next: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
  planned: 'bg-slate-500/15 text-slate-400 border border-slate-500/25',
}

const dots: Record<BadgeVariant, string> = {
  active: 'bg-indigo-400 animate-pulse',
  next: 'bg-amber-400',
  planned: 'bg-slate-500',
}

export default function Badge({ variant, label }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium ${styles[variant]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dots[variant]}`} />
      {label}
    </span>
  )
}
