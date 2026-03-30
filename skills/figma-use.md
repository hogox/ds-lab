---
name: figma-use
description: Estándares de diseño y flujo de trabajo para el proyecto ds-lab en Figma.
---

# Skill: Uso de Figma en ds-lab

Utiliza esta skill cuando necesites leer diseños existentes o crear nuevas propuestas visuales en Figma que se alineen con la arquitectura de código de este repositorio.

## Principios de Diseño
1.  **Componentización**: Todo diseño debe basarse en componentes reutilizables. Si creas algo nuevo, conviértelo en componente.
2.  **Auto Layout**: Usa Auto Layout en todos los frames para facilitar la traducción a código CSS Flexbox/Grid.
3.  **Variables & Tokens**: Prioriza el uso de variables de Figma para colores, espaciado y tipografía. Sigue la nomenclatura `token-nombre` (ej. `brand-primary`, `spacing-md`).

## Flujo de Trabajo con IA
*   **De Código a Figma**: Si el código cambia, usa `generate_figma_design` para actualizar el lienzo.
*   **De Figma a Código**: Al recibir una URL de Figma, analiza primero los tokens y el Auto Layout antes de sugerir implementaciones en React/HTML.

## Prompts Recomendados
*   `"Alinea este diseño con las variables definidas en Figma URL"`
*   `"Genera el código CSS para este componente asegurándote de usar los tokens de espaciado correspondientes"`
*   `"Agrega un estado de 'hover' a este botón directamente en el archivo de Figma"`

---
*Nota: Esta skill se activa automáticamente cuando se referencia un enlace de Figma en el contexto del chat con el agente.*
