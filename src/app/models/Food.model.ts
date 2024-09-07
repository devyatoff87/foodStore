export interface Food {
  id: number
  name: string
  price: number
  cookTime: string
  favorite: boolean
  origins: string[]
  stars: number
  imageUrl: string
  tags?: string[],
  shortDescription: string,
  fullDescription: string,
  vegan: boolean
}
