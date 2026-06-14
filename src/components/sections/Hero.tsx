import type { RoleMeta } from '../../types/portfolio'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'

interface HeroProps {
  role: RoleMeta
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81a19.79 19.79 0 0 1-3.07-8.68A2 2 0 0 1 2 .7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export function Hero({ role }: HeroProps) {
  const { highlights } = role.data
  const { accent } = role
  const initials = profile.name.split(' ').map(w => w[0]).join('')

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 pt-20 pb-16 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="flex items-center justify-between gap-10">

          <div className="flex-1 min-w-0">
            <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${accent.pill}`}>
              {role.data.hero.title}
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-slate-800 to-teal-700 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className={`text-sm font-medium mb-7 ${accent.text}`}>
              IT Background · English &amp; Thai · Agile | Scrum | Waterfall
            </p>

            <div className="flex flex-col gap-2.5 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <span className={accent.text}><MailIcon /></span>
                {profile.email}
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <span className={accent.text}><PhoneIcon /></span>
                {profile.phone}
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <span className={accent.text}><PinIcon /></span>
                {profile.location}
              </span>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <span className={accent.text}><LinkedInIcon /></span>
                  LinkedIn
                </a>
              )}
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <span className={accent.text}><GitHubIcon /></span>
                  GitHub
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`} className={accent.button}>
                Get in touch
              </Button>
              <Button
                href="/Thanyapat_Montha_CV.pdf"
                download
                variant="outline"
                className={accent.text}
              >
                <DownloadIcon /> Download CV
              </Button>
            </div>
          </div>

          <div className="hidden sm:flex flex-shrink-0 items-center justify-center animate-float">
            <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-slate-700 to-teal-600 shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-black tracking-tight bg-gradient-to-br from-slate-800 to-teal-700 bg-clip-text text-transparent">
                  {initials}
                </span>
              </div>
            </div>
          </div>

        </div>

        {highlights && highlights.length > 0 && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className={`rounded-2xl border ${accent.border} bg-white p-5`}>
                <div className={`text-2xl font-extrabold ${accent.text}`}>{h.metric}</div>
                <div className="text-sm text-gray-500 mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
