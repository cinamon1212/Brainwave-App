import { Arrow, ClipPath } from '../svg'
import { BenefitCardItem } from '@/types'
import { GradientLight } from './GradientLight'

export const BenefitCard = ({ iconUrl, imageUrl, text, title, light, backgroundUrl }: BenefitCardItem) => {
  console.log(backgroundUrl)
  return (
    <div
      className={`relative block max-w-[368px] bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]`}
      style={{ backgroundImage: `url("${backgroundUrl}")` }}
    >
      <div className='pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[1.5rem] sm:p-[2.4rem]'>
        <h5 className='h5 mb-5'>{title}</h5>
        <p className='body-2 mb-6 text-n-3'>{text}</p>
        <div className='mt-auto flex items-center'>
          <img src={iconUrl} alt={title} width={48} height={48} />
          <p className='ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1'>Explore more</p>
          <Arrow />
        </div>
      </div>
      {light && <GradientLight />}
      <div className='absolute inset-0.5 bg-n-8' style={{ clipPath: 'url(#benefits)' }}>
        <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
          {imageUrl && (
            <img src={imageUrl} width={380} height={362} alt='title' className='h-full w-full object-cover' />
          )}
        </div>
      </div>
      <ClipPath />
    </div>
  )
}
