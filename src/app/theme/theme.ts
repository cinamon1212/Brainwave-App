import { backgroundImage } from './backgroundImage'
import { colors } from './colors'
import { fontFamily } from './fontFamily'

export const theme = {
  extend: {
    colors,
    fontFamily,
    letterSpacing: {
      tagline: '.15em',
    },
    spacing: {
      0.25: '0.0625rem',
      7.5: '1.875rem',
      15: '3.75rem',
    },
    opacity: {
      15: '.15',
    },
    transitionDuration: {
      DEFAULT: '200ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'linear',
    },
    zIndex: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
    },
    borderWidth: {
      DEFAULT: '0.0625rem',
    },
    backgroundImage,
  },
}
