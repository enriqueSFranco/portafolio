export interface IProject {
  id: number
  title: string
  period: string
  type: string
  description: string
  thumbnail: string
  repository: string | null
  stack: string[]
}


export interface ItemMenu {
  title: string
  href: string
  icon: string
}