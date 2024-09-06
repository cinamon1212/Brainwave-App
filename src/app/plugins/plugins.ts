import { componentClasses } from './componentClasses'
import plugin from 'tailwindcss/plugin'

export const plugins = [
  plugin(function ({ addBase, addComponents, addUtilities }) {
    addBase({})
    addComponents(componentClasses)
    addUtilities({
      '.tap-highlight-color': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
      },
    })
  }),
]
