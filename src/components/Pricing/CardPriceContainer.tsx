type Props = {
  price: string | null
}

export const CardPriceContainer = ({ price }: Props) => {
  return (
    <div className='mb-6 flex items-center md:h-[5.5rem]'>
      {price && (
        <>
          <div className='h3'>$</div>
          <div className='text-[3rem] font-bold leading-none md:text-[4rem] lg:text-[5.5rem]'>{price}</div>
        </>
      )}
    </div>
  )
}
