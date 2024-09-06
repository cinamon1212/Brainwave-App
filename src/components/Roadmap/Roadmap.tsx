import { Section, Heading, Button } from '../shared'
import { RoadmapList } from './RoadmapList'

export const Roadmap = () => (
  <Section className='overflow-hidden' id='roadmap'>
    <div className='container'>
      <Heading tag='Ready to get started' title='What we’re working on' />
      <RoadmapList />
      <div className='mt-12 flex justify-center md:mt-15 xl:mt-20'>
        <Button href='#roadmap'>Our roadmap</Button>
      </div>
    </div>
  </Section>
)
