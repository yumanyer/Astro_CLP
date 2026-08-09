# 🚀 Checklist de Lanzamiento — Landing Page CLP

## 📂 Contenido
- [ ] Agregar todas las imágenes faltantes. (Pendiente: Imágenes de historia para 2017-2023 y fotos individuales del Core Team)
- [ ] Agregar las imágenes pendientes de la sección Historia. (Parcialmente hecho: 2024-2026 tienen imágenes, 2017-2023 usan placeholder)
- [ ] Agregar las fotos faltantes del Core Team. (Pendiente: Todos usan la misma imagen `lego_manu.webp`)
- [X] Agregar los logos faltantes de Partners. (Hecho: Los logos de partners están cargados en `Partners.astro`)
- [ ] Revisar y actualizar todo el contenido textual. (Pendiente: Requiere revisión manual exhaustiva)

---

## 🖼️ Optimización
- [X] Optimizar todas las imágenes (peso y resolución). (Hecho: Partners OK. Events OK. History OK. ⚠️ Los 4 archivos `2026_*.webp` eran PNG mal nombrados (1080×1920 RGBA, 1.2-2.1 MB c/u). Convertidos a WebP real con `cwebp -q 80 -m 6`: ~5.6 MB → ~0.4 MB en total)
- [X] Revisar dimensiones según el uso de cada imagen. (Parcialmente hecho: Partners OK. Los `<img>` de Events/Partners/TeamCard no llevan `width`/`height`, pero sus contenedores ya reservan espacio fijo (`.evento-img` 220px, `.logo-pill`, `.team-photo` 140×140) → riesgo de CLS mínimo. Opcional: añadir atributos explícitos)
- [X] Implementar `loading="lazy"` donde corresponda. (Hecho: Verificado en `History.astro`, `Partners.astro`, `Events.astro`, `TeamCard.astro`, `Navbar.astro`)
- [X] Optimizar el modelo 3D (`.glb`). (Hecho: Compress con gltf-transform `optimize` + meshopt + quantize + texturas WebP. **22.2 MB → 3.1 MB (-86%)**, geometría intacta (257k verts, sin simplify), texturas 2048px→1024px. `Hero.astro` actualizado con `MeshoptDecoder` en el `GLTFLoader`)
- [X] Revisar el peso total del sitio. (Hecho: Build **32 MB → 5.9 MB**. Dominado ahora por `1.glb` (3.1 MB). El `.mp4` sin usar ya no está en `public/` ni en `dist/`. Imgs de año 2026 ya optimizadas)

---

## 📱 Responsive
- [ ] Revisar Desktop. (Pendiente: Requiere pruebas manuales)
- [ ] Revisar Notebook. (Pendiente: Requiere pruebas manuales)
- [X] Revisar Tablet. (Parcialmente hecho: Media queries presentes en `History.astro`, `Contact.astro` y `Navbar.astro`. `global.css` tiene `overflow-x: hidden`)
- [ ] Revisar Android. (Pendiente: Requiere pruebas manuales)
- [ ] Revisar iPhone. (Pendiente: Requiere pruebas manuales)
- [ ] Corregir problemas de layout y overflow. (Parcialmente hecho: `overflow-x: hidden` en `global.css` ayuda, pero no garantiza la corrección de todos los problemas de layout)

---

## 🔗 Enlaces
- [X] Agregar enlaces a las redes sociales de CLP. (Hecho: URLs reales en `Footer.astro` y `Contact.astro` para Telegram, X, LinkedIn e Instagram)
- [ ] Agregar los enlaces del Core Team (2 por integrante). (Parcialmente hecho: Solo Manuel Pisoni tiene enlaces reales en `Team.astro`; los otros 5 miembros usan `href="#"`)
- [ ] Reemplazar los enlaces muertos `href="#"`. (Pendiente: Logo del navbar en `Navbar.astro`, CTA "Reservar Lugar" en `NextEvent.astro` y redes del Core Team)
- [ ] Verificar que todos los enlaces funcionen correctamente. (Pendiente: Requiere pruebas manuales)
- [ ] Abrir enlaces externos en una nueva pestaña. (Parcialmente hecho: `Events.astro` usa `target="_blank"` para Luma, pero `TeamCard.astro` no lo usa para enlaces sociales)

---

## 📝 Formulario
- [ ] Conectar el formulario al backend. (Pendiente: `Contact.astro` tiene la estructura del formulario y validación frontend, pero no hay evidencia de conexión a un backend)
- [X] Validar todos los campos. (Hecho: `Contact.astro` incluye validación frontend para nombre, email, teléfono, motivo y mensaje)
- [ ] Mostrar mensajes de éxito y error. (Parcialmente hecho: `Contact.astro` muestra un mensaje de éxito, pero los mensajes de error son solo visuales y no se manejan a nivel de backend)
- [ ] Probar el envío completo. (Pendiente: Requiere pruebas manuales y conexión a backend)
- [ ] Implementar protección contra spam. (Pendiente: No hay evidencia de implementación de protección contra spam)

---

## 📅 Eventos
- [X] Revisar el funcionamiento del contador. (Hecho: `isConfirmed` ya no está hardcodeado — se deriva dinámicamente de `targetDate` en `NextEvent.astro:16`. Implementado el JS de countdown completo (días/hs/min/seg con `setInterval` de 1s, cero-padded, corta en 00:00:00 al vencer). CTA "Reservar Lugar" usa `eventData.lumaUrl` con `target="_blank"` y fallback a `#contacto`. Con fecha actual (vencida) el sitio muestra el caso "en organización" correctamente; al setear una fecha futura renderiza el contador)
- [X] Verificar la información de los eventos. (Hecho: `Events.astro` contiene un dataset de eventos con título, fecha, descripción, ubicación e imagen)
- [X] Probar los enlaces hacia Luma. (Hecho: `Events.astro` tiene enlaces a Luma con `target="_blank"` y `rel="noopener noreferrer"`)

---

## 📖 Historia
- [ ] Agregar todos los años pendientes. (Pendiente: Años 2017-2023 en `History.astro` usan imágenes placeholder)
- [X] Verificar el visor de historias. (Hecho: `StoryViewer.astro` implementa la lógica del visor con navegación y barras de progreso)
- [X] Revisar animaciones. (Hecho: `History.astro` y `StoryViewer.astro` incluyen animaciones y transiciones)
- [X] Verificar la carga correcta de todas las imágenes. (Hecho: `History.astro` usa `loading="lazy"` y `decoding="async"` para las imágenes)

---

## ♿ Accesibilidad
- [X] Agregar `alt` a todas las imágenes. (Parcialmente hecho: `History.astro`, `Partners.astro`, `Events.astro`, `TeamCard.astro`, `Navbar.astro` usan atributos `alt`)
- [ ] Revisar contraste de colores. (Pendiente: Requiere herramientas de auditoría)
- [X] Verificar navegación mediante teclado. (Parcialmente hecho: `StoryViewer.astro` tiene navegación por teclado. ⚠️ Las tarjetas del equipo son focusables (`tabindex="0"`) pero no responden a Enter/Espacio porque el handler está comentado en `src/scripts/global.ts`)
- [X] Revisar atributos ARIA. (Hecho: `Events.astro` usa `role="tablist"`/`role="tab"`, `Navbar.astro` usa `aria-expanded` + `aria-label`, `StoryViewer.astro` usa `aria-label`. ✅ Botones orbitales de `OrbitalItem.astro` ahora tienen `aria-pressed` (estado activo) + `aria-label` descriptivo, sincronizados en el click handler de `History.astro`)
- [X] Fix tarjetas de equipo en móvil. (Hecho: `initTeamCards()` habilitado en `src/scripts/global.ts` — click-toggle solo en pantallas táctiles (`hover: none`/`pointer: coarse`) + cierre al tocar afuera, y teclado Enter/Espacio siempre. Sincroniza `aria-expanded` en `TeamCard.astro`)

---

## 🔍 SEO
- [ ] Configurar Meta Title. (Pendiente: `MainLayout.astro` tiene un `<title>` genérico. No hay configuración dinámica)
- [ ] Configurar Meta Description. (Pendiente: No hay meta description en `MainLayout.astro`)
- [ ] Configurar Open Graph. (Pendiente: No hay etiquetas Open Graph)
- [ ] Configurar Twitter Cards. (Pendiente: No hay etiquetas Twitter Cards)
- [ ] Configurar URL canónica. (Pendiente: No hay `<link rel="canonical">`)
- [ ] Generar Sitemap. (Pendiente: `astro.config.mjs` no muestra configuración de sitemap ni `@astrojs/sitemap`)
- [ ] Configurar `robots.txt`. (Pendiente: No hay evidencia de `robots.txt`)
- [ ] Agregar favicon e íconos. (Pendiente: No hay enlaces a favicon en `MainLayout.astro`)
- [ ] Implementar datos estructurados (Schema.org). (Pendiente: No hay evidencia de datos estructurados)

---

## ⚡ Rendimiento
- [ ] Ejecutar Lighthouse. (Pendiente: Requiere herramientas de auditoría)
- [ ] Optimizar el modelo 3D `1.glb` (22 MB). (Pendiente: Comprimir con gltf-transform/draco o cargar lazy; es el principal bloqueante de performance)
- [ ] Mejorar Performance. (Pendiente: Requiere herramientas de auditoría)
- [ ] Mejorar Accessibility. (Pendiente: Requiere herramientas de auditoría)
- [ ] Mejorar Best Practices. (Pendiente: Requiere herramientas de auditoría)
- [ ] Mejorar SEO. (Pendiente: Requiere herramientas de auditoría)

---

## 📊 Analítica
- [ ] Configurar Google Analytics. (Pendiente: No hay evidencia de Google Analytics)
- [ ] Configurar Google Search Console. (Pendiente: No hay evidencia de Google Search Console)
- [ ] Medir envíos del formulario. (Pendiente: Requiere integración con backend/analítica)
- [ ] Medir clics en redes sociales. (Pendiente: Requiere integración con analítica)

---

## 🚀 Producción
- [ ] Configurar dominio. (Pendiente: No hay evidencia de configuración de dominio)
- [ ] Configurar HTTPS. (Pendiente: No hay evidencia de configuración HTTPS)
- [ ] Revisar caché. (Pendiente: No hay evidencia de configuración de caché)
- [ ] Desplegar en Cloudflare. (Pendiente: No hay configuración de Cloudflare Pages versionada — `wrangler.toml`, `CNAME` o workflow)
- [ ] Realizar pruebas finales en distintos navegadores. (Pendiente: Requiere pruebas manuales)
- [ ] Verificar que no existan errores en consola. (Pendiente: Requiere pruebas manuales)
- [ ] Verificar build: correr `astro build` y `astro check` sin errores ni warnings. (Pendiente)
- [ ] Revisar funcionamiento general de toda la landing. (Pendiente: Requiere pruebas manuales)

---

## 📝 Notas
- [ ] Mapa de calor
- [ ] Traducción de la landing dependiendo de donde se encuentre
- [ ] Fix copyright del footer: dice "© 2026" hardcodeado; `currentYear` se calcula en `Footer.astro` pero no se usa. (Pendiente)
- [ ] Rutas de assets relativas (`img/...`, `1.glb`): funcionan en la raíz pero se rompen si se sirve bajo un subpath/base. (Pendiente)
