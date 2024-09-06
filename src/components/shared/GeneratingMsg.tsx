import { loading } from '@/assets'

type Props = {
  className: string
}

export const GeneratingMsg = ({ className }: Props) => {
  return (
    <div
      className={`flex h-[3.5rem] items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base ${className || ''}`}>
      <img className='mr-4 h-5 w-5' src={loading} alt='loading' />
      AI is generating
    </div>
  )
}
