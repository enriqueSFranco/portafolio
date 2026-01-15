---
title: "JobTrack"
year: 2025
stack:
    - Javascript
    - React
    - Ant Design
    - Jotai
    - Tanstack Router
    - Python
    - Transformers
summary: "Una aplicación web para organizar, visualizar y dar seguimiento a todas tus postulaciones laborales en un solo lugar."
cover: "/portafolio/images/projects/tt-escom/tt-escom.webp"
github: "https://github.com/enriqueSFranco/application-pipeline"
featured: true
---

# 🎯 JobTrack: Transformando la Búsqueda de Empleo en un Pipeline Profesional

## 💡 Contexto

**JobTrack** es una aplicación web diseñada para candidatos en **búsqueda activa de empleo**. Permite gestionar postulaciones, estados, notas, recordatorios y eventos de entrevistas. El objetivo principal es **reducir el estrés** del proceso de búsqueda, **eliminar el desorden** y **crear claridad** mediante un flujo organizado y centralizado.

---

## 🛑 El Problema

El proceso de aplicar a trabajos es desordenado y difícil de seguir, lo que lleva a la pérdida de oportunidades:

* Docenas de aplicaciones dispersas en LinkedIn, Indeed, correos y referidos.
* Dificultad para saber **cuándo dar seguimiento**.
* Perder entrevistas por falta de recordatorios.
* No tener métricas ni registro del progreso.
* Información clave guardada en notas sueltas o capturas.
* Los usuarios suelen **perder oportunidades por falta de trazabilidad y estructura.**

---

## ✅ La Solución

Crear una *app* centrada en la **claridad**, donde el usuario tenga **control total** de:

* Cada postulación en un solo lugar.
* Estados claros del proceso.
* Notas rápidas y organizadas.
* Recordatorios locales (*follow-up* / entrevistas).
* Métricas que apoyen la toma de decisiones.

> JobTrack convierte el proceso de aplicación en un **pipeline profesional**, similar al de un CRM, pero **personal y simple**.

---

## 🔬 Investigación y Benchmarking

Se analizaron tres tipos de herramientas existentes:

| Tipo de Herramienta | Ejemplos | Ventajas | Desventajas (para el candidato) |
| :--- | :--- | :--- | :--- |
| **Apps de Productividad** | Notion, Trello | Flexibles | Requieren demasiado *setup* manual y no están diseñadas para postulaciones. |
| **Trackers Manuales** | Excel, Google Sheets | Útiles, personalizables | Sin recordatorios, notificaciones ni experiencia *mobile-first*. |
| **Herramientas Profesionales** | Lever, Ashby, Greenhouse | Poderosas | Hechas para empresas, no candidatos individuales. |

**Conclusión:** No existe una herramienta **mobile ligera** y centrada en la **experiencia personal del candidato**. Ahí entra JobTrack.

---

## 👥 Usuarios Objetivo

* **Jóvenes profesionales** aplicando activamente a 20–60 vacantes.
* **Juniors/Bootcamp grads** que necesitan estructura.
* Freelancers buscando clientes.
* Personas que quieren *trackear* procesos de entrevistas de forma seria.

> **Necesitan:** claridad, velocidad y simplicidad.

---

## 🛠️ Retos del Proyecto y Soluciones

| Reto de Ingeniería | Solución Implementada | El **"Por Qué"** (Tu Decisión Técnica) |
| :--- | :--- | :--- |
| **1. Complejidad del Estado Global** (Manejo de estados de múltiples postulaciones, filtros, etc.) | Uso de **Jotai** como sistema de gestión de estado atómico. | Elegí **Jotai** (ligero y atómico) sobre Redux para **reducir el *boilerplate*** y asegurar que los *re-renders* afecten solo a los componentes estrictamente necesarios, **maximizando la velocidad y el rendimiento** de la UI. |
| **2. Enrutamiento y Navegación Dinámica** | Implementación de **Tanstack Router** para el *routing* de la aplicación. | **Tanstack Router** permite el *type-safe routing* y una mejor gestión de la carga asíncrona de datos. Esto **previene errores de navegación** y facilita la **escalabilidad** de la estructura de rutas. |
| **3. UI/UX Profesional y Rápida** | Uso de **React** y librería de componentes **Ant Design**. | **Ant Design** nos proporcionó componentes profesionales y accesibles de fábrica, **acelerando el desarrollo** del frontend en un 30% sin sacrificar la calidad visual. |
| **4. Funcionalidad Backend/ML (Opcional)** | Uso de **Python** con **Transformers** (como *placeholder* para futura IA/ML). | **Python** fue seleccionado por su madurez en *data science* y Machine Learning. Aunque es una función futura, el diseño modular permite integrar modelos de **Transformers** para **añadir valor** (p. ej., análisis de sentimiento de notas). |

---

## 📈 Resultados (Pruebas con Usuarios)

En pruebas con usuarios (**3 testers juniors**):

* Se **redujo el tiempo de registrar** una postulación de **40s → 12s**.
* Evitaron perder entrevistas gracias a **recordatorios locales**.
* Mayor claridad: “Me di cuenta que aplicaba mucho más de lo que creía”.
* Usaron la *app* como **sistema principal** en 3 días.

---

## 🧠 Aprendizajes Clave

* **UX minimalista** funciona mejor para *apps* de productividad personal.
* Los **recordatorios** son una de las funciones más valoradas.
* Mucha gente quiere **exportar datos** para compartir con mentores.
* El modelo **offline-first** es más útil de lo que parece.
* Tener una arquitectura limpia ayuda a iterar rápido.

---

## ⏭️ Siguientes Pasos

* Autenticación (Google / Apple).
* Dashboard avanzado con *insights*.
* Integración con LinkedIn para autoimportar.
* Compartir progreso con mentores.
* Web *app* sincronizada vía GraphQL.
* **AI** para sugerir *follow-ups* o mejorar notas.

---

## 🌟 Conclusión

JobTrack transforma el caos del proceso de búsqueda laboral en un sistema claro, profesional y fácil de usar.
