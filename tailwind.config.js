/** @type {import('tailwindcss').Config} */

import { plugins, theme } from './src'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/assets/**/*.{js,ts,jsx,tsx}'],
  theme,
  plugins,
}
