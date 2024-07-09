/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: '#0a996f',
        blue: '#0a6789',
        red: '#cf0638',
        orange: '#fa6632',
        yellow: '#fecd23',
				pink: '#E54980',
				gray: '#1B1B1D',
				purple: '#B43EFE',
				dark: '#222222',
				light: '#E1E1E1'
      }
    },
  },
  plugins: [],
};
