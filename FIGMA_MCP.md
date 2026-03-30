# Configuración de Figma MCP

Esta guía explica cómo conectar este repositorio con Figma utilizando el **Model Context Protocol (MCP)**, permitiendo que las IAs (como Cursor o Antigravity) lean y escriban directamente en el lienzo de Figma.

## 1. Preparación en Figma

Para que el agente pueda acceder a tus archivos, necesitas un **Personal Access Token (PAT)**:

1.  Inicia sesión en Figma.
2.  Ve a **Settings** (clic en tu avatar arriba a la izquierda).
3.  Busca la sección **Personal access tokens**.
4.  Haz clic en **Generate new token**.
5.  Dale un nombre (ej. "Cursor MCP") y asegúrate de marcar los scopes necesarios (mínimo `File content: Read` para lectura, y `Write` si quieres que la IA cree diseños por ti).
6.  **Copia el token inmediatamente**. No se volverá a mostrar.

> [!CAUTION]
> **SEGURIDAD**: Nunca guardes este token en este repositorio ni lo subas a GitHub. Úsalo solo en la configuración de tu editor.

## 2. Configuración en Cursor

Si planeas usar **Cursor** como tu editor principal:

### Método A: Comando Chat (Recomendado)
Desde el chat de Cursor (`Cmd+L`), escribe:
```bash
/add-plugin figma
```
Sigue las instrucciones en pantalla para autorizar el acceso.

### Método B: Configuración mcp.json
Si prefieres configurarlo manualmente o el comando anterior no funciona:
1.  Ve a `Cursor Settings` -> `Features` -> `MCP`.
2.  Haz clic en `+ Add New MCP Server`.
3.  Configura los siguientes valores:
    *   **Name**: `figma`
    *   **Type**: `http`
    *   **URL**: `https://mcp.figma.com/mcp`

## 3. Configuración en otros clientes

### Gemini CLI
Si utilizas la CLI de Gemini para automatizar tareas:
1.  Instala la extensión oficial:
    ```bash
    gemini extensions install https://github.com/figma/mcp-server-guide
    ```
2.  Autentícate ejecutando `gemini` y luego:
    ```bash
    /mcp auth figma
    ```

### Codex
1.  En la aplicación de Codex, ve al botón **Plugins** (arriba a la izquierda).
2.  Busca **Figma** y haz clic en el icono `+`.
3.  Haz clic en **Install Figma** y sigue el proceso de autorización OAuth.

## 4. Uso y "Bootstrapping"

Como aún no tienes un documento de Figma, puedes pedirle a la IA que cree uno por ti una vez configurado el MCP:

**Prompt de ejemplo:**
> "/figma-use Crea un nuevo archivo de Figma para el proyecto 'ds-lab' y genera un layout básico de una Single Page Application con un modo oscuro."

El agente te devolverá una URL de Figma. A partir de ahí, puedes pasarle URLs de frames específicos para que los modifique o los use como referencia para escribir código.

## 4. Skills Personalizadas

Este repositorio incluye instrucciones específicas para la IA en el directorio `skills/`. Estas "skills" ayudan a que la IA entienda cómo debe diseñar (ej. siguiendo un sistema de espaciado específico o paleta de colores).

Consulta [skills/figma-use.md](file:///Users/2b-0215/Dev/repos/ds-lab/skills/figma-use.md) para más detalles.
