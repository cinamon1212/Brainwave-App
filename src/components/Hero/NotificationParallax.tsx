import { notification1 } from '@/assets'
import { notificationImages } from '@/constants'
import { ScrollParallax } from 'react-just-parallax'

export const NotificationParallax = () => {
  return (
    <ScrollParallax isAbsolutelyPositioned>
      <div className='absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] items-center gap-5 rounded-2xl border-n-1/10 bg-n-9/40 p-4 pr-6 backdrop-blur xl:flex'>
        <img src={notification1} alt='notification1' width={62} height={62} className='rounded-xl' />
        <div className='flex-1'>
          <h6 className='mb-1 text-base font-semibold'>Code generation</h6>
          <div className='flex items-center justify-between'>
            <ul className='-m-0.5 flex'>
              {notificationImages.map((img, index) => (
                <li className='flex h-6 w-6 overflow-hidden rounded-full border-2 border-n-12' key={index}>
                  <img className='w-full' width={20} height={20} src={img} alt={img} />
                </li>
              ))}
            </ul>
            <div className='body-2 text-n-13'>1m ago</div>
          </div>
        </div>
      </div>
    </ScrollParallax>
  )
}
