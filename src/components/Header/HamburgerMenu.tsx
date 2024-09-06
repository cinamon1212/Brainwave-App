import { background } from '@/assets'
import { HeaderBackgroundCircles } from './HeaderBackgroundCircles'
import { HeaderRings } from './HeaderRings'
import { SideLines } from './SideLines'

export const HamburgerMenu = () => {
  return (
    <div className='pointer-events-none absolute inset-0 lg:hidden'>
      <div className='absolute inset-0 opacity-[.03]'>
        <img
          className='h-full w-full object-cover'
          src={background}
          width={688}
          height={953}
          alt='Background'
        />
      </div>

      <HeaderRings />
      <SideLines />
      <HeaderBackgroundCircles />
    </div>
  )
}
