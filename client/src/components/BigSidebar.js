import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import Logo from './Logo'

const BigSide = () => {
  const { showSidebar , toggleSideBar} = useAppContext()

  return (
    <Wrapper>
    <div className={
      showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
    }>
      <div>
    <header>
      <Logo/>
    </header>
    <NavLinks/>

      </div>

    </div>
    </Wrapper>
  )
}

export default BigSide