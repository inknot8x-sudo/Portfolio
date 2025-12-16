# Portfolio Profesional - Alejandro Martínez Begines

Portfolio web profesional orientado a conseguir entrevistas de trabajo, diseñado para transmitir profesionalidad, enfoque a negocio y capacidad real de aportar valor.

## 🚀 Características

- **Diseño profesional y sobrio** - Enfoque en claridad y profesionalidad
- **Completamente responsive** - Adaptado a todos los dispositivos
- **Accesible** - Implementado siguiendo mejores prácticas de accesibilidad
- **SEO optimizado** - Metadatos y estructura optimizada para buscadores
- **Rendimiento optimizado** - Carga rápida y código limpio
- **Stack moderno** - React + TypeScript + Vite

## 📋 Estructura

- **Hero Section** - Presentación clara y directa
- **Sobre mí** - Perfil profesional conciso
- **Proyectos** - 3 proyectos reales con enfoque profesional
- **Stack Tecnológico** - Organizado por categorías
- **Experiencia Profesional** - Detalle de experiencia en Reparamostumovil
- **Formación** - Educación y certificaciones
- **Contacto** - Enlaces profesionales (actualizar con datos reales)

## 🛠️ Tecnologías

- React 18
- TypeScript
- Vite
- CSS3 (Variables CSS, Grid, Flexbox)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📝 Configuración

Antes de desplegar, actualiza la información de contacto en `src/components/Contact.tsx`:
- Email
- LinkedIn
- GitHub

También actualiza los metadatos SEO en `index.html` si es necesario.

## 🚀 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración automática (recomendado):

1. **Habilita GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

2. **El workflow se ejecutará automáticamente** cuando hagas push a la rama `main` o `master`

3. Tu portfolio estará disponible en: `https://tu-usuario.github.io/Portfolio/`

### Despliegue manual:

```bash
# Construir el proyecto
npm run build

# Los archivos estarán en la carpeta dist/
# Sube el contenido de dist/ a la rama gh-pages o usa GitHub Pages
```

**Nota:** Asegúrate de que el nombre del repositorio sea `Portfolio` (con P mayúscula) o actualiza `base: '/Portfolio/'` en `vite.config.ts` con el nombre correcto de tu repositorio.

## 🎨 Personalización

Los estilos se pueden personalizar modificando las variables CSS en `src/index.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  /* ... más variables ... */
}
```

## 📄 Licencia

Todos los derechos reservados © 2024 Alejandro Martínez Begines


