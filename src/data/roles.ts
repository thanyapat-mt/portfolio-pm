import type { RoleMeta, RoleAccent } from '../types/portfolio'
import { pmData } from './roles/pm'
import { poData } from './roles/po'

const pmAccent: RoleAccent = {
  bg: 'bg-blue-600',
  text: 'text-blue-600',
  pill: 'bg-blue-100 text-blue-700',
  border: 'border-blue-200',
  button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg',
  light: 'bg-gradient-to-br from-blue-50 to-indigo-50',
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
