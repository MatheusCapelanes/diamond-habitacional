/** @type {import('tailwindcss').Config} */

import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";

module.exports = {
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
      colors:{
        black: "#02020b",
        gold: "#E3B505",
        white: "#FFFFFF",
        blue: "#0075C4",
        red: "#EA2B1F",
        aquamarine: "#B5FFE9"
      },
      fontFamily: {
        roboto: ['Roboto', "sans-serif"],
        inter: ['Inter', "sans-serif"],
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ]
}
