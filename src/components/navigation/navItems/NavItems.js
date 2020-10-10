import React from 'react'

import NavItem from './navItem/NavItem'

import style from './NavItems.module.css'

const NavItems = props => {
	return (
		<ul className={style.NavItems}>
			{props.isAuthenticated ? <NavItem link='/about'>About</NavItem> : null}
			{props.isAuthenticated ? <NavItem link='/contact'>Contact</NavItem> : null}
			{!props.isAuthenticated ? (
				<NavItem link='/auth'>Authenticate</NavItem>
			) : (
				<NavItem link='/logout'>Logout</NavItem>
			)}
		</ul>
	)
}

export default NavItems
