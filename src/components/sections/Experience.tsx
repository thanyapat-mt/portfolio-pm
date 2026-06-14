import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'

interface ExperienceProps {
  role: RoleMeta
}

export function Experience({ role }: ExperienceProps) {
  const { experience } = role.data
  const { accent } = role

  return (
    <Section id="experience">
      <SectionHeading accent={accent.text}>Work Experience</SectionHeading>
      <div className="space-y-10">
        {experience.map((exp, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${accent.bg}`} />
              {i < experience.length - 1 && (
                <div className={`w-px flex-1 mt-2 ${accent.border} border-l-2`} />
              )}
            </div>
            <div className="pb-2">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-bold text-gray-900">{exp.role}</h3>
                <span className="text-gray-400 text-sm">·</span>
                <span className="text-sm text-gray-500">{exp.company}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ml-1 ${accent.pill}`}>
                  {exp.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-gray-600 flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.bg}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
