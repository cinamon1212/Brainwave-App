import { Heading, Section } from '../shared'
import { LeftLine, RightLine } from './ImgLines'
import { PricingList } from './PricingList'
import { SpaceBackground } from './SpaceBackground'

export const Pricing = () => {
  return (
    <Section id='pricing' className='overflow-hidden'>
      <div className='container relative z-2'>
        <SpaceBackground />
        <Heading
          tag='Get started with Brainwave'
          title='Pay once, use forever'
        />
        <div className='relative'>
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className='mt-10 flex justify-center'>
          <a
            className='border-b font-code text-xs font-bold uppercase tracking-wider'
            href='#pricing'>
            See the full details
          </a>
        </div>
      </div>
    </Section>
  )
}
