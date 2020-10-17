import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './NavItem.module.css'

const NavItem = props => {
   const { link, exact, children } = props // object destructuring

   return (
      <li className={style.NavItem}>
         <NavLink to={link} exact={exact} activeClassName={style.active}>
            {children}
         </NavLink>
      </li>
   )
}

export default NavItem
