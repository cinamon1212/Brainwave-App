import { pricing } from '@/constants'
import { Button } from '../shared'
import { CardPriceFeaturesList } from './CardPriceFeaturesList'
import { CardPriceContainer } from './CardPriceContainer'

export const PricingList = () => {
  return (
    <div className='flex justify-center gap-[2rem] max-lg:flex-wrap lg:gap-[1rem]'>
      {pricing.map(({ title, id, description, price, features }) => (
        <div
          key={id}
          className='h-full w-[19rem] max-w-[368px] rounded-[2rem] border border-n-6 bg-n-8 px-6 py-6 max-lg:w-full lg:w-auto lg:max-w-none xl:odd:my-4 xl:odd:py-6 xl:even:py-12 [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1'
        >
          <h4 className='h4 mb-4'>{title}</h4>
          <p className='body-2 mb-3 min-h-[4rem] text-n-1/50'>{description}</p>
          <CardPriceContainer price={price} />
          <Button className='mb-6 w-full' white={!!price}>
            {price ? 'Get started' : 'Contact us'}
          </Button>
          <CardPriceFeaturesList features={features} />
        </div>
      ))}
    </div>
  )
}
