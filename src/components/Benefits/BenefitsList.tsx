import { benefits } from '@/constants'
import { BenefitCard } from './BenefitCard'

export const BenefitsList = () => {
  return (
    <div className='flex w-full flex-wrap justify-center gap-10'>
      {benefits.map((benefit) => (
        <BenefitCard {...benefit} key={benefit.id} />
      ))}
    </div>
  )
}
