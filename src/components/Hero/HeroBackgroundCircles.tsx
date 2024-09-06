import { useEffect, useState } from 'react'
import { MouseParallax } from 'react-just-parallax'
import { HeroRings } from './HeroRings'

type Props = {
  parallaxRef?: React.MutableRefObject<null>
}

export const HeroBackgroundCircles = ({ parallaxRef }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const parallaxItemClasses =
    'absolute bottom-1/2 left-1/2 h-1/2 w-0.25 origin-bottom'

  const parallaxChildrenClasses = `rounded-full bg-gradient-to-b to-[#1A1A32] transition-transform duration-500 ease-out ${
    mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
  }`

  const parallaxItems = [
    {
      rotate: 'rotate-[46deg]',
      childCl: '-ml-1 -mt-36 h-2 w-2 from-[#DD734F]',
    },
    {
      rotate: '-rotate-[56deg]',
      childCl: '-ml-1 -mt-32 h-4 w-4 from-[#DD734F]',
    },
    {
      rotate: 'rotate-[54deg]',
      childCl:
        'transit -ml-1 mt-[12.9rem] hidden h-4 w-4 from-[#B9AEDF] xl:block',
    },
    {
      rotate: '-rotate-[65deg]',
      childCl: '-ml-1.5 mt-52 h-3 w-3 from-[#B9AEDF]',
    },
    {
      rotate: '-rotate-[85deg]',
      childCl: '-ml-3 -mt-3 h-6 w-6 from-[#88E5BE]',
    },
    { rotate: 'rotate-[70deg]', childCl: '-ml-3 -mt-3 h-6 w-6 from-[#88E5BE]' },
  ]

  return (
    <div className='absolute -top-[42.375rem] left-1/2 aspect-square w-[78rem] -translate-x-1/2 rounded-full border border-n-2/5 md:-top-[38.5rem] xl:-top-[32rem]'>
      <HeroRings />
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {parallaxItems.map(({ rotate, childCl }, index) => (
          <div className={`${parallaxItemClasses} ${rotate}`} key={index}>
            <div className={`${parallaxChildrenClasses} ${childCl}`} />
          </div>
        ))}
      </MouseParallax>
    </div>
  )
}
