import { brainwaveSymbol } from '@/assets'
import { CollabAppsList } from './CollabAppsList'
import { LeftCurve, RightCurve } from './Curves'

export const CollabApps = () => {
  return (
    <div className='relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 scale-75 rounded-full border border-n-6 md:scale-100'>
      <div className='m-auto flex aspect-square w-60 rounded-full border border-n-6'>
        <div className='m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]'>
          <div className='flex h-full w-full items-center justify-center rounded-full bg-n-8'>
            <img src={brainwaveSymbol} width={48} height={48} alt='brainwave' />
          </div>
        </div>
      </div>
      <CollabAppsList />
      <LeftCurve />
      <RightCurve />
    </div>
  )
}
