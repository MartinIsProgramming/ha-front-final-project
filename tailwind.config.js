module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'brand-dark': '#111827',
          'brand-light': '#374151',
        },

        secondary: {
          'brand-dark': '#d1d5db',
          'brand-light': '#e5e7eb',
        },

        'brand-orange': '#ea580c',
      },
    },
  },
  plugins: [],
};
