import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Obtiene todos los proyectos ordenados por año (desc) y posición manual.
 * Ideal para mostrar en la Home o /projects.
 */
export const getAllProjects = async (): Promise<CollectionEntry<'projects'>[]> => {
    const projects = await getCollection('projects')

    if (!projects || projects.length === 0) {
      console.warn("No se encontraron proyectos en la colección.");
      return [];
    }

    return projects
        .sort((a, b) => {
          // primero filtramos por destacados
            if (a.data.featured && !b.data.featured) return -1
            if (!a.data.featured && b.data.featured) return 1
          // lugoe filtramos por año
            return (b.data.year ?? 0) - (a.data.year ?? 0)
        })
}

export const getProjectBySlug = async (slug: string) => {
    const projects = await getCollection('projects')
    return projects.find(p => p.id === slug || p.data.title.toLowerCase().replace(/ /g, "-") === slug) ?? null
}
