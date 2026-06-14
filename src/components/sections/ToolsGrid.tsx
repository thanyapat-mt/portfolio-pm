import type { RoleMeta } from '../../types/portfolio'
import { Section, SectionHeading } from '../layout/Section'

interface ToolsGridProps {
  role: RoleMeta
}

const tools = [
  {
    name: 'Jira',
    bg: 'bg-[#0052CC]',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M15.977 2.074L8.006 10.04l4.223 4.22 3.748-3.745 3.748 3.746 4.223-4.222zM11.754 14.26L3.783 22.226l8.223 7.7 3.97-3.748-3.748-3.746 3.748-3.745zM20.2 14.26l-3.97 3.748 3.748 3.746-3.748 3.745 3.97 3.748 7.97-7.967z"/>
      </svg>
    ),
  },
  {
    name: 'Trello',
    bg: 'bg-[#0079BF]',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <rect x="4" y="4" width="10" height="20" rx="2"/>
        <rect x="18" y="4" width="10" height="13" rx="2"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    bg: 'bg-[#000000]',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M6 6h13l7 7v13H6V6zm7 0v7h7"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    bg: 'bg-[#F24E1E]',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
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
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="white" strokeWidth="2">
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
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <circle cx="16" cy="16" r="12"/>
        <circle cx="16" cy="16" r="5" fill="#00C4CC"/>
      </svg>
    ),
  },
  {
    name: 'MS Office',
    bg: 'bg-[#D83B01]',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <path d="M18 4v24l-14-4V8L18 4zm2 3h8v18h-8"/>
        <path d="M20 10h5M20 15h5M20 20h5" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    bg: 'bg-white border-2 border-gray-200',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26">
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
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
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
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
        <ellipse cx="16" cy="16" rx="10" ry="13"/>
        <ellipse cx="16" cy="16" rx="13" ry="7" fill="none" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Stitch AI',
    bg: 'bg-slate-700',
    icon: (
      <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M8 10c4-4 12-4 16 0M8 22c4 4 12 4 16 0"/>
        <path d="M10 8c-4 4-4 12 0 16M22 8c4 4 4 12 0 16"/>
        <circle cx="16" cy="16" r="3" fill="white" stroke="none"/>
      </svg>
    ),
  },
]

export function ToolsGrid({ role }: ToolsGridProps) {
  const { accent } = role
  return (
    <Section id="tools" className={accent.light}>
      <SectionHeading accent={accent.text}>Tools I Work With</SectionHeading>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-2 group">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200 ${tool.bg}`}
            >
              {tool.icon}
            </div>
            <span className="text-xs text-gray-500 font-medium text-center leading-tight">{tool.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
