---
name: "Visual Guidelines"
description: "Convenciones visuales basadas en el diseño de Figma"
---

# Convenciones Visuales

## Principio Fundamental

**El diseño de Figma es la fuente de verdad para toda la interfaz visual.**

## Reglas Estrictas

### 1. Fidelidad al Diseño

- Respetar exactamente el diseño definido en Figma
- No inventar componentes visuales que no existan en el diseño
- No modificar colores, tipografías, espaciados o proporciones sin aprobación
- Consultar ante cualquier ambigüedad o decisión visual

### 2. Componentes

- Identificar los componentes reutilizables en el diseño de Figma
- Mantener la jerarquía y estructura visual del diseño
- Respetar los estados de componentes (hover, active, disabled, etc.)
- No agregar variantes de componentes no contempladas en el diseño

### 3. Colores

- Extraer la paleta de colores directamente de Figma
- Configurar colores como variables de Tailwind si es necesario
- No usar colores que no estén en la paleta del diseño
- Mantener consistencia en el uso de colores según su propósito

### 4. Tipografía

- Usar las familias, pesos y tamaños de fuente definidos en Figma
- Respetar la jerarquía tipográfica (headings, body, captions, etc.)
- Configurar las fuentes en Tailwind para facilitar su uso
- No modificar line-height o letter-spacing sin verificar con el diseño

### 5. Espaciado y Layout

- Respetar los márgenes y paddings definidos
- Mantener la alineación y distribución de elementos
- Usar el sistema de grids si está definido en el diseño
- Verificar espaciados en diferentes breakpoints

### 6. Iconos y Recursos

- Usar únicamente los iconos y recursos proporcionados en Figma
- Exportar iconos en el formato más apropiado (SVG preferido)
- Mantener los tamaños y colores originales de los iconos
- No reemplazar iconos con alternativas sin aprobación

### 7. Responsive Design

- Implementar los breakpoints definidos en el diseño
- Verificar que existan diseños móvil y desktop en Figma
- Adaptar el layout según las guías de diseño responsive
- Consultar ante casos no contemplados en el diseño

## Tailwind CSS

### Configuración

- Extender la configuración de Tailwind para incluir colores personalizados
- Configurar fuentes personalizadas en `tailwind.config.js`
- Agregar utilidades personalizadas solo si es absolutamente necesario

### Uso

- Preferir clases de utilidad de Tailwind sobre CSS personalizado
- Usar `@apply` en CSS solo para componentes complejos
- Mantener consistencia en el uso de clases de Tailwind
- Aprovechar las variantes responsive (`sm:`, `md:`, `lg:`, etc.)

## Proceso de Implementación

1. **Análisis del diseño**: Revisar el diseño de Figma antes de implementar
2. **Extracción de tokens**: Identificar colores, fuentes, espaciados
3. **Configuración de Tailwind**: Extender config con tokens del diseño
4. **Implementación**: Desarrollar componentes fieles al diseño
5. **Verificación visual**: Comparar implementación con diseño de Figma
6. **Ajustes**: Corregir diferencias hasta lograr fidelidad exacta

## Herramientas

- **Figma Dev Mode**: Para inspeccionar propiedades CSS exactas
- **Browser DevTools**: Para comparar implementación con diseño
- **Figma to Code plugins**: Como referencia, no como código final
