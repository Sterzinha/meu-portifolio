import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         colors: {
            primary: '#ec4899',
            'primary-light': '#f9a8d4',
            'primary-dark': '#be185d',
            secondary: '#a855f7',
            dark: '#0c0510',
            'dark-soft': '#150a1a',
            'dark-card': '#1b0f22',
            'gray-custom': '#1b0f22',
         },
         boxShadow: {
            glow: '0 0 25px rgba(236, 72, 153, 0.45)',
            'glow-lg': '0 0 45px rgba(236, 72, 153, 0.55)',
         },
         keyframes: {
            'fade-up': {
               '0%': { opacity: '0', transform: 'translateY(24px)' },
               '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            float: {
               '0%, 100%': { transform: 'translateY(0)' },
               '50%': { transform: 'translateY(-12px)' },
            },
            marquee: {
               from: { transform: 'translateX(0)' },
               to: { transform: 'translateX(-50%)' },
            },
         },
         animation: {
            'fade-up': 'fade-up 0.7s ease-out both',
            float: 'float 5s ease-in-out infinite',
            marquee: 'marquee 28s linear infinite',
         },
      },
   },
   plugins: [],
};
export default config;
