import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/aries.png'

import style from './Logo.module.css'

const Logo = props => {
   return (
      <div className={style.Logo} onClick={props.clicked}>
         <NavLink to='/' exact>
            <img src={logo} alt='myLogo' />
         </NavLink>
      </div>
   )
}

export default Logo
