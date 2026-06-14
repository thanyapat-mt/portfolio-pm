import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { profile } from '../../data/profile'

interface AboutProps {
  role: RoleMeta
}

export function About({ role }: AboutProps) {
  return (
    <Section id="about" className="bg-slate-900">
      <SectionHeading accent={role.accent.text}>Professional Summary</SectionHeading>
      <div className="grid sm:grid-cols-3 gap-8">
        <div className="sm:col-span-2">
          <p className="text-slate-300 leading-relaxed text-base">{role.data.summary}</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Education</p>
            {profile.education.map((edu) => (
              <div key={edu.short} className="mb-4">
                <p className="text-sm font-semibold text-white leading-snug">{edu.degree}</p>
                <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                <p className="text-xs text-slate-500 mt-0.5">{edu.period}</p>
                {'coursework' in edu && (
                  <p className="text-xs text-slate-500 mt-1 italic">{(edu as typeof edu & { coursework: string }).coursework}</p>
                )}
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Languages</p>
            <ul className="space-y-1">
              {profile.languages.map((lang) => (
                <li key={lang} className="text-sm text-slate-300">{lang}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Location</p>
            <p className="text-sm text-slate-300">{profile.location}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
