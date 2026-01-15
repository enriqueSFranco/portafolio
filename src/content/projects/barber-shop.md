---
title: "Barbería Studio"
year: 2025
stack:
    - Astro
    - Typescript
    - Svelte
    - Tailwind CSS
summary: "Digitalización de marca y optimización de reservas para un negocio local de alta gama."
cover: "/portafolio/images/projects/barber-shop/barber-desktop.webp"
github: "https://github.com/enriqueSFranco/barber-platform"
featured: true
---

## El Reto
El negocio dependía exclusivamente de Whatsapp para atraer clientes, lo que generaba fricción en el proceso de reserva y una pérdida de identidad frente a la competencia. Necesitaban una plataforma propia que proyectara profesionalismo y centralizara la información.

## La Solución Técnica
Decidí utilizar **Astro** por su capacidad de entregar HTML estático casi puro. En un negocio local, el 90% del tráfico proviene de dispositivos móviles con conexiones variables; la velocidad de carga no era un lujo, sino un requisito de negocio.



### 1. Optimización de Media (LCP)
Como el contenido visual es crítico en una barbería, implementé una arquitectura de imágenes usando **Cloudinary**.
- **Transformaciones al vuelo:** Las fotos se sirven en formato `.webp` y se redimensionan según el dispositivo del usuario.
- **Lazy Loading:** Reduje el peso inicial de la página en un 60%, logrando un *Largest Contentful Paint* de menos de 1 segundo.

### 2. UI/UX: Enfoque en la Conversión
Diseñé una interfaz "Mobile-First" eliminando distracciones.
- Implementé un **"Floating Action Button" (FAB)** para reservas directas que incrementó el contacto vía WhatsApp en un 40% durante el primer mes.
- El diseño utiliza una paleta de colores de alto contraste para mantener la estética urbana y sofisticada del local.

## Resultados
- **Rendimiento:** 100/100 en Google Lighthouse (Performance y SEO).
- **Negocio:** Centralización del portafolio de cortes, reduciendo las consultas repetitivas por mensajes directos.
- **SEO Local:** Indexación en los primeros resultados de búsqueda para términos clave en la zona geográfica del local.

> "La solución no fue solo crear una página, sino construir una herramienta que redujera la fricción entre el barbero y el cliente."
