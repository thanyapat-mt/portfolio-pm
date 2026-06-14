import type { RolePortfolio } from '../../types/portfolio'

export const poData: RolePortfolio = {
  hero: {
    title: 'Product Owner',
    tagline: 'Junior Product Owner · Bangkok, Thailand',
    intro:
      'Junior Product Owner with an IT background, skilled in translating business needs into prioritized backlogs and actionable user stories. Experienced across the full product lifecycle — from user research and requirement analysis to UX/UI design and stakeholder alignment. Comfortable bridging business and development teams, and leveraging AI tools to support data-driven product decisions.',
  },
  summary:
    'Junior Product Owner with an IT background, skilled in translating business needs into prioritized backlogs and actionable user stories. Experienced across the full product lifecycle — from user research and requirement analysis to UX/UI design and stakeholder alignment. Comfortable bridging business and development teams, and leveraging AI tools to support data-driven product decisions.',
  skillGroups: [
    {
      label: 'Product & Business',
      skills: [
        'Agile (Scrum, Sprint)',
        'Waterfall',
        'User Story',
        'Requirement Analysis',
        'Business Requirement Document',
        'User Flow Design',
        'Use Case Diagrams',
      ],
    },
    {
      label: 'Design & Collaboration Tools',
      skills: ['Figma', 'Draw.io', 'Canva', 'Jira', 'Microsoft Office'],
    },
    {
      label: 'Technical',
      skills: ['Programming Fundamentals', 'Git', 'Claude AI', 'Stitch AI'],
    },
  ],
  tools: [],
  experience: [
    {
      company: 'Luck Siam Global Co., Ltd.',
      role: 'IT Support',
      period: 'Mar 2025 – May 2025',
      bullets: [
        'Coordinated a warehouse CCTV installation project across 1 site, handling on-site stakeholder interviews and translating operational requirements into an installation scope.',
        'Managed and cleaned 100+ customer records in the CRM system, cross-checking data from Sales teams and online forms to eliminate duplicates and improve data accuracy.',
        'Supported IT operations for 10+ end-users, owning the onboarding checklist process and handling hardware maintenance including RAM upgrades and peripheral setup.',
      ],
    },
  ],
  projects: [
    {
      name: 'ICare KMUTNB',
      bullets: [
        'Conducted user research with 50+ users, translating healthcare pain points into 15+ user stories and a prioritized product backlog that shaped the feature roadmap.',
        'Led end-to-end product delivery over 3 months — owning User Flow mapping, UX/UI design, and stakeholder alignment, while personally building the fullstack application using Next.js, React, Node.js (Elysia), Prisma, and MySQL.',
        'Produced full project documentation including Use Case Diagrams, Flowcharts, and a BRD, ensuring traceability from user needs through to system design.',
      ],
      tags: ['Product Ownership', 'User Research', 'UX/UI', 'Next.js', 'React', 'Node.js (Elysia)', 'Prisma', 'MySQL'],
    },
  ],
}
