export interface Food {
  id: number
  name: string
  price: number
  cookTime: number
  favorite: boolean
  origins: string[]
  stars: number
  imageUrl: string
  tags?: string[]
}
