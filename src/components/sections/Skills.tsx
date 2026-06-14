import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { Tag } from '../ui/Tag'

interface SkillsProps {
  role: RoleMeta
}

const groupIcons: Record<string, React.ReactNode> = {
  'Project Management': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  ),
  'Methodology': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  ),
  'Business Analysis': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  'Collaboration & PM Tools': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  'Technical': (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
}

export function Skills({ role }: SkillsProps) {
  const { skillGroups } = role.data
  const { accent } = role

  return (
    <Section id="skills" className={accent.light}>
      <SectionHeading accent={accent.text}>Technical Skills &amp; Tools</SectionHeading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start mb-8">
        {skillGroups.map((group, i) => (
          <div key={group.label} className={`bg-white rounded-xl border border-gray-100 p-5 shadow-sm ${i === 3 ? 'lg:col-span-2' : ''}`}>
            <div className={`flex items-center gap-1.5 mb-3 ${accent.text}`}>
              {groupIcons[group.label]}
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {group.label}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill} className={accent.pill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>

    </Section>
  )
}
