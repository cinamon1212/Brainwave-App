export const HeaderBackgroundCircles = () => {
  const classes = 'absolute rounded-full bg-gradient-to-b to-[#1A1A32]'

  const items = [
    'left-16 top-[4.4rem] h-3 w-3 from-[#DD734F]',
    'right-16 top-[12.6rem] h-3 w-3 from-[#B9AEDF]',
    'left-12 top-[26.8rem] h-6 w-6 from-[#88E5BE]',
  ]

  return (
    <>
      {items.map((item, index) => (
        <div className={`${classes} ${item}`} key={index}></div>
      ))}
    </>
  )
}
