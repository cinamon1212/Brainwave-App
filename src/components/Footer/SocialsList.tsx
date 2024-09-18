import { socials } from '@/constants'

export const SocialsList = () => {
  return (
    <ul className='flex flex-wrap gap-5'>
      {socials.map(({ iconUrl, id, title, url }) => (
        <a
          key={id}
          href={url}
          className='flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6'
        >
          <img src={iconUrl} width={16} height={16} alt={title} />
        </a>
      ))}
    </ul>
  )
}
