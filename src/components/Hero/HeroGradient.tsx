export const HeroGradient = () => {
  const classes =
    'relative z-1 mx-2.5 h-6 rounded-b-[1.25rem] bg-n-11 shadow-xl lg:mx-8 lg:h-6'
  const items = ['mx-2.5 bg-n-11 lg:mx-8', 'mx-6 bg-n-11/70 lg:mx-20']

  return (
    <>
      {items.map((item, index) => (
        <div className={`${classes} ${item}`} key={index} />
      ))}
    </>
  )
}
