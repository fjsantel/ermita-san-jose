# Guía de Diseño - Eremitorio de San José
## Para recrear el sitio en Soho

---

## 🎨 PALETA DE COLORES

### Colores principales
- **Negro principal**: `#000000` - Textos, títulos, bordes
- **Blanco**: `#ffffff` - Fondos, backgrounds
- **Gris claro**: `#f5f5f5` - Fondos alternos de secciones
- **Gris medio**: `#666666` - Subtítulos, textos secundarios
- **Gris bordes**: `#e0e0e0` - Líneas divisorias, bordes sutiles
- **Gris borde medio**: `#cccccc` - Hover en botones
- **Gris borde oscuro**: `#333333` - Hover en CTA
- **Amarillo highlight**: `rgba(255, 255, 150, 0.35)` - Destacados de texto

### Transparencias
- **Blanco transparente nav**: `rgba(255, 255, 255, 0.98)` - Navegación fija

---

## 📝 TIPOGRAFÍA

### Fuente principal
**Merriweather** (con fallback a Georgia, serif)
- Google Fonts: `https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap`

### Pesos utilizados
- **300** (Light) - Subtítulos, hero quote, pullquotes
- **400** (Regular) - Cuerpo de texto, menú, títulos de sección
- **700** (Bold) - Títulos h1, h2, h3, links destacados

---

## 📏 TAMAÑOS DE LETRA

### Desktop (pantalla completa)

#### Títulos
- **H1 (header principal)**: `64px` (4rem) - Weight 400 - Letter spacing -0.02em
- **H2 (títulos de sección)**: `48px` (3rem) - Weight 400
- **H3 (subtítulos)**: `28px` (1.75rem) - Weight 700

#### Textos de cuerpo
- **Párrafos**: `18px` (1.125rem) - Weight 400 - Line height 2
- **Subtítulo header**: `20px` (1.25rem) - Weight 300 - Color #666666
- **Hero Quote**: `32px` (2rem) - Weight 300 - Italic - Line height 1.7
- **Support text**: `28px` (1.75rem) - Weight 300 - Italic - Line height 1.7
- **Pullquote**: `40px` (2.5rem) - Weight 300 - Italic - Line height 1.6

#### Navegación y botones
- **Menú dropdown**: `14.4px` (0.9rem) - Weight 400 - Letter spacing 0.02em
- **Link destacado proyectos**: `14.4px` (0.9rem) - Weight 700
- **Botón CTA**: `16px` (1rem) - Weight 700 - Uppercase - Letter spacing 0.05em
- **Logo nav**: `16px` (1rem) - Weight 400

#### Footer
- **Email**: `18px` (1.125rem)
- **Texto secundario**: `16px` (1rem) - Weight 300 - Color #666666

### Tablet (768px)
- **H1**: `40px` (2.5rem)
- **H2**: `32px` (2rem)
- **H3**: `28px` (1.75rem)
- **Párrafos**: `16px`
- **Hero Quote**: `20px` (1.25rem)
- **Support text**: `20px` (1.25rem)
- **Pullquote**: `24px` (1.5rem)

### Móvil (480px)
- **H1**: `32px` (2rem)
- **H2**: `28px` (1.75rem)
- **Hero Quote**: `18px` (1.125rem)
- **Pullquote**: `20px` (1.25rem)

---

## 📐 ESPACIADOS Y MÁRGENES

### Line Heights (interlineado)
- **Títulos (h1, h2, h3)**: `1.3`
- **Párrafos**: `2` (doble espaciado)
- **Hero Quote**: `1.7`
- **Support text**: `1.7`
- **Pullquote**: `1.6`
- **Texto proyectos**: `1.8`

### Márgenes verticales

#### Secciones
- **Padding secciones principales**: `192px` arriba/abajo (12rem)
- **Padding header**: `128px` arriba, `96px` abajo (8rem / 6rem)
- **Padding header pequeño**: `64px` arriba, `48px` abajo (4rem / 3rem)
- **Padding hero quote**: `128px` arriba/abajo (8rem)

#### Elementos
- **Margin bottom párrafos**: `32px` (2rem)
- **Margin bottom h1**: `16px` (1rem)
- **Margin bottom h2**: `48px` (3rem)
- **Margin bottom h3**: `24px` (1.5rem)
- **Margin bottom section-title**: `96px` (6rem)

### Padding contenedor principal
- **Desktop**: `0 96px` lateral (6rem)
- **Tablet**: `0 32px` lateral (2rem)
- **Móvil**: `0 24px` lateral (1.5rem)

### Ancho máximo contenedor
- **Max-width**: `1400px`

---

## 🎯 LAYOUTS Y GRIDS

### Two Column Layout (Historia)
- **Grid**: 2 columnas iguales (1fr 1fr)
- **Gap**: `128px` (8rem)
- **Tablet/móvil**: 1 columna, gap `32px`

### Content Split (Actividades - texto + imagen)
- **Grid**: 2fr (texto) + 1fr (imagen)
- **Gap**: `128px` (8rem)
- **Imagen**: sticky, top `48px`
- **Tablet/móvil**: 1 columna, gap `48px`

### Sustainability Grid
- **Grid**: 2 columnas (repeat(2, 1fr))
- **Gap**: `96px` filas, `128px` columnas (6rem / 8rem)
- **Tablet/móvil**: 1 columna, gap `48px`

### Projects Grid (proyectos futuros)
- **Grid**: 3 columnas (repeat(3, 1fr))
- **Gap**: `64px` (4rem)
- **Tablet/móvil**: 1 columna, gap `32px`

### Project Detail (página proyectos)
- **Grid**: 1fr (imagen) + 2fr (descripción)
- **Gap**: `96px` (6rem)
- **Imagen**: sticky, top `calc(70px + 3rem)`
- **Tablet/móvil**: 1 columna, gap `48px`

---

## 🔘 BOTONES Y COMPONENTES

### Botón CTA principal
- **Padding**: `16px 48px` (1rem 3rem)
- **Background**: `#000000`
- **Color**: `#ffffff`
- **Font-size**: `16px` (1rem)
- **Font-weight**: `700`
- **Text-transform**: `uppercase`
- **Letter-spacing**: `0.05em`
- **Margin-top**: `32px` (2rem)
- **Hover background**: `#333333`

### Botón Menú dropdown
- **Padding**: `8px 20px` (0.5rem 1.25rem)
- **Background**: `#ffffff`
- **Border**: `1px solid #e0e0e0`
- **Border-radius**: `6px`
- **Font-size**: `14.4px` (0.9rem)
- **Font-weight**: `400`
- **Hover background**: `#f5f5f5`
- **Hover border**: `#cccccc`

### Dropdown menú
- **Min-width**: `240px`
- **Padding**: `8px 0` (0.5rem 0)
- **Border**: `1px solid #e0e0e0`
- **Border-radius**: `8px`
- **Box-shadow**: `0 4px 20px rgba(0, 0, 0, 0.1)`
- **Top offset**: `8px` desde botón

### Links dropdown
- **Padding**: `12px 24px` (0.75rem 1.5rem)
- **Font-size**: `14.4px` (0.9rem)
- **Hover background**: `#f5f5f5`

### Project Cards
- **Padding**: `48px` (3rem)
- **Background**: `#ffffff`
- **Border**: `1px solid #e0e0e0`
- **Hover box-shadow**: `0 4px 20px rgba(0, 0, 0, 0.1)`

### Project Status badges
- **Padding**: `8px 24px` (0.5rem 1.5rem)
- **Font-size**: `14px` (0.875rem)
- **Font-weight**: `700`
- **Text-transform**: `uppercase`
- **Letter-spacing**: `0.05em`
- **Urgente**: background `#000000`, color `#ffffff`
- **Categoría**: background `#f5f5f5`, border `1px solid #e0e0e0`

---

## 🎭 EFECTOS Y ANIMACIONES

### Transiciones
- **Links hover**: `opacity 0.3s ease` → opacity: 0.6
- **Botones hover**: `all 0.2s ease` o `background-color 0.3s ease`
- **Dropdown**: `all 0.2s ease`
- **Navegación scroll**: `transform 0.3s ease`
- **Fade in**: `opacity 0.8s ease-out, transform 0.8s ease-out`
- **Section title underline**: `width 1s ease-out`
- **Highlights**: `background-color 0.6s ease-out`
- **Menu arrow**: `transform 0.2s ease`

### Highlights de texto
- **Estado inicial**: `background-color: rgba(255, 255, 150, 0)`
- **Estado visible**: `background-color: rgba(255, 255, 150, 0.35)`
- **Padding vertical**: `2px 0`
- **Propiedad**: `box-decoration-break: clone`

### Fade in scroll
- **Transform inicial**: `translateY(30px)`, opacity: 0
- **Transform final**: `translateY(0)`, opacity: 1

### Underline títulos
- **Height**: `3px`
- **Background**: `#000000`
- **Bottom**: `-10px`
- **Width inicial**: `0` → `100%` cuando visible

---

## 📱 BREAKPOINTS RESPONSIVE

### Tablet: 768px y menor
```
- Container padding: 0 32px (2rem)
- Section padding: 64px 0 (4rem)
- Header padding: 64px 0 32px (4rem / 2rem)
- Hero padding: 64px 0 (4rem)
- Logo: 60px width
- Layouts: convertir a 1 columna
- Gaps reducidos a 32px-48px
```

### Móvil: 480px y menor
```
- Container padding: 0 24px (1.5rem)
- Títulos más pequeños (ver sección tamaños)
- Todos los grids a 1 columna
```

---

## 🖼️ IMÁGENES Y ASPECTOS VISUALES

### Hero Image
- **Desktop**: `height: 38vh`, `min-height: 436px`
- **Móvil**: `aspect-ratio: 16/9`, `background-size: contain`
- **Background**: `cover`, `center`

### Logo header
- **Desktop**: `100px` width
- **Móvil**: `60px` width
- **Margin-bottom**: `48px` (3rem)

### Logo navegación
- **Width**: `24px`

### Placeholder images
- **Background**: `#e0e0e0`
- **Color texto**: `#999999`
- **Aspect-ratio content**: `3/4`

---

## 🎬 COMPORTAMIENTOS ESPECIALES

### Navegación fija
- **Position**: fixed top
- **Height**: `70px`
- **Background**: `rgba(255, 255, 255, 0.98)` con `backdrop-filter: blur(10px)`
- **Border-bottom**: `1px solid #e0e0e0`
- **Se oculta**: al hacer scroll hacia abajo (pasado 100px)
- **Reaparece**: al hacer scroll hacia arriba
- **Body padding-top**: `70px` para compensar

### Dropdown menu
- **Se abre**: click en botón
- **Se cierra**: click fuera, click en link, o scroll
- **Arrow rotation**: 180deg cuando activo

### Smooth scroll
- **Offset**: `-80px` para compensar navegación fija
- **Behavior**: `smooth`

### Sticky elements
- **Content image**: `position: sticky`, `top: 48px`
- **Project image**: `position: sticky`, `top: calc(70px + 48px)`

---

## 📋 ESTRUCTURA DE SECCIONES

### 1. Navegación (fija)
- Logo + nombre a la izquierda
- Botón dropdown a la derecha

### 2. Header
- Logo centrado (100px)
- Título principal (h1)
- Subtítulo en gris

### 3. Hero Image
- Imagen de ancho completo
- 38vh de altura en desktop

### 4. Hero Quote
- Cita en cursiva centrada
- Max-width: 900px

### 5. Historia (section)
- Título de sección
- Dos columnas de texto
- Text-align: justify

### 6. Actividades (section-gray)
- Layout: texto 2fr + imagen 1fr
- Imagen sticky

### 7. Sostenibilidad (section)
- Grid 2x2 con items
- Pullquote centrada al final

### 8. Cómo Apoyar (section-support / section-gray)
- Texto centrado
- Botón CTA negro

### 9. Footer
- Email con link underline
- Texto secundario en gris
- Border-top: `1px solid #e0e0e0`
- Padding: `96px 0` (6rem)

---

## 📄 PÁGINA PROYECTOS

### Header pequeño
- Padding reducido: `64px 0 48px`
- Título + subtítulo centrados

### Project Detail
- Grid: imagen (1fr) + descripción (2fr)
- Badges de estado y categoría
- Specs en grid 2 columnas con background #f5f5f5
- Quote destacada con bordes arriba/abajo
- CTA final con border-top negro 2px

### Projects Grid (próximos)
- 3 columnas en desktop
- Cards con padding 48px
- Border gris, hover con sombra

---

## 🎨 NOTAS DE ESTILO

### Filosofía de diseño
- **Minimalismo**: espacios amplios, tipografía protagonista
- **Legibilidad**: line-height generoso (2.0), texto justificado
- **Jerarquía clara**: tamaños de fuente muy diferenciados
- **Color sobrio**: blanco/negro/grises, highlight amarillo sutil
- **Animaciones suaves**: transiciones sutiles, no invasivas

### Inspiración
- Revistas impresas tipo Kinfolk, Monocle
- Diseño editorial contemplativo
- Espacios negativos amplios
- Tipografía serif clásica

---

## ✅ CHECKLIST PARA SOHO

- [ ] Importar fuente Merriweather con pesos 300, 400, 700
- [ ] Configurar paleta de colores exacta
- [ ] Establecer tipografía base: 18px, line-height 2
- [ ] Configurar max-width contenedor: 1400px
- [ ] Crear navegación fija con dropdown
- [ ] Implementar comportamiento hide/show en scroll
- [ ] Configurar todos los tamaños de letra según tabla
- [ ] Aplicar espaciados de secciones: 12rem vertical
- [ ] Crear layouts de 2 columnas con gaps 8rem
- [ ] Implementar highlights amarillos con animación
- [ ] Configurar transiciones y efectos hover
- [ ] Establecer breakpoints responsive en 768px y 480px
- [ ] Crear botón CTA negro con hover gris oscuro
- [ ] Implementar smooth scroll con offset -80px
- [ ] Configurar hero image con height 38vh
- [ ] Aplicar backdrop-filter blur en navegación

---

**Versión**: 1.0
**Fecha**: 2025
**Proyecto**: Eremitorio de San José - Liquiñe, Chile
