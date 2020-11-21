module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
      fontSize: {
               'xs': '.75rem',
               'sm': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
               '3xl': '1.875rem',
               '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
        },
      extend: {
        colors: {
          'accent-1': '#333',
        },
      },
    },
    variants: {},
    plugins: [],
}
  
