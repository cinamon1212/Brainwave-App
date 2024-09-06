import { PropsWithChildren } from 'react'
import { SectionSvg } from '../svg'

type Props = {
  id: string
  className?: string
  crosses?: boolean
  crossesOffset?: string
}

export const Section = ({
  className,
  crosses,
  crossesOffset,
  id,
  children,
}: PropsWithChildren<Props>) => {
  const directionItems = ['left', 'right']

  return (
    <div
      id={id}
      className={`relative py-10 lg:py-16 xl:py-20 ${className || ''}`}>
      {children}

      {directionItems.map((direction, index) => (
        <div
          className={`pointer-events-none absolute ${direction}-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:${direction}-7.5 xl:${direction}-10`}
          key={index}
        />
      ))}

      {crosses && (
        <>
          <div
            className={`absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  )
}
