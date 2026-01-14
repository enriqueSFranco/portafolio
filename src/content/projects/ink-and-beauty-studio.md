---
title: "Ink & Beauty Hub"
year: 2026
stack:
    - Astro
    - TypeScript
    - Tailwind CSS
summary: "Hub digital de alto rendimiento para un estudio multi-servicio, optimizando la conversión omnicanal mediante arquitectura estática."
cover: "/portafolio/images/projects/ink-studio/ink-desktop-1.webp"
github: "https://github.com/enriqueSFranco/ink-beauty-platform"
featured: true
---
## El Reto
El estudio operaba de forma fragmentada: citas de uñas vía TikTok, tatuajes por Instagram y perforaciones por WhatsApp. Esta dispersión generaba una carga administrativa alta y una pérdida de leads debido a la falta de un catálogo centralizado y coherente.

## Estrategia de Ingeniería
El objetivo fue construir un **"Hub de Conversión"** ultraligero. Utilicé **Astro** para eliminar todo el JavaScript innecesario en el cliente, permitiendo que la página sea instantánea incluso en dispositivos móviles con redes limitadas.

### 1. Smart Routing con TypeScript
En lugar de librerías pesadas, implementé lógica pura en **TypeScript** para gestionar el flujo del usuario:
- **Detección de Origen:** El sitio identifica parámetros en la URL para saber si el usuario viene de TikTok o Instagram, personalizando dinámicamente el mensaje de los CTAs.
- **Segmentación de Servicios:** Estructuré la navegación para que cada servicio (Tatuajes, Uñas, Perforaciones) funcione como una sección independiente con su propio embudo de contacto, reduciendo el tiempo de respuesta administrativa en un 30%.



### 2. Galería Nativa y Performance
Para manejar los portafolios de alta definición sin sacrificar velocidad, implementé:
- **Native Lazy Loading:** Uso intensivo de atributos nativos del navegador y el componente `<Image />` de Astro para procesar y servir imágenes en formato WebP dinámicamente.
- **Interacciones Zero-JS:** Utilicé **Tailwind CSS** para las animaciones de la interfaz y las galerías, logrando una experiencia fluida sin el peso de frameworks de animación, manteniendo el *Total Blocking Time* (TBT) en 0ms.

## Galería del Proyecto
Evidencia visual de la plataforma optimizada para la conversión y la exhibición de arte corporal.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
  <div class="space-y-4">
    <div class="overflow-hidden rounded-lg border border-(--border-subtle) bg-(--bg-card) group">
      <img src="/portafolio/images/projects/ink-studio/ink-desktop-1.webp" alt="Vista Desktop" class="w-full transition-transform duration-500 group-hover:scale-105" />
    </div>
    <p class="text-[10px] font-mono text-center text-(--text-muted) tracking-widest uppercase">Visualización Desktop</p>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="space-y-4">
      <div class="overflow-hidden rounded-lg border border-(--border-subtle) bg-(--bg-card) group">
        <img src="/portafolio/images/projects/ink-studio/ink-mobile-2.webp" alt="Mobile Home" class="w-full transition-transform duration-500 group-hover:scale-110" />
      </div>
      <p class="text-[10px] font-mono text-center text-(--text-muted) tracking-widest uppercase">Navegación Móvil</p>
    </div>
    <div class="space-y-4">
      <div class="overflow-hidden rounded-lg border border-(--border-subtle) bg-(--bg-card) group">
        <img src="/portafolio/images/projects/ink-studio/ink-preview-artists.webp" alt="Mobile Booking" class="w-full transition-transform duration-500 group-hover:scale-110" />
      </div>
      <p class="text-[10px] font-mono text-center text-(--text-muted) tracking-widest uppercase">Filtro de Artistas</p>
    </div>
  </div>
</div>

## El Impacto de Negocio
- **Eliminación de Fricción:** Se centralizó el tráfico omnicanal en un dominio propio, proyectando una imagen de marca mucho más sólida que un simple Linktree.
- **Optimización de Conversión:** La segmentación inteligente permitió que el cliente llegara directamente al especialista adecuado, aumentando la tasa de agendamiento efectivo.
- **SEO de Nicho:** Gracias a la estructura semántica de Astro, el estudio comenzó a indexar en búsquedas locales de Google, atrayendo clientes fuera de las redes sociales tradicionales.
