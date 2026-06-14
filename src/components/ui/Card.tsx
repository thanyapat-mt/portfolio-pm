interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-slate-900 rounded-2xl border border-slate-700/60 shadow-sm p-6 hover:border-slate-600 hover:-translate-y-1 transition-all duration-200 ${className}`}>
      {children}
    </div>
  )
}
