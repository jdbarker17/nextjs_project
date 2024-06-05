import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        'barkerbackground': '#059669',
        'barkerbfont': 'emerald-950',
        barker: {
          primary: '#059669',
          secondary:'emerald-950',
          tertiary: '#6ee7b7',
          //tertiary: '#ffb2a2',
          //accent1: '#fffbeb',
          //accent1: '#788C84',
          accent1: '#FFA384',
        },
        'barkerprimary': '#059669',
        'barkersecondary': 'emerald-950',
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
          
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  
};
export default config;
