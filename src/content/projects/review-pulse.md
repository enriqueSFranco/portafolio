---
title: "PriceTracker"
year: 2025
stack:
    - Typescript
    - Next.js
    - Webscraping
    - Puppeteer
    - Drizzle
    - Postgresql
summary: "Aplicación *full-stack* diseñada para resolver la 'fatiga de reseñas'.."
cover: "/portafolio/images/projects/price-watch.webp"
github: "https://github.com/enriqueSFranco/price-watch-platform"
featured: true
---

¡Me encanta tu enfoque! Un proyecto que combina **React (web y mobile)**, **backend**, y **scraping**, y que además puede ser usado por la gente para recibir *feedback*, es ideal para un portafolio *full-stack* enfocado en la interacción en tiempo real y la utilidad.

Te propongo el proyecto **"Review Pulse"**: una herramienta que agrega reseñas de productos en diferentes plataformas y las analiza para generar un resumen de sentimiento rápido.

Aquí tienes el *Case Study* en formato Markdown:

# 🌟 Caso de Estudio: Review Pulse - Agregador de Sentimiento de Reseñas

---

## 💡 Resumen Ejecutivo

**Review Pulse** es una aplicación *full-stack* diseñada para resolver la "fatiga de reseñas". En lugar de que un usuario tenga que leer cientos de comentarios en Amazon, Mercado Libre o Google Play, **Review Pulse** consolida las reseñas, las procesa utilizando análisis de sentimiento y genera un resumen conciso que destaca lo **bueno, lo malo y el sentimiento general** de la comunidad.

El proyecto es una demostración de habilidades clave: **desarrollo multiplataforma (Web y Mobile)**, **integración de *web scraping* robusto**, **API *serverless*** y **procesamiento de lenguaje natural (NLP)** para la clasificación de texto.

---

## 🎯 El Problema: Sobrecarga de Información

Cuando un usuario quiere comprar un producto o descargar una *app*, se enfrenta a:

1.  **Dispersión:** Las reseñas están fragmentadas en múltiples sitios (*e-commerce*, foros, redes sociales).
2.  **Volumen:** Leer cientos de reseñas es impráctico y consume mucho tiempo.
3.  **Sesgo:** Es difícil destilar rápidamente el **sentimiento neto** (positivo vs. negativo) de un producto.

Esto lleva a **decisiones de compra lentas e ineficientes**.

---

## ✅ La Solución: Una Plataforma Unificada

**Review Pulse** ofrece una solución digital completa y en tiempo real:

| Componente | Plataforma | Objetivo |
| :--- | :--- | :--- |
| **Frontend Web** | **React.js (Next.js)** | Interfaz de búsqueda, visualización de historial de análisis, acceso rápido. |
| **Frontend Mobile** | **React Native** | Experiencia nativa, búsqueda rápida y notificaciones de nuevos análisis. |
| **Backend API** | **Node.js (Express/NestJS) + Serverless** | Gestión de usuarios, cola de análisis, *endpoints* para resultados y autenticación. |
| **Microservicio de Scraper** | **Python (Scrapy/Playwright)** | Extracción de reseñas, nombres y URLs desde plataformas de terceros. |
| **Servicio de NLP** | **Python (NLTK/spaCy) + Modelos Preentrenados** | Clasificación del sentimiento (*positivo, negativo, neutral*) de cada reseña. |

---

## 🏗 Arquitectura y Flujo de Datos

El sistema opera en un flujo asíncrono clave:

1.  El usuario ingresa la URL del producto en la **Web/Mobile App**.
2.  La **API** recibe la solicitud y la coloca en una **cola de trabajo** (ej. Redis o SQS).
3.  El **Microservicio de Scraper** consume la tarea de la cola, visita la URL y extrae las reseñas.
4.  Las reseñas se envían al **Servicio de NLP**, que devuelve un *payload* con el sentimiento clasificado (ej. *75% Positivo, 20% Negativo, 5% Neutral*).
5.  Los resultados se almacenan en **PostgreSQL/MongoDB**.
6.  El *Frontend* notifica al usuario o muestra el resultado final.

---

## ⚙️ Retos Técnicos y Soluciones

### 1. Robustez en el Web Scraping
* **Reto:** Los sitios como Amazon implementan defensas activas (*CAPTCHAs, rate limiting*).
* **Solución:** Uso de **Playwright** para simular un navegador real (manejo de JS) y rotación de *User Agents*. Diseño del *scraper* para ser resiliente a cambios leves en el DOM.

### 2. Procesamiento Asíncrono
* **Reto:** El *scraping* y el análisis de NLP son procesos que consumen mucho tiempo y no deben bloquear la interfaz de usuario.
* **Solución:** Implementación de una **arquitectura basada en colas**. La solicitud inicial es instantánea; el resultado llega mediante *web sockets* o *polling* cuando el análisis está completo.

### 3. Desarrollo Multiplataforma
* **Reto:** Mantener una base de código eficiente para la Web y el Mobile.
* **Solución:** Uso de **React/React Native** con lógica de negocio compartida (ej. *custom hooks* para la gestión de estado de la API). Uso de Next.js para la Web para optimizar el *server-side rendering* (SSR) inicial.

### 4. Análisis de Sentimiento
* **Reto:** Clasificar correctamente el sentimiento en español (o el idioma objetivo).
* **Solución:** Utilización de librerías de NLP en **Python** (*best-in-class* para *data science*), empleando modelos **pre-entrenados en español** para asegurar una precisión decente en el MVP sin requerir un entrenamiento intensivo.

---

## 📊 Propuesta de Feedback y Evolución

El valor añadido de este proyecto para el portafolio es la interacción real con usuarios:

* **Feedback en vivo:** La gente puede usar la *app* para tomar decisiones de compra.
* **Datos para mejorar:** Cada análisis fallido o incorrecto proporciona datos para refinar el *scraper* y el modelo de NLP.
* **Crecimiento:** Se pueden añadir más fuentes de datos y funcionalidades de historial de precios.

### Resultados Esperados

* **Interfaz Clara:** Demostración de dominio de React/Next.js con un diseño *responsive* y moderno.
* **API Robusta:** Prueba de habilidades en diseño de API *serverless* y manejo de tareas pesadas.
* **Full-Stack Capability:** Uso de Python (Data/Scraping) junto a un *stack* JS (Frontend/Backend).

---

## 🛠️ Tecnologías Destacadas

* **Frontend Web:** React.js / Next.js
* **Frontend Mobile:** React Native
* **Backend:** Node.js / Python (Microservicios)
* **Base de Datos:** PostgreSQL
* **Herramientas:** Playwright, NLTK/spaCy, Redis/SQS.
