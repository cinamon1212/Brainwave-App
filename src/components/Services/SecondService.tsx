import { service2 } from '@/assets'
import { PhotoChatMessage } from './PhotoChatMessage'

export const SecondService = () => {
  return (
    <div className='relative min-h-[30rem] overflow-hidden rounded-3xl border border-n-1/10 sm:min-h-[35rem]'>
      <div className='absolute inset-0'>
        <img
          src={service2}
          className='h-full w-full object-cover'
          width={630}
          height={750}
          alt='robot'
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15'>
        <h4 className='h4 mb-4'>Photo editing</h4>
        <p className='body-2 text-n-3'>
          Automatically enhance your photos using our AI app's photo editing
          feature. Try it now!
        </p>
      </div>
      <PhotoChatMessage />
    </div>
  )
}
