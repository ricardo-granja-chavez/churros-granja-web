# Churros Granja Web

Aplicación web para Churros Granja desarrollada con React, TypeScript, Vite y Tailwind CSS.

## Stack Tecnológico

- **React 18.3** - Biblioteca de UI para construcción de interfaces
- **TypeScript 5.9** - Superset de JavaScript con tipado estático
- **Vite 5.4** - Herramienta de desarrollo y compilación ultra-rápida
- **Tailwind CSS 3.4** - Framework CSS utility-first para estilos

## Comandos Disponibles

### Desarrollo Local

```bash
npm run dev
```

**Descripción**: Inicia el servidor de desarrollo de Vite en `http://localhost:5173`

**Qué hace**:
- Levanta un servidor local con Hot Module Replacement (HMR)
- Detecta cambios en archivos automáticamente
- Actualiza el navegador instantáneamente sin recargar la página
- Mantiene el estado de la aplicación mientras desarrollas

**Cuándo usar**: Durante todo el desarrollo. Déjalo corriendo en una terminal mientras trabajas.

---

### Compilación de Producción

```bash
npm run build
```

**Descripción**: Compila la aplicación optimizada para producción en la carpeta `dist/`

**Qué hace**:
1. **Verifica TypeScript**: Ejecuta `tsc` para validar tipos sin errores
2. **Transpila código**: Convierte TypeScript a JavaScript optimizado
3. **Minifica archivos**: Reduce el tamaño del código (tree-shaking, minificación)
4. **Optimiza recursos**: Procesa CSS, imágenes y otros assets
5. **Genera bundle**: Crea archivos estáticos listos para desplegar

**Cuándo usar**: Antes de desplegar a producción o para verificar que todo compila correctamente.

---

### Vista Previa de Producción

```bash
npm run preview
```

**Descripción**: Sirve localmente la versión compilada de producción

**Qué hace**:
- Inicia un servidor HTTP simple
- Sirve los archivos de la carpeta `dist/`
- Te permite probar la versión exacta que verán los usuarios finales

**Cuándo usar**: Después de `npm run build` para validar que la compilación funciona antes de desplegar.

---

## Estado del Proyecto

✅ Proyecto inicializado correctamente
✅ Dependencias instaladas (136 paquetes)
✅ TypeScript configurado con strict mode
✅ Tailwind CSS integrado con PostCSS
✅ Compilación de producción exitosa
✅ Archivos Steering de Kiro creados

## Próximos Pasos

1. Conectar con diseño de Figma
2. Extraer tokens de diseño (colores, tipografías, espaciados)
3. Configurar sistema de diseño en Tailwind
4. Implementar componentes base
5. Desarrollar primera pantalla

## Convenciones del Proyecto

Este proyecto sigue convenciones documentadas en `.kiro/steering/`:

- `project-context.md` - Stack tecnológico y estructura
- `development-conventions.md` - Reglas de TypeScript y React
- `visual-guidelines.md` - Fidelidad al diseño de Figma
- `workflow.md` - Proceso de trabajo y mejores prácticas

## Requisitos

- Node.js 20.x
- npm 9.x

## Referencia de Diseño

El diseño visual está definido en Figma y es la fuente de verdad para la interfaz.

**Importante**: Todos los componentes, colores, tipografías e iconos deben provenir del diseño de Figma.
