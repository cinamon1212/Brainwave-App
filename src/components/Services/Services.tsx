import { Heading, Section } from '../shared'
import { FirstService } from './FirstService'
import { SecondService } from './SecondService'
import { ServicesGradient } from './ServicesGradient'
import { ThirdService } from './ThirdService'

export const Services = () => {
  return (
    <Section id='how-to-use'>
      <div className='container'>
        <Heading
          title='Generative AI made for creators'
          text='Brainwave unlocks the potential of AI-powered applications'
        />
        <div className='relative'>
          <FirstService />
          <div className='relative z-1 grid gap-8 lg:grid-cols-2 lg:gap-4'>
            <SecondService />
            <ThirdService />
          </div>
          <ServicesGradient />
        </div>
      </div>
    </Section>
  )
}
