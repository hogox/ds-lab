# ds-lab

Bienvenido al proyecto. Este repositorio utiliza un flujo de trabajo basado en **Git Worktrees** para manejar los cambios, manteniendo la rama `main` limpia y separada de los entornos de desarrollo en progreso.

## Flujo de Trabajo: Git Worktrees

Cualquier cambio o nueva característica que queramos desarrollar se hará utilizando worktrees en lugar de simplemente cambiar de rama en el mismo directorio. Esto nos permite tener múltiples ramas revisadas simultáneamente en carpetas separadas.

### Pasos para crear un nuevo cambio:

1. **Asegúrate de estar en el directorio principal y tener `main` actualizado:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Crea un nuevo worktree para tu feature/cambio:**
   ```bash
   # Esto creará una nueva carpeta paralela al repositorio principal llamada 'feature-nueva'
   # y creará una rama llamada 'feature-nueva' basada en main.
   git worktree add ../feature-nueva -b feature-nueva
   ```

3. **Ve al nuevo directorio y trabaja ahí:**
   ```bash
   cd ../feature-nueva
   # Haz tus cambios, git add, git commit...
   ```

4. **Cuando termines, puedes limpiar el worktree:**
   ```bash
   # Vuelve al directorio principal
   cd ../ds-lab
   
   # Elimina el worktree usando git
   git worktree remove ../feature-nueva
   
   # (Opcional) Elimina la rama si ya la fusionaste
   git branch -d feature-nueva
   ```

## Optimización con IA (MANDATORIO)

Para INTERACTUAR con este repositorio, TODA IA y herramienta de CLI **DEBE** utilizar [rtk](https://github.com/rtk-ai/rtk). Es un proxy de CLI en Rust que garantiza ahorros del 60-90% en tokens comprimiendo el output sin pérdida de contexto.

- **Mandatorio:** Se prohíbe el uso de comandos CLI directos sin el proxy `rtk`.
- **Instalación:** `brew install rtk` e inicialización con `rtk init -g`.
- **Análisis:** Usa `rtk gain` para verificar tu ahorro de tokens.

## Conectar con GitHub

Para subir este repositorio a tu cuenta de GitHub, sigue estos pasos:

1. Crea un nuevo repositorio vacío en GitHub (sin README, ni .gitignore).
2. Copia la URL del repositorio (por ejemplo, `https://github.com/tu-usuario/ds-lab.git`).
3. En la terminal, dentro de la carpeta del proyecto, ejecuta:
   ```bash
   git remote add origin URL_DEL_REPOSITORIO
   git branch -M main
   git push -u origin main
   ```

## Diseño y Figma MCP

Este repositorio está integrado con **Figma MCP** (Model Context Protocol), lo que permite a las IAs (como Cursor o Antigravity) interactuar directamente con Figma para:
- Extraer especificaciones de diseño.
- Generar componentes de código a partir de marcos.
- Crear y actualizar diseños automáticamente.

### Configuración:
Para habilitar esta funcionalidad en tu editor (ej. Cursor), sigue los pasos detallados en [FIGMA_MCP.md](file:///Users/2b-0215/Dev/repos/ds-lab/FIGMA_MCP.md).

### Uso de Skills:
Contamos con una **Skill** personalizada en `skills/figma-use.md` que ayuda a la IA a seguir nuestros estándares de diseño. Se activa automáticamente al mencionar una URL de Figma en el chat con el agente.

## Exploración de Design Systems

Actualmente, este repositorio sirve como laboratorio (lab) para experimentar con la integración de flujos de trabajo de UI y código.

El proyecto está dividido en 3 tracks principales (ver sus respectivos README para más detalle):

- [**Track 1: Code-First**](./track-1-code-first): Prototipar un Design System puramente en código sin requerir diseño visual previo.
- [**Track 2: Code-to-Figma**](./track-2-code-to-figma): Exportar/Sincronizar el Design System en código hacia Figma.
- [**Track 3: Figma-First**](./track-3-figma-to-code): Derivar los "Design Tokens" y componentes del repositorio a partir de un archivo Figma fuente.
