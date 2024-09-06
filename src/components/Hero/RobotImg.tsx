import { robot, heroBackground } from '@/assets'
import { HeroParallax } from './HeroParallax'
import { NotificationParallax } from './NotificationParallax'
import { GeneratingMsg } from '../shared'
import { HeroGradient } from './HeroGradient'

export const RobotImg = () => {
  return (
    <>
      <div className='relative z-1 rounded-2xl bg-conic-gradient p-0.5'>
        <div className='relative rounded-[1rem] bg-n-8'>
          <div className='h-[1.4rem] rounded-t-[0.9rem] bg-n-10' />
          <div className='aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]'>
            <img
              src={robot}
              className='w-full translate-y-[8%] scale-[1.7] md:-translate-y-[10%] md:scale-[1] lg:-translate-y-[23%]'
              alt='AI'
              width={1024}
              height={490}
            />
            <GeneratingMsg className='absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2' />
            <HeroParallax />
            <NotificationParallax />
          </div>
        </div>
        <HeroGradient />
      </div>
      <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
        <img src={heroBackground} width={1440} height={1800} alt='hero' />
      </div>
    </>
  )
}
