export const SideLines = () => {
  const classes = 'absolute top-0 h-full w-0.25 bg-n-6'
  const items = ['left-5', 'right-5']

  return (
    <>
      {items.map((item, index) => (
        <div className={`${classes} ${item}`} key={index} />
      ))}
    </>
  )
}
