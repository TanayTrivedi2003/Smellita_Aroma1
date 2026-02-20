export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: "perfume" | "attar" | "gift-set" | "accessories"
  image: string
  images: string[]
  inStock: boolean
  featured: boolean
  notes: {
    top?: string[]
    middle?: string[]
    base?: string[]
  }
  size: string
  sku: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  customerInfo: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    pincode: string
  }
  status: "pending" | "confirmed" | "shipped" | "delivered"
  createdAt: Date
}
