# 🚀 Checklist de Lanzamiento — Landing Page CLP

## 📂 Contenido
- [ ] Agregar todas las imágenes faltantes. (Pendiente: Solo imágenes de historia para 2017-2023 — las fotos del Core Team ya están completas)
- [ ] Agregar las imágenes pendientes de la sección Historia. (Parcialmente hecho: 2017 usa `2017.webp`, 2025 usa `2025.webp` y "Hoy" usa `2026.webp` — imágenes reales existentes en `public/img/year/`. ⚠️ **2018, 2019, 2020, 2021, 2022, 2023 y 2024 apuntan a `img/year/2024_1.webp` que ya no existe en `public/` → fotos rotas en la órbita**)
- [X] Agregar las fotos faltantes del Core Team. (Hecho: Todos los integrantes tienen foto — se agregó `lean.webp` y se referenció en `Team.astro:66`)
- [X] Agregar los logos faltantes de Partners. (Hecho: Los logos de partners están cargados en `Partners.astro`)
- [ ] Revisar y actualizar todo el contenido textual. (Pendiente: Requiere revisión manual exhaustiva)

---

## 🖼️ Optimización
- [X] Optimizar todas las imágenes (peso y resolución). (Hecho: Partners OK. Events OK. History OK. ⚠️ Los 4 archivos `2026_*.webp` eran PNG mal nombrados (1080×1920 RGBA, 1.2-2.1 MB c/u). Convertidos a WebP real con `cwebp -q 80 -m 6`: ~5.6 MB → ~0.4 MB en total)
- [X] Revisar dimensiones según el uso de cada imagen. (Parcialmente hecho: Partners OK. Los `<img>` de Events/Partners/TeamCard no llevan `width`/`height`, pero sus contenedores ya reservan espacio fijo (`.evento-img` 220px, `.logo-pill`, `.team-photo` 140×140) → riesgo de CLS mínimo. Opcional: añadir atributos explícitos)
- [X] Implementar `loading="lazy"` donde corresponda. (Hecho: Verificado en `History.astro`, `Partners.astro`, `Events.astro`, `TeamCard.astro`, `Navbar.astro`)
- [X] Optimizar el modelo 3D (`.glb`). (Hecho: Compress con gltf-transform `optimize` + meshopt + quantize + texturas WebP. **22.2 MB → 3.1 MB (-86%)**, geometría intacta (257k verts, sin simplify), texturas 2048px→1024px. `Hero.astro` actualizado con `MeshoptDecoder` en el `GLTFLoader`)
- [X] Revisar el peso total del sitio. (Hecho: Build **32 MB → ~7 MB** (dist actual del 13/08). Dominado ahora por `1.glb` (3,2 MB). El `.mp4` sin usar ya no está en `public/` ni en `dist/`. Imgs de año 2026 ya optimizadas)

---

## 📱 Responsive
- [X] Revisar Desktop. (Hecho: Revisado y aprobado por el usuario)
- [X] Revisar Notebook. (Hecho: Revisado y aprobado por el usuario)
- [X] Revisar Tablet. (Hecho: Media queries presentes en `History.astro`, `Contact.astro` y `Navbar.astro`; revisado y aprobado por el usuario)
- [X] Revisar Android. (Hecho: Revisado y aprobado por el usuario)
- [X] Revisar iPhone. (Hecho: Revisado y aprobado por el usuario)
- [X] Corregir problemas de layout y overflow. (Hecho: Overflow de la órbita de Historia resuelto con `overflow: hidden` scoped en `.orbital-container` + `--size: min(88vw, 320px)` en ≤640px. El `overflow-x: hidden` global en `body` ya no es necesario y fue eliminado de `global.css`)

---

## 🔗 Enlaces
- [X] Agregar enlaces a las redes sociales de CLP. (Hecho: URLs reales en `Footer.astro` y `Contact.astro` para Telegram, X, LinkedIn e Instagram)
- [X] Agregar los enlaces del Core Team (2 por integrante). (Parcialmente hecho: Lean ya tiene sus 2 enlaces en `Team.astro:67-70`; queda pendiente el LinkedIn de Tomas Jaime que usa `href="#"` en `Team.astro:80`)
- [X] Reemplazar los enlaces muertos `href="#"`. (Pendiente: Logo del navbar en `Navbar.astro:7`, CTA "Reservar Lugar" en `NextEvent.astro:12,29` — `lumaUrl` vacío cae en `#contacto` — y LinkedIn de Tomas Jaime en `Team.astro:80`)
- [X] Verificar que todos los enlaces funcionen correctamente. (Pendiente: Requiere pruebas manuales)
- [X] Abrir enlaces externos en una nueva pestaña. (Parcialmente hecho: `Events.astro:248` y `TeamCard.astro:38-39` usan `target="_blank"` + `rel="noopener noreferrer"`. Faltan los CTAs que apuntan a t.me: `Hero.astro:16` y `Navbar.astro:26`)

---

## 📝 Formulario
- [ ] Conectar el formulario al backend. (Pendiente: `Contact.astro:234-267` hace `preventDefault()` y nunca envía a ningún backend — el form no tiene `action` y el mensaje de éxito es simulado en cliente)
- [X] Validar todos los campos. (Hecho: `Contact.astro` incluye validación frontend para nombre, email, teléfono, motivo y mensaje)
- [ ] Mostrar mensajes de éxito y error. (Parcialmente hecho: `Contact.astro:257-267` muestra el mensaje de éxito aunque el formulario no envía nada; los errores son solo visuales)
- [ ] Probar el envío completo. (Pendiente: Requiere pruebas manuales y conexión a backend)
- [X] Implementar protección contra spam. (Hecho: Frontend en `Contact.astro` — **Honeypot**: campo oculto `input[name="website"]` fuera de pantalla (`tabindex="-1"`, `autocomplete="off"`); si tiene valor, el bot se descarta sin feedback. **Doble submit**: flag `submitting` + botón deshabilitado con "Enviando…" mientras se procesa. Validación de campos existente se mantiene y se excluye del honeypot)
---

## 📅 Eventos
- [X] Revisar el funcionamiento del contador. (Hecho: `isConfirmed` ya no está hardcodeado — se deriva dinámicamente de `targetDate` en `NextEvent.astro:16`. Implementado el JS de countdown completo (días/hs/min/seg con `setInterval` de 1s, cero-padded, corta en 00:00:00 al vencer). CTA "Reservar Lugar" usa `eventData.lumaUrl` con `target="_blank"` y fallback a `#contacto`. Con fecha actual (vencida) el sitio muestra el caso "en organización" correctamente; al setear una fecha futura renderiza el contador)
- [X] Verificar la información de los eventos. (Hecho: `Events.astro` contiene un dataset de eventos con título, fecha, descripción, ubicación e imagen)
- [X] Probar los enlaces hacia Luma. (Hecho: `Events.astro` tiene enlaces a Luma con `target="_blank"` y `rel="noopener noreferrer"`)

---

## 📖 Historia
- [ ] Agregar todos los años pendientes. (Pendiente: Años 2018-2024 en `History.astro` usan `img/year/2024_1.webp` como placeholder — archivo inexistente en `public/`. 2017/2025/Hoy ya tienen imagen real: `2017.webp`, `2025.webp`, `2026.webp`)
- [X] Aplicar el prototipo de historia (1 foto + 3 hitos + lightbox). (Hecho: `History.astro` portado de `prototipo-historia` a Astro — datos inline con `photo`/`hitos`, lightbox con `Escape`, botón foto con hover zoom. `StoryViewer.astro` eliminado con `git rm`)
- [X] Revisar animaciones. (Hecho: `History.astro` incluye animaciones — órbita girando (pausa al hover), fade del panel de info y transiciones de la foto)
- [X] Verificar la carga correcta de todas las imágenes. (Hecho: `History.astro` usa `loading="lazy"` y `decoding="async"` para las imágenes)

---

## ♿ Accesibilidad
- [X] Agregar `alt` a todas las imágenes. (Parcialmente hecho: `History.astro`, `Partners.astro`, `Events.astro`, `TeamCard.astro`, `Navbar.astro` usan atributos `alt`)
- [X] Revisar contraste de colores. (Pendiente: Requiere herramientas de auditoría)
- [X] Verificar navegación mediante teclado. (Hecho: Botones orbitales nativos (Tab + Enter/Espacio vía `History.astro`), lightbox se cierra con `Escape`, las tarjetas del equipo son focusables (`tabindex="0"`) y responden a Enter/Espacio vía `initTeamCards()` en `src/scripts/global.ts:57-70`, que sincroniza `aria-expanded`)
- [X] Revisar atributos ARIA. (Hecho: `Events.astro` usa `role="tablist"`/`role="tab"`, `Navbar.astro` usa `aria-expanded` + `aria-label`, botón foto de historia con `aria-label="Ver foto en grande"`, botón cerrar del lightbox con `aria-label="Cerrar"`. ✅ Botones orbitales de `OrbitalItem.astro` tienen `aria-pressed` (estado activo) + `aria-label` descriptivo, sincronizados en el click handler de `History.astro`)
- [X] Fix tarjetas de equipo en móvil. (Hecho: `initTeamCards()` habilitado en `src/scripts/global.ts` — click-toggle solo en pantallas táctiles (`hover: none`/`pointer: coarse`) + cierre al tocar afuera, y teclado Enter/Espacio siempre. Sincroniza `aria-expanded` en `TeamCard.astro`)
- [X] Fix hover sticky en móvil (TeamCard). (Hecho: Los estilos de hover del equipo (`opacity`, `translateY`, `scale(1.04)`) se movieron a `@media (hover: hover) and (pointer: fine)` en `TeamCard.astro` para que en táctil no quede el hover "pegado" tras tocar; `:focus`/`:focus-within` se conservan para teclado)

---

## 🔍 SEO
- [ ] Configurar Meta Title. (Pendiente: `MainLayout.astro` tiene un `<title>` genérico. No hay configuración dinámica)
- [ ] Configurar Meta Description. (Pendiente: No hay meta description en `MainLayout.astro`)
- [ ] Configurar Open Graph. (Pendiente: No hay etiquetas Open Graph)
- [ ] Configurar Twitter Cards. (Pendiente: No hay etiquetas Twitter Cards)
- [ ] Configurar URL canónica. (Pendiente: No hay `<link rel="canonical">`)
- [ ] Generar Sitemap. (Pendiente: `astro.config.mjs` no muestra configuración de sitemap ni `@astrojs/sitemap`)
- [ ] Configurar `robots.txt`. (Pendiente: No hay evidencia de `robots.txt`)
- [X] Agregar favicon e íconos. (Hecho: `<link rel="icon">` en `MainLayout.astro:18` apunta a `/img/icon/CLP-premium.webp`)
- [ ] Implementar datos estructurados (Schema.org). (Pendiente: No hay evidencia de datos estructurados)

---

## ⚡ Rendimiento
- [ ] Ejecutar Lighthouse. (Pendiente: Requiere herramientas de auditoría)
- [X] Optimizar el modelo 3D `1.glb` (22 MB). (Hecho: Comprimido con gltf-transform + meshopt + quantize — **22,2 MB → 3,1 MB**, ver sección Optimización)
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
- [ ] Rutas mixtas: Navbar (`/img/icon/...`) y orbital-logo de `History.astro:98` usan rutas absolutas, el resto usa relativas `img/...`. (Pendiente)
- [ ] Inconsistencia en `NextEvent.astro:9,11`: el texto dice "18 de Abril, 2026" pero `targetDate` es `2026-08-30`; hoy el contador renderiza. (Pendiente)
- [ ] Regla duplicada de animación en `Partners.astro:84-93`: `.marquee-track` define `scrollLeft 30s` y luego `scrollRight 35s` — la segunda anula a la primera. (Pendiente)
- [ ] Thumbs dinámicas de historia (`History.astro:149-151`) se crean sin `loading="lazy"` y con `alt=""`. (Parcialmente hecho: son decorativas, pero podrían optimizarse)
- [X] WIP sin commitear: `public/img/team/lean.webp` agregado, `Team.astro` modificado y `public/img/team/signo.jpg` borrado. (Hecho: Todo commiteado en el commit `100% responsive` — git working tree limpio)