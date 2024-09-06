type Props = {
  alt: string
  imageUrl: string
}

export const CardImageBackground = ({ alt, imageUrl }: Props) => {
  return (
    <div className='-mx-15 -my-10 mb-10'>
      <img
        className='w-full'
        src={imageUrl}
        width={628}
        height={426}
        alt={alt}
      />
    </div>
  )
}
