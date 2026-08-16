# 📦 Future Courier - Courier & Logistics Monorepo System

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Future Courier** es una plataforma monorepo moderna e integral para la gestión de envíos internacionales, seguimiento de paquetes, casilleros virtuales y logística courier expreso.

---

## ⚡ Arquitectura Monorepo

El proyecto está estructurado como un **Monorepo** con **Turborepo** y **pnpm workspaces**:

```
PROYECTO-COURRIER/
├── apps/
│   └── web/            # Aplicación Principal Next.js 16 (React 19, Framer Motion)
├── packages/           # Paquetes y configuraciones compartidas
├── scripts/            # Scripts auxiliares en Python (visión por computador)
├── turbo.json          # Configuración de pipeline de Turborepo
└── pnpm-workspace.yaml # Definición de workspaces
```

---

## ✨ Características Principales

- 🚀 **Frontend Ultra-Moderno:** Next.js 16 (App Router) + React 19 con Server Components y animaciones spring con Framer Motion.
- 📦 **Rastreo de Paquetes en Tiempo Real:** Seguimiento interactivo de estados de envíos de mensajería y casilla postal.
- 🎨 **UI/UX Fluidas & Responsive:** Tailwind CSS utilitario, componentes optimizados con `tailwind-merge` e iconos de Lucide React.
- 🤖 **Herramientas de Visión por Computador:** Scripts en Python integrados para anonimización automática de rostros en fotos de entrega (`pnpm anonymize-faces`).

---

## 🛠️ Stack Tecnológico

| Módulo | Tecnología |
|--------|------------|
| **Monorepo & Build** | Turborepo, pnpm Workspaces |
| **Framework Web** | Next.js 16, React 19, TypeScript |
| **Estilos & Animación** | Tailwind CSS v3, Framer Motion, Lucide Icons |
| **Scripts Auxiliares** | Python (OpenCV / Computer Vision) |

---

## 🚀 Guía de Instalación y Desarrollo

### Requisitos Previos
* Node.js (v18 o superior)
* pnpm (v8 o superior)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MartinMaldo592/PROYECTO-COURRIER.git
   cd PROYECTO-COURRIER
   ```

2. **Instalar dependencias del monorepo:**
   ```bash
   pnpm install
   ```

3. **Iniciar el entorno de desarrollo:**
   ```bash
   # Iniciar monorepo completo
   pnpm dev

   # O iniciar únicamente la aplicación web
   pnpm --filter web dev
   ```

4. **Compilar para Producción:**
   ```bash
   pnpm build
   ```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <sub>Desarrollado por <a href="https://github.com/MartinMaldo592">Martin Maldonado</a></sub>
</div>
