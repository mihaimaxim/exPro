import React from 'react'

import NavItem from './navItem/NavItem'

import style from './NavItems.module.css'

const NavItems = props => {
	return (
		<ul className={style.NavItems}>
			<NavItem link='/about'>About</NavItem>
			<NavItem link='/contact'>Contact</NavItem>
			<NavItem link='/auth'>Authenticate</NavItem>
		</ul>
	)
}

export default NavItems
