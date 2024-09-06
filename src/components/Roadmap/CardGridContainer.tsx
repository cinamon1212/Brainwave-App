import { grid } from '@/assets'

export const CardGridContainer = () => {
  return (
    <div className='absolute left-0 top-0 max-w-full'>
      <img className='w-full' src={grid} width={550} height={550} alt='Grid' />
    </div>
  )
}
