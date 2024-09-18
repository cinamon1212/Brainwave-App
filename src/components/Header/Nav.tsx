import { useLocation } from 'react-router-dom'
import { navigation } from '@/constants'
import { NavItem } from './NavItem'
import { HamburgerMenu } from './HamburgerMenu'

type Props = {
  openNavigation: boolean
  handleNavigationClick: () => void
}

export const Nav = ({ openNavigation, handleNavigationClick }: Props) => {
  const { hash } = useLocation()

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent ${openNavigation ? 'flex' : 'hidden'}`}
    >
      <div className={'relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row'}>
        {navigation.map(({ id, title, url, onlyMobile }) => (
          <NavItem
            title={title}
            url={url}
            onlyMobile={onlyMobile}
            hash={hash}
            key={id}
            handleNavigationClick={handleNavigationClick}
          />
        ))}
      </div>
      <HamburgerMenu />
    </nav>
  )
}
