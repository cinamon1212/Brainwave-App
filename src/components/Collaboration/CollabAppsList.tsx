import { collabApps } from '@/constants'

export const CollabAppsList = () => {
  return (
    <ul>
      {collabApps.map(({ height, icon, id, title, width }, index) => (
        <li
          key={id}
          className={`absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom rotate-${index * 45}`}>
          <div
            className={`relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-n-1/15 bg-n-7 -rotate-${index * 45}`}>
            <img
              src={icon}
              alt={title}
              className='m-auto'
              width={width}
              height={height}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
