import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { profile } from '../../data/profile'

interface AboutProps {
  role: RoleMeta
}

export function About({ role }: AboutProps) {
  return (
    <Section id="about">
      <SectionHeading accent={role.accent.text}>Professional Summary</SectionHeading>
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="sm:col-span-2">
          <p className="text-gray-600 leading-relaxed text-base">{role.data.summary}</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Education</p>
            {profile.education.map((edu) => (
              <div key={edu.short} className="mb-4">
                <p className="text-sm font-semibold text-gray-800 leading-snug">{edu.degree}</p>
                <p className="text-xs text-gray-500 mt-0.5">{edu.institution}</p>
                <p className="text-xs text-gray-400 mt-0.5">{edu.period}</p>
                {'coursework' in edu && (
                  <p className="text-xs text-gray-400 mt-1 italic">{(edu as typeof edu & { coursework: string }).coursework}</p>
                )}
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Languages</p>
            <ul className="space-y-1">
              {profile.languages.map((lang) => (
                <li key={lang} className="text-sm text-gray-600">{lang}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Location</p>
            <p className="text-sm text-gray-600">{profile.location}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
