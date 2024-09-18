export const HeroRings = () => {
  const classes =
    'absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-n-2/10'

  const rings = ['w-[65.875rem]', 'w-[51.375rem]', 'w-[36.125rem]', 'w-[23.125rem]']

  return (
    <>
      {rings.map((ring, index) => (
        <div className={`${classes} ${ring}`} key={index} />
      ))}
    </>
  )
}
