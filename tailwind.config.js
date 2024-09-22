/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        'Fascinate-Inline': ['"Fascinate Inline"', 'cursive'],
        'Caveat': ['Caveat', 'cursive'],
      },
      keyframes: {
        floatIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        floatIn: 'floatIn 1s ease-out',
      },
    },
  },
  plugins: [],
}
