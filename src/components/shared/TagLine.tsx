import { PropsWithChildren } from 'react'
import { Brackets } from '../svg'

type Props = {
  className?: string
}

export const TagLine = ({
  className = '',
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`tagline flex items-center ${className}`}>
      <Brackets position='left' />
      <div className='mx-3 text-n-3'>{children}</div>
      <Brackets position='right' />
    </div>
  )
}
