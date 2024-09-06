import { TagLine } from './TagLine'

type Props = {
  title: string
  className?: string
  text?: string
  tag?: string
}

export const Heading = ({ className = '', title, text, tag }: Props) => {
  return (
    <div className={`${className} mx-auto mb-12 max-w-[50rem] lg:mb-20`}>
      {tag && <TagLine className='mb-4 justify-center'>{tag}</TagLine>}
      {title && <h2 className='h2 text-center'>{title}</h2>}
      {text && <p className='body-2 mt-4 text-center text-n-4'>{text}</p>}
    </div>
  )
}
