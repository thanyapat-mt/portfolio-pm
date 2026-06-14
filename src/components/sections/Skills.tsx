import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { Tag } from '../ui/Tag'

interface SkillsProps {
  role: RoleMeta
}

export function Skills({ role }: SkillsProps) {
  const { skillGroups, tools } = role.data
  const { accent } = role

  return (
    <Section id="skills" className={accent.light}>
      <SectionHeading accent={accent.text}>Technical Skills &amp; Tools</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {skillGroups.map((group) => (
          <div key={group.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill} className={accent.pill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
        {tools.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Tag key={tool} className="bg-blue-50 text-blue-600">{tool}</Tag>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
