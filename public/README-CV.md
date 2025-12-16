# Cómo agregar tu CV

Para que el botón "Descargar CV" funcione, sigue estos pasos:

1. **Prepara tu CV en formato PDF**
   - Asegúrate de que tu CV esté en formato PDF
   - Nombre recomendado: `cv-alejandro-martinez-begines.pdf`

2. **Coloca el archivo en esta carpeta (public/)**
   - Copia tu archivo PDF a la carpeta `public/` del proyecto
   - El archivo debe llamarse exactamente: `cv-alejandro-martinez-begines.pdf`

3. **Reinicia el servidor de desarrollo**
   - Detén el servidor (Ctrl + C)
   - Inícialo de nuevo con `npm run dev`

4. **Prueba la descarga**
   - Haz clic en el botón "Descargar CV" en el portfolio
   - Debería descargarse automáticamente

**Nota:** Si tu archivo tiene otro nombre, actualiza la ruta en `src/components/Hero.tsx` línea 50.

