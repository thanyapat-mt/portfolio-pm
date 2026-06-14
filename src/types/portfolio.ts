export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface Project {
  name: string
  summary?: string
  bullets?: string[]
  tags: string[]
  link?: string
  impact?: string
}

export interface Highlight {
  metric: string
  label: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface RolePortfolio {
  hero: {
    title: string
    tagline: string
    intro: string
  }
  summary: string
  skillGroups: SkillGroup[]
  tools: string[]
  experience: Experience[]
  projects: Project[]
  highlights?: Highlight[]
}

export interface RoleMeta {
  slug: string
  name: string
  accent: RoleAccent
  data: RolePortfolio
}

export type RoleSlug = 'po' | 'pm' | 'ba' | 'cs' | 'ux-ui' | 'bd'

export interface RoleAccent {
  bg: string
  text: string
  pill: string
  border: string
  button: string
  light: string
}
