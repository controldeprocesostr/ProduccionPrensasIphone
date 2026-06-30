# ERP Prensas para iPhone / GitHub Pages

Esta carpeta está lista para subir a un repositorio de GitHub Pages.

## Archivos incluidos

- `index.html`: app ERP Prensas V6.4 ligera.
- `manifest.json`: configuración para que se vea como app.
- `sw.js`: service worker ligero, sin caché pesado de datos.
- `icons/`: íconos para iPhone, Android y navegador.
- `.nojekyll`: evita que GitHub Pages procese archivos.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `erp-prensas`.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En GitHub ve a `Settings > Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona `main` y carpeta `/root`.
6. Abre el enlace que GitHub te entregue, por ejemplo:
   `https://TUUSUARIO.github.io/erp-prensas/`

## Cómo instalarlo en iPhone

1. Abre el enlace en Safari.
2. Toca Compartir.
3. Toca Agregar a pantalla de inicio.
4. Acepta el nombre `ERP Prensas`.

## Notas

- El repositorio público deja visible el HTML. El acceso funcional sigue controlado por licencias/Firebase.
- No se guarda histórico pesado en Firebase en esta versión ligera.
- Si actualizas el HTML en GitHub, cierra y vuelve a abrir la app en iPhone para tomar la versión nueva.
