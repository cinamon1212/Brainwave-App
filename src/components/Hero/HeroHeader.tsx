import { curve } from '@/assets'

export const HeroHeader = () => {
  return (
    <h1 className='h1 mb-6'>
      Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{' '}
      <span className='relative inline-block'>
        Brainwave{' '}
        <img className='absolute left-0 top-full w-full xl:-mt-2' width={624} height={28} src={curve} alt='Curve' />
      </span>
    </h1>
  )
}
