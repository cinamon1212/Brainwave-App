import { service3 } from '@/assets'
import { brainwaveServicesIcons } from '@/constants'
import { VideoBar } from './VideoBar'
import { VideoChatMessage } from './VideoChatMessage'

export const ThirdService = () => {
  return (
    <div className='overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]'>
      <div className='px-4 sm:py-12 xl:px-8'>
        <h4 className='h4 mb-4'>Video generation</h4>
        <p className='body-2 mb-[1.5rem] text-n-3'>
          The world’s most powerful AI photo and video art generation engine.
          What will you create?
        </p>
        <ul className='mb-[1.5rem] flex items-center justify-between sm:mb-0'>
          {brainwaveServicesIcons.map((icon, index) => (
            <li
              key={index}
              className={`flex items-center justify-center rounded-2xl ${index === 2 ? 'h-[3rem] w-[3rem] bg-conic-gradient p-0.25 md:h-[4.5rem] md:w-[4.5rem]' : 'flex h-10 w-10 bg-n-6 md:h-15 md:w-15'}`}>
              <div
                className={
                  index === 2
                    ? 'flex h-full w-full items-center justify-center rounded-[1rem] bg-n-7'
                    : ''
                }>
                <img src={icon} alt={icon} width={24} height={24} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]'>
        <img
          src={service3}
          alt='Scary robot'
          className='h-full w-full object-cover'
          width={520}
          height={400}
        />
        <VideoChatMessage />
        <VideoBar />
      </div>
    </div>
  )
}
