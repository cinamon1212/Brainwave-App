import { benefits } from '@/constants'
import { BenefitCard } from './BenefitCard'

export const BenefitsList = () => {
  return (
    <div className='flex w-full flex-wrap justify-center gap-10'>
      {benefits.map(({ id, ...rest }) => (
        <BenefitCard {...rest} key={id} />
      ))}
    </div>
  )
}
