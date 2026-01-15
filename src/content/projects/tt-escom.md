---
title: "Aplicación web de gestión para la Bolsa de Trabajo de ESCOM."
year: 2023
stack:
  - Javascript
  - React
  - Material UI
  - Python
  - Django REST Framework
  - Algoritmo de recomendación
  - Similitud del coseno
summary: "Sistema web que facilita la búsqueda y postulación de empleo para los alumnos de ESCOM, incluyendo un algoritmo de recomendación que sugiere vacantes basadas en habilidades y perfil del usuario."
cover: "/portafolio/images/projects/tt-escom/tt-preview.webp"
github: "https://github.com/enriqueSFranco/TT-ESCOM"
featured: true
---

# 💼 Caso de Estudio: Automatización de la Bolsa de Trabajo de ESCOM

## 🎯 Contexto

La **Escuela Superior de Cómputo (ESCOM)** del IPN necesitaba optimizar la transición de sus egresados al mercado laboral. La bolsa de trabajo universitaria es crucial, ya que conecta a las empresas directamente con candidatos que cumplen perfiles técnicos específicos.

**Desafío:** La bolsa de trabajo de ESCOM operaba mediante boletines con una gestión **completamente manual**.

---

## 🚨 El Problema: Ineficiencia Manual

El sistema de gestión manual exigía una coordinación intensiva entre reclutadores y el personal académico, resultando en:

* **Retraso significativo** en la publicación de nuevas ofertas laborales.
* **Pérdida de oportunidades** valiosas para alumnos y egresados debido a la ineficiencia en la forma de publicar las vacantes.

---

## 🚀 La Oportunidad: Automatización Digital

Se identificó la necesidad de crear una **solución digital** que automatizara el proceso de publicación de ofertas. El objetivo era garantizar que los candidatos de ESCOM accedieran a las oportunidades de manera **inmediata y oportuna**.

---

## 🔎 Investigación y Benchmarking

Se investigaron plataformas clave para establecer el alcance y las *features* del sistema:

| Plataformas Analizadas | Hallazgos Clave |
| :--- | :--- |
| **Universitarias (UNAM, UAM, SIBOLTRA)** | Necesidad crítica de **filtros** por *skills*, semestre y modalidad. |
| **Portales de Empleo (Indeed, OCC)** | Funcionalidades esperadas: filtros avanzados, notificaciones y sistemas de **recomendación**. |
| **UX/UI** | Un panel administrativo bien diseñado **reduce el tiempo de publicación** si se integra con plantillas de empresa. |

**Conclusión:** La recomendación basada en similitud de competencias es clave para mejorar el *engagement* del usuario universitario.

---

## 🏗 Arquitectura del Sistema

La solución se implementó utilizando una arquitectura desacoplada para manejar la web, la API y los servicios de procesamiento intensivo.

| Componente | Tecnología | Descripción / Propósito |
| :--- | :--- | :--- |
| **Frontend** | **React** (CRA) + Material UI | Interfaz de Usuario (SPA) para alumnos y panel administrativo. |
| **Backend API** | **Django + Django REST Framework** | Lógica de negocio, *endpoints* REST para vacantes, postulaciones y usuarios. |
| **Base de Datos** | **PostgreSQL** | Almacenamiento fiable de datos transaccionales (usuarios, vacantes, postulaciones). |
| **Recommendation Service** | **Python** (TF-IDF + Cosine Similarity) | Componente encargado de calcular la similitud entre descriptores de vacantes y perfiles de candidatos. |

---

## 🧭 Decisiones Técnicas Clave

* **Django + DRF:** Seleccionado por la **rapidez** en el montaje de *endpoints* REST, la familiaridad y el robusto ecosistema para manejar la autenticación y la administración (*admin panel*).
* **React + Material UI:** Elegido por la **productividad rápida** y la disponibilidad de componentes accesibles y un estilo minimalista adecuado.
* **TF-IDF + Cosine Similarity:** Se usó para el MVP por su **balance ideal entre precisión y coste computacional**, permitiendo una fácil **explicabilidad** del modelo de recomendación.
* **Postgres:** Priorizado por su fiabilidad y el soporte nativo para funciones avanzadas como búsquedas textuales (`tsvector`) para futuras mejoras.

---

## 📊 Resultados

El proyecto logró automatizar el proceso de publicación, resultando en:

* **Reducción drástica del tiempo de publicación** de ofertas laborales.
* **Acceso inmediato** a las vacantes para los alumnos y egresados.
* Un **aumento en la tasa de *match*** gracias al sistema de recomendación inicial.

---

## 🧾 Roadmap y Próximas Mejoras

Se definieron las siguientes mejoras para el desarrollo continuo del sistema:

1.  **Modelo de Recomendación Avanzado:** Migrar de TF-IDF a **embeddings (SBERT / OpenAI)** para capturar la semántica y el contexto de las descripciones de empleo.
2.  **Bucle de *Feedback*:** Usar interacciones reales (postulaciones, rechazos) para **ajustar y personalizar** las recomendaciones.
3.  **Matching Detallado:** Incluir **disponibilidad, modalidad y salario** en el algoritmo de *matching*.
4.  **Integración Directa con Empresas:** Crear un portal para que las empresas publiquen directamente con plantillas y un flujo de revisión.
5.  **Performance y Accesibilidad:** Implementar **PWA** y **SSR** para mejorar el SEO y los tiempos de carga del sitio.

---

## 📁 Recursos

**Repo:** [TT ESCOM](https://github.com/enriqueSFranco/TT-ESCOM)
