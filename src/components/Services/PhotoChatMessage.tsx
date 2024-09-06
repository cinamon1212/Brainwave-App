import { ChatBubbleWing } from '../svg'

export const PhotoChatMessage = () => {
  return (
    <div className='absolute right-8 top-8 max-w-[17.5rem] rounded-t-xl rounded-bl-xl bg-black px-4 py-4 font-code text-xs sm:px-8 sm:py-6 sm:text-base lg:right-[8.75rem] lg:top-16 lg:max-w-[17.5rem]'>
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className='absolute bottom-0 left-full' />
    </div>
  )
}
