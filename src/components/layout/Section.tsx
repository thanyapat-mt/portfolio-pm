interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className} shadow-[0_4px_32px_0_rgba(0,0,0,0.12)]`}>
      <div className="max-w-4xl mx-auto px-6">{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  children: React.ReactNode
  accent?: string
}

export function SectionHeading({ children, accent = 'text-gray-900' }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className={`text-2xl font-bold ${accent}`}>{children}</h2>
      <div className="mt-2 h-0.5 w-12 rounded-full bg-gradient-to-r from-slate-400 to-teal-500" />
    </div>
  )
}
