interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline'
  className?: string
  children: React.ReactNode
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors duration-150'
  const outline = 'border-2 border-current hover:bg-gray-50'
  return (
    <a
      className={`${base} ${variant === 'outline' ? outline : ''} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
