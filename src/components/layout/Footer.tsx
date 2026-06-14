import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800">
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <span>{profile.name} · {profile.location}</span>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-slate-300 transition-colors">
              {profile.email}
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
