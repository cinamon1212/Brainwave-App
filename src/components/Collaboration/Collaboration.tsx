import { collabText } from '@/constants'
import { Button, Section } from '../shared'
import { CollaborationsList } from './CollaborationsList'
import { CollabApps } from './CollabApps'

export const Collaboration = () => {
  return (
    <Section id='collaboration' crosses>
      <div className='container mb-6 lg:flex'>
        <div className='mx-auto flex flex-col items-center sm:max-w-[25rem] lg:items-start'>
          <h2 className='h2 mb-12 w-full text-center lg:text-start'>AI Chat App for seamless collaboration</h2>
          <CollaborationsList />
          <Button className='sm:mt-4 md:mt-9'>Try it now</Button>
        </div>
        <div className='mt-8 lg:ml-auto xl:w-[38rem]'>
          <p className='body-2 mx-auto mb-4 max-w-[22rem] text-center text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]'>
            {collabText}
          </p>
          <CollabApps />
        </div>
      </div>
    </Section>
  )
}
