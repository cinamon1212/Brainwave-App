import { service1, check } from '@/assets'
import { brainwaveServices } from '@/constants'
import { GeneratingMsg } from '../shared'

export const FirstService = () => {
  return (
    <div className='relative z-1 mb-8 flex h-[30rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 sm:h-[35rem] lg:mb-4 lg:p-20 xl:h-[40rem]'>
      <div className='pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto'>
        <img
          className='h-full w-full object-cover md:object-right'
          width={800}
          height={730}
          src={service1}
          alt='smartest AI'
        />
      </div>
      <div className='relative bottom-8 z-1 ml-auto max-w-[17rem]'>
        <h4 className='h4 mb-4'>Smartest AI</h4>
        <p className='body-2 mb-[3rem] text-n-3'>
          Brainwave unlocks the potential of AI-powered applications
        </p>
        <ul className='body-2'>
          {brainwaveServices.map((service, index) => (
            <li
              key={index}
              className='flex items-start border-t border-n-6 py-4'>
              <img src={check} alt='check' width={24} height={24} />
              <p className='ml-4'>{service}</p>
            </li>
          ))}
        </ul>
      </div>
      <GeneratingMsg className='absolute bottom-4 left-4 right-4 border border-n-1/10 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2' />
    </div>
  )
}
