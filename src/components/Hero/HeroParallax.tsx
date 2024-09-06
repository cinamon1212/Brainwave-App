import { heroIcons } from '@/constants'
import { ScrollParallax } from 'react-just-parallax'

export const HeroParallax = () => {
  return (
    <ScrollParallax isAbsolutelyPositioned>
      <ul className='absolute -left-[5.5rem] bottom-[7.5rem] hidden rounded-2xl border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex'>
        {heroIcons.map((icon, index) => (
          <li className='p-5' key={index}>
            <img src={icon} width={24} height={25} alt={icon} />
          </li>
        ))}
      </ul>
    </ScrollParallax>
  )
}
