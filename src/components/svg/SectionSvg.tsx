import { PlusSvg } from './PlusSvg'

type Props = {
  crossesOffset?: string
}

export const SectionSvg = ({ crossesOffset }: Props) => {
  const classes = `absolute -top-[0.3125rem] hidden pointer-events-none lg:block ${
    crossesOffset && crossesOffset
  }`

  const items = [
    'left-[1.5625rem] xl:left-[2.1875rem]',
    'right-[1.5625rem] xl:right-[2.1875rem]',
  ]

  return (
    <>
      {items.map((item, index) => (
        <PlusSvg className={`${classes} ${item}`} key={index} />
      ))}
    </>
  )
}
