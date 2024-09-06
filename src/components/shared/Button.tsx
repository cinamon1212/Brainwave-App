import { PropsWithChildren } from 'react'
import { ButtonSvg } from '@/components/svg'

type Props = {
  className?: string
  px?: string
  white?: boolean
  href?: string
  onClick?: () => void
}

export const Button = ({
  className,
  href,
  white = false,
  children,
  px,
  onClick,
}: PropsWithChildren<Props>) => {
  const classes = `button relative inline-flex h-11 items-center justify-center transition-colors hover:text-color-1 ${
    px || 'px-7'
  } ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`

  const spanClasses = `relative z-10`

  const renderButton = () => {
    return (
      <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </button>
    )
  }

  const renderLink = () => {
    return (
      <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </a>
    )
  }

  return href ? renderLink() : renderButton()
}
