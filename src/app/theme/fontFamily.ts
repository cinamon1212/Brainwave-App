import { fontFamily as tailwindFontFamily } from 'tailwindcss/defaultTheme'

export const fontFamily = {
  sans: ['var(--font-sora)', ...tailwindFontFamily.sans],
  code: 'var(--font-code)',
  grotesk: 'var(--font-grotesk)',
}
