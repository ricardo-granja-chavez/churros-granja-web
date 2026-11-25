---
name: "Development Conventions"
description: "Convenciones de desarrollo para Churros Granja Web"
---

# Convenciones de Desarrollo

## TypeScript

- **Tipado estricto**: Mantener TypeScript correctamente tipado en todo el código
- **Evitar `any`**: No usar el tipo `any` salvo justificación técnica clara
- **Inferencia de tipos**: Aprovechar la inferencia de tipos cuando sea obvio
- **Interfaces vs Types**: Preferir `interface` para objetos y `type` para uniones/intersecciones

## Componentes React

- **Componentes funcionales**: Usar siempre componentes funcionales con hooks
- **Responsabilidad única**: Cada componente debe tener una responsabilidad clara
- **Tamaño reducido**: Mantener componentes pequeños y manejables (< 200 líneas idealmente)
- **Props tipadas**: Siempre definir interfaces para las props de componentes
- **Nomenclatura**: Usar PascalCase para nombres de componentes

## Estructura de Archivos

- **Separación clara**: Mantener separados componentes, páginas, tipos y recursos
- **Colocation**: Mantener archivos relacionados cerca (ej: estilos específicos junto al componente)
- **Imports absolutos**: Configurar paths absolutos si el proyecto crece

## Código Limpio

- **DRY (Don't Repeat Yourself)**: Evitar duplicación de código
- **Funciones pequeñas**: Mantener funciones con una sola responsabilidad
- **Nombres descriptivos**: Usar nombres claros que describan la intención
- **Comentarios**: Solo cuando el código por sí solo no es suficientemente claro

## Dependencias

- **Minimizar dependencias**: Solo agregar dependencias cuando sea realmente necesario
- **Paquetes establecidos**: Preferir paquetes bien mantenidos y populares
- **Revisar antes de agregar**: Evaluar el tamaño y las dependencias transitivas

## Performance

- **Lazy loading**: Considerar carga diferida para rutas/componentes grandes
- **Memoización**: Usar `useMemo` y `useCallback` solo cuando sea medible la mejora
- **Imágenes optimizadas**: Comprimir y optimizar imágenes antes de agregarlas

## Git

- **Commits atómicos**: Cada commit debe representar un cambio lógico único
- **Mensajes claros**: Describir qué y por qué, no cómo
- **No commits automáticos**: Siempre revisar cambios antes de hacer commit
