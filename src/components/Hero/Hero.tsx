import { useRef } from 'react'
import { Button, Section } from '../shared'
import { HeroHeader } from './HeroHeader'
import { HeroParagraph } from './HeroParagraph'
import { RobotImg } from './RobotImg'
import { CompanyLogos } from './CompanyLogos'
import { HeroBackgroundCircles } from './HeroBackgroundCircles'
import { BottomLine } from './BottomLine'

export const Hero = () => {
  const parallaxRef = useRef(null)

  return (
    <Section
      className='-mt-[5.25rem] pt-[7.5rem] md:pt-[9rem] lg:pt-[9rem] xl:pt-[10rem]'
      crossesOffset='lg:translate-y-[5.25rem]'
      crosses
      id='hero'
    >
      <div className='container relative sm:max-w-[80%] md:max-w-[100%]'>
        <div className='relative z-1 mx-auto mb-12 max-w-[62rem] text-center lg:mb-20'>
          <HeroHeader />
          <HeroParagraph />
          <Button href='#pricing' white>
            Get started
          </Button>
        </div>
        <div className='relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24'>
          <RobotImg />
          <HeroBackgroundCircles parallaxRef={parallaxRef} />
        </div>
        <CompanyLogos />
      </div>
      <BottomLine />
    </Section>
  )
}
