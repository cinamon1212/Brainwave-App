export const HeaderRings = () => {
  const classes =
    'absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10'

  return (
    <div className={`${classes} w-[51.375rem]`}>
      <div className={`${classes} w-[36.125rem]`}></div>
      <div className={`${classes} w-[23.125rem]`}></div>
    </div>
  )
}
