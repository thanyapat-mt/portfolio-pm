import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'

interface ContactProps {
  role: RoleMeta
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81a19.79 19.79 0 0 1-3.07-8.68A2 2 0 0 1 2 .7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Contact({ role }: ContactProps) {
  const { accent } = role

  return (
    <Section id="contact">
      <SectionHeading accent={accent.text}>Contact</SectionHeading>
      <div className={`rounded-2xl border ${accent.border} overflow-hidden`}>
        <div className={`${accent.bg} h-1.5 w-full`} />
        <div className="p-8 sm:p-10">
          <div className="text-center mb-8">
            <p className="text-2xl font-extrabold text-gray-900">{profile.name}</p>
            <p className={`text-sm font-semibold mt-1 ${accent.text}`}>{role.name}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border ${accent.border} text-sm text-gray-700 hover:shadow-sm transition-shadow`}
            >
              <span className={accent.text}><MailIcon /></span>
              {profile.email}
            </a>
            <div className={`flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border ${accent.border} text-sm text-gray-700`}>
              <span className={accent.text}><PhoneIcon /></span>
              {profile.phone}
            </div>
            <div className={`flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border ${accent.border} text-sm text-gray-700`}>
              <span className={accent.text}><PinIcon /></span>
              {profile.location}
            </div>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white border ${accent.border} text-sm text-gray-700 hover:shadow-sm transition-shadow`}
              >
                <span className={accent.text}><LinkedInIcon /></span>
                LinkedIn
              </a>
            )}
          </div>

          <div className="text-center">
            <Button href={`mailto:${profile.email}`} className={accent.button}>
              Send a message
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
