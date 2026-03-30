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
