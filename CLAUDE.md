# Claude Code - Guía de ds-lab

Bienvenido al laboratorio de ciencia de datos `ds-lab`. Para mantener la integridad y eficiencia del proyecto, sigue estas reglas estrictas:

## 🚀 Flujo de Trabajo: Git Worktrees

**REGLA DE ORO:** Nunca trabajes directamente sobre la rama `main` para realizar cambios. 

- **Consulta:** Mantente siempre en la carpeta raíz (`/ds-lab`) para ver el estado general.
- **Cambios:** Para cualquier implementación, corrección o experimento, crea un **worktree** separado fuera del directorio del proyecto.
  - Ejemplo: `git worktree add ../feature-nueva -b feature-nueva`
- **Limpieza:** Una vez terminada la tarea y hecho el merge, elimina el worktree: `git worktree remove ../feature-nueva`.

## 📉 Optimización de Tokens: RTK (MANDATORIO)

Este repositorio EXIGE el uso de [rtk-ai/rtk](https://github.com/rtk-ai/rtk) para TODA operación de CLI y asistente de IA.

- **Mandatorio para IA:** Todas las IAs (Claude, Cursor, Codex, Gemini) deben ejecutar comandos a través de `rtk` (ya sea por hook o comando directo).
- **Ahorro Extremo:** Se espera un ahorro del 60-90% en tokens.
- **Hook Activo:** El sistema cuenta con un hook global de `rtk`, asegurando que `git status`, `ls`, etc., sean token-efficient.

## 🛠️ Estilo y Estándares

- **Documentación:** Mantén el `README.md` actualizado con cualquier cambio estructural.
- **Ramas:** Las ramas en worktrees deben seguir una nomenclatura clara (ej: `feat/analisis-datos`, `fix/limpieza-csv`).
- **Main:** La rama `main` debe reflejar siempre la última versión estable y completa de los experimentos o herramientas del laboratorio.

## 🎨 Diseño: Figma MCP

Este repositorio utiliza el servidor remoto de Figma MCP para el diseño asistido por IA.

- **Instalación:** Ejecuta `claude plugin install figma@claude-plugins-official`.
- **Conexión:** Usa el comando `/plugin` para abrir el marketplace y conectar con tu cuenta de Figma.
- **Contexto:** Al compartir una URL de Figma, el agente utilizará la skill definida en `skills/figma-use.md`.

---
*Nota: Este archivo es para consumo interno de Claude Code y otros agentes de IA.*
