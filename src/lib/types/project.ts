export interface Project {
    title: string
    slug: string
    year: number
    stack: string[]
    summary: string
    cover: string
    github: string
    featured?: boolean;
}