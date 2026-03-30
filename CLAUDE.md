# Claude Code - Guía de ds-lab

Bienvenido al laboratorio de ciencia de datos `ds-lab`. Para mantener la integridad y eficiencia del proyecto, sigue estas reglas estrictas:

## 🚀 Flujo de Trabajo: Git Worktrees

**REGLA DE ORO:** Nunca trabajes directamente sobre la rama `main` para realizar cambios. 

- **Consulta:** Mantente siempre en la carpeta raíz (`/ds-lab`) para ver el estado general.
- **Cambios:** Para cualquier implementación, corrección o experimento, crea un **worktree** separado fuera del directorio del proyecto.
  - Ejemplo: `git worktree add ../feature-nueva -b feature-nueva`
- **Limpieza:** Una vez terminada la tarea y hecho el merge, elimina el worktree: `git worktree remove ../feature-nueva`.

## 📉 Optimización de Tokens: RTK

Este repositorio está optimizado para el uso de [rtk-ai/rtk](https://github.com/rtk-ai/rtk). 

- **Comandos CLI:** Utiliza preferiblemente comandos que el asistente pueda procesar de forma compacta.
- **Hook Activo:** El sistema ya cuenta con un hook global de `rtk`, por lo que tus llamadas a `git status`, `ls`, y otros comandos comunes ya están siendo filtradas para ahorrar tokens.

## 🛠️ Estilo y Estándares

- **Documentación:** Mantén el `README.md` actualizado con cualquier cambio estructural.
- **Ramas:** Las ramas en worktrees deben seguir una nomenclatura clara (ej: `feat/analisis-datos`, `fix/limpieza-csv`).
- **Main:** La rama `main` debe reflejar siempre la última versión estable y completa de los experimentos o herramientas del laboratorio.

---
*Nota: Este archivo es para consumo interno de Claude Code y otros agentes de IA.*
