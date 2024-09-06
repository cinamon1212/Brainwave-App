import { NavigationItem } from '@/types'

type Props = {
  hash: string
  handleNavigationClick: () => void
} & NavigationItem

export const NavItem = ({
  title,
  url,
  onlyMobile,
  hash,
  handleNavigationClick,
}: Omit<Props, 'id'>) => {
  return (
    <a
      href={url}
      className={`relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
        onlyMobile ? 'lg:hidden' : ''
      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
        url === hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'
      } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
      onClick={handleNavigationClick}>
      {title}
    </a>
  )
}
