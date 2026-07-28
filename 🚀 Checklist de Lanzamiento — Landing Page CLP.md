# 🚀 Checklist de Lanzamiento — Landing Page CLP

## 📂 Contenido
- [ ] Agregar todas las imágenes faltantes. (Pendiente: Imágenes de historia para 2017-2023 y fotos individuales del Core Team)
- [ ] Agregar las imágenes pendientes de la sección Historia. (Parcialmente hecho: 2024-2026 tienen imágenes, 2017-2023 usan placeholder)
- [ ] Agregar las fotos faltantes del Core Team. (Pendiente: Todos usan la misma imagen `lego_manu.webp`)
- [X] Agregar los logos faltantes de Partners. (Hecho: Los logos de partners están cargados en `Partners.astro`)
- [X] Revisar y actualizar todo el contenido textual. (Pendiente: Requiere revisión manual exhaustiva)

---

## 🖼️ Optimización
- [X] Optimizar todas las imágenes (peso y resolución). (Pendiente: Requiere herramientas de auditoría)
- [X] Revisar dimensiones según el uso de cada imagen. => Listo Partners(FALTAN:HISTORIA) (Parcialmente hecho: `loading="lazy"` y `decoding="async"` implementados en varias secciones, pero la revisión de dimensiones específicas requiere auditoría visual)
- [X] Implementar `loading="lazy"` donde corresponda. (Hecho: Implementado en `History.astro`, `Partners.astro`, `Events.astro`, `TeamCard.astro`, `Navbar.astro`)
- [X] Optimizar el modelo 3D (`.glb`). (Hecho: El modelo `1.glb` se carga y escala en `Hero.astro`. La optimización del archivo en sí no se puede verificar directamente, pero la implementación es correcta)
- [ ] Revisar el peso total del sitio. (Pendiente: Requiere herramientas de auditoría)

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
- [X] Agregar enlaces a las redes sociales de CLP. (Pendiente: `Footer.astro` y `Contact.astro` tienen placeholders `href="#"`. Solo Telegram está en `Hero.astro` y `Navbar.astro`)
- [ ] Agregar los enlaces del Core Team (2 por integrante). (Pendiente: Solo Manuel Pisoni tiene enlaces reales en `Team.astro`)
- [ ] Verificar que todos los enlaces funcionen correctamente. (Pendiente: Requiere pruebas manuales)
- [X] Abrir enlaces externos en una nueva pestaña. (Parcialmente hecho: `Events.astro` usa `target="_blank"` para Luma, pero `TeamCard.astro` no lo usa para enlaces sociales)

---

## 📝 Formulario
- [ ] Conectar el formulario al backend. (Pendiente: `Contact.astro` tiene la estructura del formulario y validación frontend, pero no hay evidencia de conexión a un backend)
- [X] Validar todos los campos. (Hecho: `Contact.astro` incluye validación frontend para nombre, email, motivo y mensaje)
- [ ] Mostrar mensajes de éxito y error. (Parcialmente hecho: `Contact.astro` muestra un mensaje de éxito, pero los mensajes de error son solo visuales y no se manejan a nivel de backend)
- [ ] Probar el envío completo. (Pendiente: Requiere pruebas manuales y conexión a backend)
- [ ] Implementar protección contra spam. (Pendiente: No hay evidencia de implementación de protección contra spam)

---

## 📅 Eventos
- [ ] Revisar el funcionamiento del contador. (Pendiente: `NextEvent.astro` tiene la estructura, pero el contador está desactivado (`isConfirmed = false`) y no hay script activo para él)
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
- [X] Verificar navegación mediante teclado. (Parcialmente hecho: `StoryViewer.astro` tiene navegación por teclado para las historias. `TeamCard.astro` es focusable con `tabindex="0"`)
- [ ] Revisar atributos ARIA. (Parcialmente hecho: `Events.astro` usa `role="tablist"` y `role="tab"`. `Navbar.astro` usa `aria-expanded` para el menú hamburguesa. `StoryViewer.astro` usa `aria-label`)

---

## 🔍 SEO
- [ ] Configurar Meta Title. (Pendiente: `MainLayout.astro` tiene un `<title>` genérico. No hay configuración dinámica)
- [ ] Configurar Meta Description. (Pendiente: No hay meta description en `MainLayout.astro`)
- [ ] Configurar Open Graph. (Pendiente: No hay etiquetas Open Graph)
- [ ] Configurar Twitter Cards. (Pendiente: No hay etiquetas Twitter Cards)
- [ ] Generar Sitemap. (Pendiente: `astro.config.mjs` no muestra configuración de sitemap)
- [ ] Configurar `robots.txt`. (Pendiente: No hay evidencia de `robots.txt`)
- [ ] Agregar favicon e íconos. (Pendiente: No hay enlaces a favicon en `MainLayout.astro`)
- [ ] Implementar datos estructurados (Schema.org). (Pendiente: No hay evidencia de datos estructurados)

---

## ⚡ Rendimiento
- [ ] Ejecutar Lighthouse. (Pendiente: Requiere herramientas de auditoría)
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
- [ ] Desplegar en Cloudflare. (Pendiente: No hay evidencia de despliegue en Cloudflare)
- [ ] Realizar pruebas finales en distintos navegadores. (Pendiente: Requiere pruebas manuales)
- [ ] Verificar que no existan errores en consola. (Pendiente: Requiere pruebas manuales)
- [ ] Revisar funcionamiento general de toda la landing. (Pendiente: Requiere pruebas manuales)

## 📝 Notas
- [ ] Mapa de calor 
- [ ] Traduccion de la landing dependiendo de donde se encuentre 



