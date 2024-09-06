import { gradient } from '@/assets'

export const ServicesGradient = () => {
  return (
    <div className='pointer-events-none absolute -left-[10rem] top-0 h-[56.625rem] w-[56.625rem] opacity-50 mix-blend-color-dodge'>
      <img
        className='absolute left-1/2 top-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem] -translate-x-1/2 -translate-y-1/2'
        src={gradient}
        width={1417}
        height={1417}
        alt='Gradient'
      />
    </div>
  )
}
