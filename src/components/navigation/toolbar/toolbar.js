import React from 'react'

import NavItems from '../navItems/NavItems'
import Logo from '../../logo/Logo'

import style from './Toolbar.module.css'

const Toolbar = props => {
	return (
		<header className={style.Toolbar}>
			<Logo />
			<nav className={style.DesktopOnly}>
				<NavItems isAuthenticated={props.isAuthenticated} />
			</nav>
		</header>
	)
}

export default Toolbar
