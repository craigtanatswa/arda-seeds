export interface Product {
  id: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  maturity: string
  yieldPotential: string
  features: string[]
  regions: string[]
  image: string
  featured: boolean
}

export interface QuoteRequest {
  fullName: string
  email: string
  phone: string
  company?: string
  address: string
  products: {
    productId: string
    quantity: number
  }[]
  message?: string
}

export interface GrowerRegistration {
  fullName: string
  email: string
  phone: string
  farmName: string
  farmLocation: string
  farmSize: string
  cropsGrown: string[]
  previousSupplier?: string
  message?: string
}
