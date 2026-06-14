import type { RoleMeta } from '../../types/portfolio'
import { profile } from '../../data/profile'

interface HeaderProps {
  role?: RoleMeta
}

export function Header({ }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-blue-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">M.Thanyapat</span>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-500">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
