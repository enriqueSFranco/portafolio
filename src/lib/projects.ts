import { getCollection, type CollectionEntry } from "astro:content";
import type {Project} from "./types/project"

/**
 * Obtiene todos los proyectos ordenados por año (desc) y posición manual.
 * Ideal para mostrar en la Home o /projects.
 */
export const getAllProjects = async (): Promise<CollectionEntry<'projects'>[]> => {
    const entries = await getCollection('projects')
    const projects = entries
        .sort((a, b) => {
            if (a.data.featured && !b.data.featured) return -1
            if (!a.data.featured && b.data.featured) return 1

            return (b.data.year ?? 0) - (a.data.year ?? 0)
        })

    return projects
}

export const getProjectBySlug = async (slug: string) => {
    const entries = await getCollection('projects')
    return entries.find(entry => entry.data.slug === slug) ?? null
}