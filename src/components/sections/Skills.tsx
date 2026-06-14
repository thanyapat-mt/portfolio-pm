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

const toolIcons = [
  {
    name: 'Jira',
    bg: 'bg-[#0052CC]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <path d="M15.977 2.074L8.006 10.04l4.223 4.22 3.748-3.745 3.748 3.746 4.223-4.222zM11.754 14.26L3.783 22.226l8.223 7.7 3.97-3.748-3.748-3.746 3.748-3.745zM20.2 14.26l-3.97 3.748 3.748 3.746-3.748 3.745 3.97 3.748 7.97-7.967z"/>
      </svg>
    ),
  },
  {
    name: 'Trello',
    bg: 'bg-[#0079BF]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <rect x="4" y="4" width="10" height="20" rx="2"/>
        <rect x="18" y="4" width="10" height="13" rx="2"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    bg: 'bg-[#000000]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <path d="M6 6h13l7 7v13H6V6zm7 0v7h7"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    bg: 'bg-[#F24E1E]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <path d="M10 28a5 5 0 0 0 5-5v-5h-5a5 5 0 0 0 0 10z"/>
        <path d="M5 18a5 5 0 0 1 5-5h5V8h-5a5 5 0 0 0 0 10z" opacity=".8"/>
        <path d="M5 8a5 5 0 0 1 5-5h5v10h-5a5 5 0 0 1-5-5z" opacity=".6"/>
        <path d="M15 3h5a5 5 0 0 1 0 10h-5z" opacity=".8"/>
        <circle cx="20" cy="18" r="5" opacity=".9"/>
      </svg>
    ),
  },
  {
    name: 'Draw.io',
    bg: 'bg-[#E6821E]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="4" width="10" height="7" rx="1.5"/>
        <rect x="18" y="21" width="10" height="7" rx="1.5"/>
        <rect x="4" y="21" width="10" height="7" rx="1.5"/>
        <path d="M9 11v5M9 16h14M23 16v5"/>
      </svg>
    ),
  },
  {
    name: 'Canva',
    bg: 'bg-[#00C4CC]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <circle cx="16" cy="16" r="12"/>
        <circle cx="16" cy="16" r="5" fill="#00C4CC"/>
      </svg>
    ),
  },
  {
    name: 'MS Office',
    bg: 'bg-[#D83B01]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <path d="M18 4v24l-14-4V8L18 4zm2 3h8v18h-8"/>
        <path d="M20 10h5M20 15h5M20 20h5" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    bg: 'bg-white border border-gray-200',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22">
        <path d="M16 13h8.5a8 8 0 1 1-2.3-5.7" fill="none" stroke="#4285F4" strokeWidth="2.5"/>
        <path d="M4 16a12 12 0 0 0 20 9" fill="none" stroke="#34A853" strokeWidth="2.5"/>
        <path d="M28 16a12 12 0 0 0-6-10.4" fill="none" stroke="#FBBC05" strokeWidth="2.5"/>
        <circle cx="16" cy="16" r="4" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    bg: 'bg-[#F05032]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <circle cx="24" cy="8" r="3" fill="white" stroke="none"/>
        <circle cx="8" cy="16" r="3" fill="white" stroke="none"/>
        <circle cx="24" cy="24" r="3" fill="white" stroke="none"/>
        <path d="M11 16h9M21 10l-9 4M21 22l-9-4"/>
      </svg>
    ),
  },
  {
    name: 'Claude AI',
    bg: 'bg-[#D4A27A]',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <ellipse cx="16" cy="16" rx="10" ry="13"/>
        <ellipse cx="16" cy="16" rx="13" ry="7" fill="none" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Stitch AI',
    bg: 'bg-slate-700',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M8 10c4-4 12-4 16 0M8 22c4 4 12 4 16 0"/>
        <path d="M10 8c-4 4-4 12 0 16M22 8c4 4 4 12 0 16"/>
        <circle cx="16" cy="16" r="3" fill="white" stroke="none"/>
      </svg>
    ),
  },
]

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
