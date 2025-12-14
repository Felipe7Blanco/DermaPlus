# 🏥 DermaPlus – Prueba Técnica Frontend

Proyecto desarrollado como **prueba técnica** simulando un caso real para una clínica estética llamada **DermaPlus**, enfocada en la captación de clientes y el seguimiento interno mediante un panel administrativo.

La solución está construida con tecnologías modernas del ecosistema React, priorizando **claridad, estructura, diseño y correcta ejecución de requerimientos funcionales**, sin uso de plantillas externas.

---

## 🚀 Demo

🔗 **URL del proyecto (deploy en Vercel):**  
> https://TU-URL-DE-VERCEL.vercel.app

---

## 🎯 Objetivo del proyecto

- Simular una **landing page real** para captación de leads.
- Proveer un **dashboard interno** para el personal de la clínica.
- Visualizar información clave mediante **gráficas estadísticas**.
- Demostrar capacidad de estructurar un proyecto frontend moderno, claro y escalable.

---

## 🧩 Funcionalidades

### Landing Page
- Hero con propuesta de valor clara.
- Sección de servicios (mock data).
- Formulario de registro de pacientes con:
  - Nombre
  - Email
  - Teléfono
  - Tratamiento de interés
- Mensaje de confirmación al enviar el formulario (sin backend real).

### Página de Contacto
- Formulario de contacto.
- Información ficticia de la clínica:
  - Dirección
  - Teléfono
  - Horarios de atención
- Diseño coherente con la landing page.

### Dashboard (Área interna)
- Vista tipo panel administrativo.
- Tabla de leads (datos simulados).
- Gráficas estadísticas:
  - Pacientes registrados por mes.
  - Tratamientos más solicitados.
  - Canales de captación.

---

## 📊 Datos utilizados (Mock Data)

### Pacientes registrados por mes

| Mes     | Cantidad |
|--------|----------|
| Enero  | 95       |
| Febrero| 140      |
| Marzo  | 210      |
| Abril  | 260      |
| Mayo   | 330      |

### Tratamientos más solicitados
- Limpieza facial: 40%
- Botox: 25%
- Depilación láser: 20%
- Tratamientos corporales: 15%

### Canales de captación
- Web: 50%
- Instagram Ads: 30%
- Referidos: 20%

---

## 🛠️ Tecnologías utilizadas

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Chakra UI** (UI y layout)
- **React ECharts** (visualización de datos)
- **lucide-react** (iconografía)
- **Yarn** (gestor de dependencias)
- **Vercel** (deploy)

---

## 🗂️ Estructura del proyecto

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── Dashboard/
│   │   ├── LeadsTable.tsx
│   │   └── charts/
│   │       ├── PatientsByMonthChart.tsx
│   │       ├── TreatmentsChart.tsx
│   │       └── ChannelsChart.tsx
│   └── ui/
└── styles/
```
## 🧠 Consideraciones técnicas

El proyecto no incluye backend, pero está diseñado para integrarse fácilmente con una API REST.

Se priorizó una arquitectura modular, separación de responsabilidades y componentes reutilizables.

Todos los datos son simulados, según lo solicitado en la prueba técnica.

## 📦 Instalación y ejecución local
``` bash
# Instalar dependencias
yarn install

# Ejecutar entorno de desarrollo
yarn dev

# Build de producción
yarn build
```
## 📌 Estado del proyecto

✔ Prueba técnica completada
✔ Requerimientos funcionales cumplidos
✔ Deploy en Vercel

## 👤 Autor

Andrés Blanco
Ingeniero de Sistemas

GitHub: https://github.com/Felipe7Blanco 

LinkedIn: https://www.linkedin.com/in/andr%C3%A9s-blanco-366021367/