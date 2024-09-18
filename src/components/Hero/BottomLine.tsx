import { PlusSvg } from '../svg'

export const BottomLine = () => {
  const classes = 'pointer-events-none absolute hidden xl:block'
  const plusClasses = 'top-[54.9375rem] z-2'
  const pluses = ['left-[2.1875rem]', 'right-[2.1875rem]']

  return (
    <>
      <div className={`${classes} left-10 right-10 top-[55.25rem] h-0.25 bg-n-6`} />
      {pluses.map((plus, index) => (
        <PlusSvg className={`${classes} ${plus} ${plusClasses}`} key={index} />
      ))}
    </>
  )
}
