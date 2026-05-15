/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2b221c',
          light: '#4a3525',
          dark: '#1a1512',
        },
        secondary: {
          DEFAULT: '#6d5d50',
          light: '#8a7a6d',
          dark: '#5a4d42',
        },
        accent: {
          DEFAULT: '#8b621f',
          light: '#b9822c',
          dark: '#6d4d18',
        },
        cream: {
          DEFAULT: '#fcfaf6',
          light: '#ffffff',
          dark: '#efe5d5',
        },
        beige: {
          DEFAULT: '#dac2a0',
          light: '#dfd2c1',
          dark: '#c4a882',
        },
        surface: {
          DEFAULT: '#efe5d5',
          light: '#f5efe6',
          dark: '#e0d4c0',
        },
        action: {
          DEFAULT: '#8b621f',
          hover: '#6d4d18',
        },
      },
      fontFamily: {
        serif: ['Noto Serif TC', 'serif'],
        sans: ['Noto Sans TC', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.7' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(43, 34, 28, 0.08), 0 2px 4px -1px rgba(43, 34, 28, 0.04)',
        'card-hover': '0 10px 15px -3px rgba(43, 34, 28, 0.1), 0 4px 6px -2px rgba(43, 34, 28, 0.05)',
        'nav': '0 2px 10px rgba(43, 34, 28, 0.06)',
      },
      maxWidth: {
        'container': '1280px',
        'prose': '720px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
