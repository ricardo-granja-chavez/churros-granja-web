/**
 * Design tokens — Churros Granja
 * Fuente de verdad para colores, tipografía, espaciado, radios y sombras.
 * Importar desde componentes cuando se necesiten valores en JS/TS.
 * Los equivalentes en Tailwind están configurados en tailwind.config.js.
 */

export const colors = {
  // Surfaces
  surface: '#fbf9f5',
  'surface-dim': '#dbdad6',
  'surface-bright': '#fbf9f5',
  'surface-container-lowest': '#ffffff',
  'surface-container-low': '#f5f3ef',
  'surface-container': '#efeeea',
  'surface-container-high': '#eae8e4',
  'surface-container-highest': '#e4e2de',
  'on-surface': '#1b1c1a',
  'on-surface-variant': '#50443f',
  'inverse-surface': '#30312e',
  'inverse-on-surface': '#f2f0ed',
  outline: '#82746e',
  'outline-variant': '#d4c3bc',
  'surface-tint': '#795745',

  // Primary — chocolate oscuro
  primary: '#250f03',
  'on-primary': '#ffffff',
  'primary-container': '#3d2314',
  'on-primary-container': '#af8874',
  'inverse-primary': '#e9bda7',

  // Secondary — dorado churro
  secondary: '#8b5000',
  'on-secondary': '#ffffff',
  'secondary-container': '#fda139',
  'on-secondary-container': '#6a3c00',

  // Tertiary — ember cálido
  tertiary: '#2b0b00',
  'on-tertiary': '#ffffff',
  'tertiary-container': '#4c1900',
  'on-tertiary-container': '#ee671c',

  // Error
  error: '#ba1a1a',
  'on-error': '#ffffff',
  'error-container': '#ffdad6',
  'on-error-container': '#93000a',

  // Fixed tones
  'primary-fixed': '#ffdbca',
  'primary-fixed-dim': '#e9bda7',
  'on-primary-fixed': '#2d1608',
  'on-primary-fixed-variant': '#5e402f',
  'secondary-fixed': '#ffdcbe',
  'secondary-fixed-dim': '#ffb870',
  'on-secondary-fixed': '#2d1600',
  'on-secondary-fixed-variant': '#693c00',
  'tertiary-fixed': '#ffdbcd',
  'tertiary-fixed-dim': '#ffb595',
  'on-tertiary-fixed': '#351000',
  'on-tertiary-fixed-variant': '#7c2e00',

  // Background
  background: '#fbf9f5',
  'on-background': '#1b1c1a',
  'surface-variant': '#e4e2de',
} as const;

export const typography = {
  'headline-display': {
    fontFamily: 'Newsreader',
    fontSize: '56px',
    fontWeight: '500',
    lineHeight: '64px',
    letterSpacing: '-0.02em',
  },
  'headline-display-mobile': {
    fontFamily: 'Newsreader',
    fontSize: '38px',
    fontWeight: '500',
    lineHeight: '46px',
    letterSpacing: '-0.015em',
  },
  'headline-lg': {
    fontFamily: 'Newsreader',
    fontSize: '40px',
    fontWeight: '500',
    lineHeight: '48px',
    letterSpacing: '-0.015em',
  },
  'headline-lg-mobile': {
    fontFamily: 'Newsreader',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '36px',
    letterSpacing: '-0.01em',
  },
  'headline-md': {
    fontFamily: 'Newsreader',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '36px',
  },
  'headline-sm': {
    fontFamily: 'Newsreader',
    fontSize: '22px',
    fontWeight: '600',
    lineHeight: '28px',
  },
  'body-lg': {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '28px',
  },
  'body-md': {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
  },
  'body-sm': {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
  },
  'label-lg': {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '0.01em',
  },
  'label-md': {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0.02em',
  },
  'label-sm': {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '11px',
    fontWeight: '700',
    lineHeight: '14px',
    letterSpacing: '0.04em',
  },
} as const;

export const rounded = {
  sm: '0.25rem',
  DEFAULT: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

export const spacing = {
  gutter: '1.5rem',
  'gutter-mobile': '1rem',
  margin: '3rem',
  'margin-mobile': '1.25rem',
  'space-xs': '0.25rem',
  'space-sm': '0.5rem',
  'space-md': '1rem',
  'space-lg': '1.5rem',
  'space-xl': '2.5rem',
} as const;

export const shadows = {
  card: '0 1px 2px 0 rgba(61, 35, 20, 0.05)',
  nav: '0 1px 8px rgba(61, 35, 20, 0.05)',
} as const;

export type ColorToken = keyof typeof colors;
export type TypographyToken = keyof typeof typography;
export type SpacingToken = keyof typeof spacing;
