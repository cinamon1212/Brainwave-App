import { check } from '@/assets'

type Props = {
  features: string[]
}

export const CardPriceFeaturesList = ({ features }: Props) => {
  return (
    <ul>
      {features.map((feature, index) => (
        <li key={index} className='flex items-start border-t border-n-6 py-5'>
          <img src={check} width={24} height={24} alt='check' />
          <p className='body-2 ml-4'>{feature}</p>
        </li>
      ))}
    </ul>
  )
}
