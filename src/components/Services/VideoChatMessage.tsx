import { brainwaveWhiteSymbol } from '@/assets'
import { ChatBubbleWing } from '../svg'

export const VideoChatMessage = () => {
  return (
    <div className='absolute left-[3.125rem] top-8 w-full max-w-[13rem] rounded-t-xl rounded-br-xl bg-n-6 pb-7 pl-5 pr-2.5 pt-2.5 font-code text-xs sm:text-base md:max-w-[17.5rem]'>
      Video generated!
      <div className='absolute -bottom-[1.125rem] left-5 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.75rem] bg-color-1'>
        <img src={brainwaveWhiteSymbol} width={26} height={26} alt='Brainwave' />
      </div>
      <p className='tagline absolute bottom-1 right-2.5 text-[0.55rem] uppercase text-n-3 sm:text-[0.65]'>just now</p>
      <ChatBubbleWing className='absolute bottom-0 right-full -scale-x-100' pathClassName='fill-n-6' />
    </div>
  )
}
