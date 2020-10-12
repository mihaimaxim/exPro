import React, { useState } from 'react'

import NavItems from '../navItems/NavItems'
import Logo from '../../logo/Logo'

import style from './Toolbar.module.css'

const Toolbar = props => {
   const [navbar, setNavbar] = useState(false)

   const changeBackground = () => {
      if (window.scrollY > 75) {
         setNavbar(true)
      } else {
         setNavbar(false)
      }
   }

   window.addEventListener('scroll', changeBackground)

   return (
      <header className={navbar ? style.ToolbarScrolled : style.Toolbar}>
         <Logo />
         <nav className={style.DesktopOnly}>
            <NavItems isAuthenticated={props.isAuthenticated} />
         </nav>
      </header>
   )
}

export default Toolbar
