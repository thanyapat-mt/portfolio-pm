import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'

interface ProjectsProps {
  role: RoleMeta
}

export function Projects({ role }: ProjectsProps) {
  const { projects } = role.data
  const { accent } = role

  return (
    <Section id="projects">
      <SectionHeading accent={accent.text}>Key Projects</SectionHeading>
      <div className={`grid gap-5 ${projects.length === 1 ? '' : 'sm:grid-cols-2'}`}>
        {projects.map((project) => (
          <Card key={project.name}>
            <h3 className="font-bold text-white mb-1">{project.name}</h3>
            {project.summary && (
              <p className={`text-xs font-medium mb-4 ${accent.text}`}>{project.summary}</p>
            )}
            {project.bullets && project.bullets.length > 0 ? (
              <ul className="mb-4 space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-400 flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.bg}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : project.impact ? (
              <p className={`text-xs font-semibold mb-4 ${accent.text}`}>Impact: {project.impact}</p>
            ) : null}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Tag key={tag} className={accent.pill}>{tag}</Tag>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-4 text-xs font-semibold ${accent.text} hover:underline`}
              >
                View project →
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
