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

export function Hero({ role }: HeroProps) {
  const { highlights } = role.data
  const { accent } = role
  const initials = profile.name.split(' ').map(w => w[0]).join('')

  return (
    <section className="bg-slate-950 pt-20 pb-16 relative overflow-hidden">
      {/* decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-700/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="flex items-center justify-between gap-10">

          {/* Left — content */}
          <div className="flex-1 min-w-0">
            <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${accent.pill}`}>
              {role.data.hero.title}
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-3 text-white">
              {profile.name}
            </h1>
            <p className={`text-lg font-medium mb-7 ${accent.text}`}>
              IT Background · English &amp; Thai · Agile | Scrum | Waterfall
            </p>

            <div className="flex flex-col gap-2.5 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <span className={accent.text}><MailIcon /></span>
                {profile.email}
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <span className={accent.text}><PhoneIcon /></span>
                {profile.phone}
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <span className={accent.text}><PinIcon /></span>
                {profile.location}
              </span>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
                >
                  <span className={accent.text}><LinkedInIcon /></span>
                  LinkedIn
                </a>
              )}
            </div>

            <Button href={`mailto:${profile.email}`} className={accent.button}>
              Get in touch
            </Button>
          </div>

          {/* Right — initials avatar */}
          <div className="hidden sm:flex flex-shrink-0 items-center justify-center animate-float">
            <div className={`w-40 h-40 rounded-full p-0.5 bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-900/30`}>
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <span className={`text-4xl font-black tracking-tight ${accent.text}`}>
                  {initials}
                </span>
              </div>
            </div>
          </div>

        </div>

        {highlights && highlights.length > 0 && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className={`rounded-2xl border ${accent.border} bg-slate-900 p-5`}>
                <div className={`text-2xl font-extrabold ${accent.text}`}>{h.metric}</div>
                <div className="text-sm text-slate-400 mt-1">{h.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
