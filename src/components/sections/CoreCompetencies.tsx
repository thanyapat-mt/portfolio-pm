import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'

interface CoreCompetenciesProps {
  role: RoleMeta
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function CoreCompetencies({ role }: CoreCompetenciesProps) {
  const { competencies } = role.data
  const { accent } = role

  if (!competencies || competencies.length === 0) return null

  return (
    <Section id="competencies" className={accent.light}>
      <SectionHeading accent={accent.text}>Core Competencies</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {competencies.map((item) => (
          <div
            key={item}
            className={`flex items-center gap-2.5 bg-white rounded-xl border ${accent.border} px-4 py-3 shadow-sm`}
          >
            <span className={`flex-shrink-0 ${accent.text}`}><CheckIcon /></span>
            <span className="text-sm font-medium text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
