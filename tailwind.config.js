/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#87191e',
        'off-white': '#f6f3ef',
        secondary: '#f4f4fc',
        'secondary-dark': '#86a3fd',
      },
      fontFamily: {
        serif: [
          'var(--font-rubik)',
          'sans-serif',
          'serif',
          'system-ui',
          'ui-sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
