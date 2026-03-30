# Track 3: De Figma al Código (Figma-First)

En este proyecto exploramos el proceso estándar actual de la industria: mantener un archivo de UI Kit o Sistema de Diseño en Figma como la verdad de diseño y configurar la automatización para derivar código al repositorio.

## Objetivo
- Desacoplar el proceso de diseño y desarrollo, de manera que los diseñadores publiquen cambios que se reflejen solos o por pull request.
- Automatizar la bajada de "Design Tokens" (por ejemplo un archivo JSON) en código (variables CSS, Tailwind, etc.).
- Construir los prototipos consumiendo los tokens automáticamente.

## Herramientas Recomendadas
- En Figma: **Tokens Studio** (antes Figma Tokens).
- En Código (aquí): **Style Dictionary**.

## Siguientes Pasos (Sugeridos)
- [ ] Generar un pequeño archivo `tokens.json` de prueba exportado desde tu Figma.
- [ ] Configurar un pequeño script con Style Dictionary o Node para probar la compilación de esos tokens a un archivo de salida como `variables.css`.
