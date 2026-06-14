import type { RoleMeta, RoleAccent } from '../types/portfolio'
import { pmData } from './roles/pm'
import { poData } from './roles/po'

const pmAccent: RoleAccent = {
  bg: 'bg-teal-600',
  text: 'text-teal-700',
  pill: 'bg-teal-50 text-teal-700 border border-teal-200',
  border: 'border-teal-200',
  button: 'bg-slate-800 hover:bg-slate-700 text-white shadow-md hover:shadow-lg',
  light: 'bg-gradient-to-br from-slate-50 to-teal-50/60',
}

const poAccent: RoleAccent = {
  bg: 'bg-indigo-600',
  text: 'text-indigo-600',
  pill: 'bg-indigo-100 text-indigo-700',
  border: 'border-indigo-200',
  button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg',
  light: 'bg-gradient-to-br from-blue-50 to-indigo-50',
}

export const PM_ROLE: RoleMeta = {
  slug: 'pm',
  name: 'Project Manager',
  accent: pmAccent,
  data: pmData,
}

export const PO_ROLE: RoleMeta = {
  slug: 'po',
  name: 'Product Owner',
  accent: poAccent,
  data: poData,
}
