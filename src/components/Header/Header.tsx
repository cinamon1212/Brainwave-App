import { brainwave } from '@/assets'
import { Nav } from './Nav'
import { Button } from '../shared'
import { useState } from 'react'
import { MenuSvg } from '../svg'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => !prevState)
    if (openNavigation) enablePageScroll()
    else disablePageScroll()
  }

  const handleNavigationClick = () => {
    if (!openNavigation) return

    enablePageScroll()
    setOpenNavigation(false)
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center border-b border-n-6 px-5 max-lg:py-4 lg:bg-n-8/90 lg:px-7.5 lg:backdrop-blur-sm xl:px-10 ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
    >
      <a className={'block w-[12rem] xl:mr-8'} href='#hero'>
        <img src={brainwave} alt='Brainwave' width={190} height={40} />
      </a>
      <Nav openNavigation={openNavigation} handleNavigationClick={handleNavigationClick} />
      <a href='#signup' className={'button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block'}>
        New account
      </a>
      <Button className='hidden lg:flex' href='#login'>
        Sign in
      </Button>
      <Button className='ml-auto lg:hidden' px='px-3' onClick={toggleNavigation}>
        <MenuSvg openNavigation={openNavigation} />
      </Button>
    </header>
  )
}
