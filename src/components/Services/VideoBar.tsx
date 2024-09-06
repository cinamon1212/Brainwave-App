import { play } from '@/assets'

export const VideoBar = () => {
  return (
    <div className='absolute bottom-0 left-0 flex w-full items-center p-6'>
      <img
        src={play}
        width={24}
        height={24}
        alt='Play'
        className='mr-3 object-contain'
      />

      <div className='flex-1 bg-[#D9D9D9]'>
        <div className='h-0.5 w-1/2 bg-color-1'></div>
      </div>
    </div>
  )
}
