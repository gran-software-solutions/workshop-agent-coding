export interface Product {
  id: string
  name: string
  description?: string
  price: number
  categoryId: string
  quantity: number
  unit?: string
  checked: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ShoppingList {
  id: string
  name: string
  products: Product[]
  createdAt: Date
  completedAt?: Date
}

export interface ProductFormData {
  name: string
  description?: string
  price: number
  categoryId: string
  quantity: number
  unit?: string
}