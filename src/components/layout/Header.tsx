import type { RoleMeta } from '../../types/portfolio'
import { profile } from '../../data/profile'

interface HeaderProps {
  role: RoleMeta
}

export function Header({ role }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800 shadow-sm shadow-black/20">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className={`font-black text-sm ${role.accent.text}`}>M.Thanyapat</span>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className={`text-sm font-semibold px-3 py-1.5 rounded-lg border ${role.accent.border} ${role.accent.text} hover:bg-sky-950/50 transition-colors`}
        >
          Contact
        </a>
      </div>
    </header>
  )
}
