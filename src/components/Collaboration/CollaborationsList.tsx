import { check } from '@/assets'
import { collabContent } from '@/constants'

export const CollaborationsList = () => {
  return (
    <ul className='flex max-w-[22rem] flex-col items-center md:mb-8 lg:block lg:items-start'>
      {collabContent.map(({ id, title, text }) => (
        <li
          className='mb-3 flex flex-col items-center py-3 lg:block lg:items-start'
          key={id}>
          <div className='flex items-center'>
            <img src={check} width={24} height={24} alt='check' />
            <h6 className='body-2 ml-5'>{title}</h6>
          </div>
          {text && (
            <p className='body-2 mt-3 text-center text-n-4 lg:text-start'>
              {text}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}
