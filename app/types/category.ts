export interface Category {
  id: string
  name: string
  icon: string
  color: string
  order: number
  createdAt: Date
  updatedAt: Date
}

export interface CategoryFormData {
  name: string
  icon: string
  color: string
}

export type CategoryColor = 
  | 'red' | 'orange' | 'yellow' | 'green' 
  | 'blue' | 'purple' | 'pink' | 'gray'

export const CATEGORY_COLORS: Record<CategoryColor, string> = {
  red: '#ef4444',
  orange: '#f97316',
  yellow: '#eab308',
  green: '#22c55e',
  blue: '#3b82f6',
  purple: '#8b5cf6',
  pink: '#ec4899',
  gray: '#6b7280'
}

export const CATEGORY_COLOR_NAMES: CategoryColor[] = [
  'red', 'orange', 'yellow', 'green',
  'blue', 'purple', 'pink', 'gray'
]