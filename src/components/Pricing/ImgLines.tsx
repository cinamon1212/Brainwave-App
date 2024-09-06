import { lines } from '@/assets'

const Img = () => {
  return (
    <img className='w-full' src={lines} width={1480} height={177} alt='Lines' />
  )
}

const classes =
  'pointer-events-none absolute top-1/2 hidden h-[11.0625rem] w-[92.5rem] -translate-y-1/2 lg:block'

export const LeftLine = () => {
  return (
    <div className={`${classes} right-full`}>
      <Img />
    </div>
  )
}

export const RightLine = () => {
  return (
    <div className={`${classes} left-full -scale-x-100`}>
      <Img />
    </div>
  )
}
