import { curve2, curve1 } from '@/assets'

const classes = 'pointer-events-none absolute top-1/2 -mt-1 hidden xl:block'

export const RightCurve = () => {
  return (
    <div className={`${classes} left-full ml-10 w-[10.125rem]`}>
      <img src={curve2} width={162} height={76} alt='Curve 2' />
    </div>
  )
}

export const LeftCurve = () => {
  return (
    <div className={`${classes} right-full mr-10 w-[32.625rem]`}>
      <img src={curve1} width={522} height={182} alt='Curve 1' />
    </div>
  )
}
