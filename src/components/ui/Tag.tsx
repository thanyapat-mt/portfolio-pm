interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${className}`}>
      {children}
    </span>
  )
}
