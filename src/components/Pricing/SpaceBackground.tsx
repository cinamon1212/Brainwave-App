import { smallSphere, stars } from '@/assets'

export const SpaceBackground = () => {
  return (
    <div className='relative mb-[6.5rem] hidden justify-center lg:flex'>
      <img
        src={smallSphere}
        className='relative z-1'
        width={255}
        height={255}
        alt='Sphere'
      />
      <div className='pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2'>
        <img
          src={stars}
          className='w-full'
          width={950}
          height={400}
          alt='Stars'
        />
      </div>
    </div>
  )
}
