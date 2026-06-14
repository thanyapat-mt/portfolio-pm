import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { Tag } from '../ui/Tag'

interface SkillsProps {
  role: RoleMeta
}

export function Skills({ role }: SkillsProps) {
  const { skillGroups } = role.data
  const { accent } = role

  return (
    <Section id="skills">
      <SectionHeading accent={accent.text}>Technical Skills &amp; Tools</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {skillGroups.map((group) => (
          <div key={group.label} className="bg-slate-900 rounded-xl border border-slate-700/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {group.label}
            </p>
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
