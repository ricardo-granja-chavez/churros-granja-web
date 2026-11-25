---
name: "Workflow"
description: "Convenciones de trabajo y flujo de desarrollo"
---

# Convenciones de Trabajo

## Principios Generales

### 1. Analizar Antes de Modificar

- Leer y entender el código existente antes de hacer cambios
- Identificar dependencias y efectos de los cambios propuestos
- Verificar que no exista ya una solución implementada
- No asumir el comportamiento sin verificarlo

### 2. Implementar en Tareas Pequeñas

- Dividir features grandes en tareas manejables
- Completar una tarea antes de comenzar la siguiente
- Hacer commits por tarea completada
- Facilitar la revisión con cambios incrementales

### 3. Mantener Alcance Limitado

- No modificar archivos ajenos al alcance de la tarea
- Evitar refactorizaciones no solicitadas
- No "arreglar" código que funciona sin necesidad
- Si se encuentra un problema no relacionado, reportarlo por separado

### 4. Explicar Decisiones Técnicas

- Explicar brevemente decisiones técnicas importantes
- Mencionar alternativas consideradas cuando sea relevante
- Documentar limitaciones o tradeoffs
- Ayudar al desarrollador a entender el "por qué"

## Desarrollo

### Configuración Inicial

- Verificar que todas las dependencias estén instaladas
- Confirmar que el entorno de desarrollo funciona
- Revisar archivos de configuración antes de modificar

### Durante el Desarrollo

- Ejecutar la aplicación localmente frecuentemente
- Verificar cambios visualmente en el navegador
- Probar en diferentes tamaños de pantalla
- Corregir errores de TypeScript inmediatamente

### Testing

- Verificar que no haya errores en consola del navegador
- Probar interacciones básicas de usuario
- Verificar comportamiento responsive
- Comprobar que la compilación de producción funcione

## Despliegues y Control de Versiones

### Restricciones

- **No ejecutar despliegues sin autorización explícita**
- **No realizar commits automáticamente**
- **No hacer push a GitHub sin confirmación**
- **No modificar archivos de configuración de Git**

### Proceso de Commits (cuando se solicite)

1. Revisar todos los cambios a incluir
2. Asegurar que no hay archivos sensibles (.env, secrets, etc.)
3. Escribir mensaje de commit claro y descriptivo
4. Confirmar con el desarrollador antes de ejecutar

## Comunicación

### Con el Desarrollador iOS

Recordar que el desarrollador:
- Es experto en desarrollo iOS y arquitectura de software
- Es principiante en desarrollo web
- Aprecia explicaciones concisas pero completas
- Prefiere aprender el "por qué" detrás de las decisiones

### Formato de Explicaciones

- Ser directo y técnicamente preciso
- Explicar conceptos web cuando sea necesario
- Relacionar con conceptos de iOS cuando sea útil
- No subestimar ni sobreexplicar

## Figma y Diseño

### Acceso y Uso

- Verificar acceso a herramientas de Figma MCP
- No inventar elementos visuales sin consultar el diseño
- **Nunca modificar el archivo de Figma**
- Consultar ante ambigüedades en el diseño

### Proceso de Implementación Visual

1. Solicitar enlace de Figma si no está disponible
2. Analizar el diseño completo antes de implementar
3. Identificar componentes y su jerarquía
4. Extraer tokens de diseño (colores, fuentes, etc.)
5. Implementar con fidelidad al diseño
6. Comparar resultado con diseño original

## Manejo de Errores

### Cuando Algo Falla

1. Leer el mensaje de error completamente
2. Identificar la causa raíz, no solo el síntoma
3. Intentar una solución fundamentada
4. Si falla dos veces, cambiar de enfoque
5. Explicar el problema y la solución aplicada

### Logging y Debug

- Mantener mensajes de error informativos
- No dejar console.log en código de producción
- Usar herramientas de debug del navegador
- Revisar la consola frecuentemente durante desarrollo

## Calidad de Código

### Antes de Completar una Tarea

- [ ] El código compila sin errores
- [ ] TypeScript no reporta errores
- [ ] La aplicación funciona localmente
- [ ] El diseño coincide con Figma
- [ ] No hay código comentado innecesario
- [ ] No hay imports sin usar
- [ ] Los nombres son claros y descriptivos
- [ ] Se siguieron las convenciones del proyecto
