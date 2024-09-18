import { check2, loading1 } from '@/assets'

type Props = {
  status: string
}

export const RoadmapCardStatus = ({ status }: Props) => {
  return (
    <div className='flex items-center rounded bg-n-1 px-4 py-1 text-n-8'>
      <img className='mr-2.5' src={status === 'done' ? check2 : loading1} width={16} height={16} alt={status} />
      <div className='tagline'>{status}</div>
    </div>
  )
}
