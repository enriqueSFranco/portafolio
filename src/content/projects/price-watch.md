---
title: "PriceTracker"
slug: "Proyecto de Personal - Price Watch"
year: 2025
stack:
    - Typescript
    - Next.js
    - Webscraping
    - Puppeteer
    - Drizzle
    - Postgresql
summary: "Sistema que monitorea productos en tiendas online, detecta cambios de precio/disponibilidad y expone una API de consulta en tiempo real."
cover: "/portafolio/images/projects/price-watch.webp"
github: "https://github.com/enriqueSFranco/price-watch-platform"
featured: true
---

## 💡 Resumen Ejecutivo

**PriceTracker** es una aplicación web diseñada para **monitorear automáticamente** cambios en precios y disponibilidad de *stock* de productos en línea. Los usuarios simplemente ingresan la URL de un producto, y el sistema utiliza técnicas de *web scraping* para extraer la información relevante. El sistema se ejecuta periódicamente, notificando al usuario en tiempo real cuando el precio baja o el *stock* cambia.

**Objetivo Principal:** Permitir a los usuarios **optimizar sus compras** asegurando que nunca pierdan una oferta o una oportunidad de adquirir un producto en demanda.

---

## 🛑 El Problema

En el comercio electrónico actual, los precios y la disponibilidad de los productos son **altamente dinámicos**.

1.  **Dificultad para rastrear ofertas:** Es inviable para un usuario monitorear manualmente docenas de productos en diferentes sitios web esperando una caída de precio.
2.  **Pérdida de tiempo:** Revisar repetidamente la disponibilidad de un producto agotado es frustrante y consume tiempo.
3.  **Ineficiencia en la compra:** La falta de información oportuna resulta en la compra de productos a precios más altos de lo necesario.

---

## ✅ La Solución: Arquitectura PriceTracker

Se desarrolló un sistema web robusto y escalable con las siguientes capacidades:

| Característica | Beneficio |
| :--- | :--- |
| **Ingreso de URL Simple** | Interfaz intuitiva donde el usuario solo necesita pegar el enlace del producto. |
| **Motor de Web Scraping Dinámico** | Extracción precisa del precio, nombre, y *stock* del producto desde diversas estructuras HTML. |
| **Monitoreo Asíncrono** | Tareas programadas (*cron jobs*) que revisan las URL registradas a intervalos definidos. |
| **Sistema de Notificación** | Alertas por correo electrónico o notificaciones *in-app* ante cualquier cambio significativo. |
| **Historial de Precios** | Registro visual de las fluctuaciones de precio para ayudar en la toma de decisiones. |

### 🛠️ Tecnología Utilizada

* **Frontend:** React/Next.js (para la interfaz de usuario reactiva y rápida).
* **Backend:** Node.js / Python (Python es ideal para *scraping* gracias a librerías como Beautiful Soup o Scrapy).
* **Base de Datos:** PostgreSQL / MongoDB (para almacenar la información del producto y el historial de precios).
* **Programación de Tareas:** *Crontab* o servicios *serverless* (como AWS Lambda o Cloud Functions) para la ejecución periódica del *scraper*.

---

## ⚙️ Desarrollo e Implementación (Retos y Soluciones)

### 1. Robustez del Scraper
* **Reto:** Los sitios web cambian constantemente su estructura HTML, rompiendo los *scrapers* estáticos.
* **Solución:** Uso de **selectores CSS/XPath flexibles** y la implementación de un **mecanismo de reintento** con *headers* de navegador simulados para evitar el bloqueo por *bots*. Se consideró el uso de herramientas como **Puppeteer/Playwright** para sitios con renderizado JavaScript.

### 2. Escalabilidad y Concurrencia
* **Reto:** Monitorear cientos o miles de URLs simultáneamente sin sobrecargar el servidor ni ser bloqueado.
* **Solución:** Implementación de una **cola de trabajo** (ej. Redis Queue) para gestionar las tareas de *scraping* de forma asíncrona. La lógica de notificación se separó del proceso de *scraping* para garantizar un procesamiento rápido de las URL.

### 3. Detección Inteligente de Cambios
* **Reto:** Evitar falsos positivos y notificar solo cambios de precio o *stock* genuinos.
* **Solución:** El sistema calcula la **diferencia absoluta o porcentual** con el último registro válido. Las notificaciones solo se envían si el cambio supera un umbral predefinido (ej. una caída de precio $\ge 5\%$).

---

## 📈 Resultados y Aprendizajes

**PriceTracker** logró automatizar completamente el monitoreo de precios, proporcionando un valor inmediato a los usuarios:

* **Ahorro Garantizado:** Usuarios notificados de caídas de precios antes de que terminaran las ofertas.
* **Eficiencia:** El tiempo dedicado a la búsqueda manual de ofertas se redujo a cero.
* **Trazabilidad:** Creación de un historial de precios valioso para identificar tendencias estacionales o históricas.

### Aprendizajes Clave

1.  **Prioridad a la Anti-Bloqueo:** La gestión de *proxies*, *user agents* rotativos y la limitación de la tasa de solicitud son cruciales para la sostenibilidad del *web scraping*.
2.  **Valor del Historial:** El historial de precios no solo justifica la notificación, sino que se convierte en una función de valor añadido por sí misma.
3.  **UX en Notificaciones:** La claridad, la puntualidad y la frecuencia limitada de las notificaciones son esenciales para evitar la fatiga del usuario.

---

## 🚀 Impacto y Conclusión

El proyecto **PriceTracker** es una demostración exitosa de la aplicación de la ingeniería web avanzada y las técnicas de *scraping* para resolver un problema de la vida real.

**Habilidades Demostradas:**

* **Desarrollo Full-Stack** (Frontend, Backend, BBDD).
* **Ingeniería de Datos** y manejo de tareas asíncronas.
* **Diseño de Sistemas** escalables y tolerantes a fallos.
* **Web Scraping** avanzado y técnicas anti-bloqueo.

Este sistema está listo para ser escalado para soportar múltiples *e-commerce* y gestionar una base de usuarios creciente.