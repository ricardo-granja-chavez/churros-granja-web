/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Colors ───────────────────────────────────────────────────────────
      colors: {
        // Surfaces
        surface: {
          DEFAULT:   '#fbf9f5',
          dim:       '#dbdad6',
          bright:    '#fbf9f5',
          variant:   '#e4e2de',
          tint:      '#795745',
          container: {
            lowest:  '#ffffff',
            low:     '#f5f3ef',
            DEFAULT: '#efeeea',
            high:    '#eae8e4',
            highest: '#e4e2de',
          },
        },
        'on-surface': {
          DEFAULT: '#1b1c1a',
          variant: '#50443f',
        },
        'inverse-surface': {
          DEFAULT:  '#30312e',
          on:       '#f2f0ed',
        },
        outline: {
          DEFAULT: '#82746e',
          variant: '#d4c3bc',
        },

        // Primary — chocolate oscuro
        primary: {
          DEFAULT:          '#250f03',
          container:        '#3d2314',
          fixed:            '#ffdbca',
          'fixed-dim':      '#e9bda7',
          inverse:          '#e9bda7',
        },
        'on-primary': {
          DEFAULT:          '#ffffff',
          container:        '#af8874',
          fixed:            '#2d1608',
          'fixed-variant':  '#5e402f',
        },

        // Secondary — dorado churro
        secondary: {
          DEFAULT:          '#8b5000',
          container:        '#fda139',
          fixed:            '#ffdcbe',
          'fixed-dim':      '#ffb870',
        },
        'on-secondary': {
          DEFAULT:          '#ffffff',
          container:        '#6a3c00',
          fixed:            '#2d1600',
          'fixed-variant':  '#693c00',
        },

        // Tertiary — ember cálido
        tertiary: {
          DEFAULT:          '#2b0b00',
          container:        '#4c1900',
          fixed:            '#ffdbcd',
          'fixed-dim':      '#ffb595',
        },
        'on-tertiary': {
          DEFAULT:          '#ffffff',
          container:        '#ee671c',
          fixed:            '#351000',
          'fixed-variant':  '#7c2e00',
        },

        // Error
        error: {
          DEFAULT:   '#ba1a1a',
          container: '#ffdad6',
        },
        'on-error': {
          DEFAULT:   '#ffffff',
          container: '#93000a',
        },

        // Background
        background: '#fbf9f5',
        'on-background': '#1b1c1a',
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        headline: ['Newsreader', 'Georgia', 'serif'],
        body:     ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Headlines
        'display':          ['56px', { lineHeight: '64px', letterSpacing: '-0.02em',  fontWeight: '500' }],
        'display-mobile':   ['38px', { lineHeight: '46px', letterSpacing: '-0.015em', fontWeight: '500' }],
        'headline-lg':      ['40px', { lineHeight: '48px', letterSpacing: '-0.015em', fontWeight: '500' }],
        'headline-lg-m':    ['28px', { lineHeight: '36px', letterSpacing: '-0.01em',  fontWeight: '500' }],
        'headline-md':      ['28px', { lineHeight: '36px',                            fontWeight: '500' }],
        'headline-sm':      ['22px', { lineHeight: '28px',                            fontWeight: '600' }],
        // Body
        'body-lg':          ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':          ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':          ['14px', { lineHeight: '20px', fontWeight: '400' }],
        // Labels
        'label-lg':         ['14px', { lineHeight: '20px', letterSpacing: '0.01em',  fontWeight: '600' }],
        'label-md':         ['12px', { lineHeight: '16px', letterSpacing: '0.02em',  fontWeight: '600' }],
        'label-sm':         ['11px', { lineHeight: '14px', letterSpacing: '0.04em',  fontWeight: '700' }],
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        sm:      '0.25rem',  //  4px
        DEFAULT: '0.5rem',   //  8px
        md:      '0.75rem',  // 12px
        lg:      '1rem',     // 16px
        xl:      '1.5rem',   // 24px
        full:    '9999px',
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      spacing: {
        'gutter':        '1.5rem',   // 24px
        'gutter-mobile': '1rem',     // 16px
        'margin':        '3rem',     // 48px
        'margin-mobile': '1.25rem',  // 20px
        'space-xs':      '0.25rem',  //  4px
        'space-sm':      '0.5rem',   //  8px
        'space-md':      '1rem',     // 16px
        'space-lg':      '1.5rem',   // 24px
        'space-xl':      '2.5rem',   // 40px
      },

      // ─── Box Shadows ──────────────────────────────────────────────────────
      boxShadow: {
        'card': '0 1px 2px 0 rgba(61, 35, 20, 0.05)',
        'nav':  '0 1px 8px rgba(61, 35, 20, 0.05)',
      },
    },
  },
  plugins: [],
}
