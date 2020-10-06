import React from 'react'

import Toolbar from '../components/navigation/toolbar/Toolbar'

import style from './Layout.module.css'

const Layout = props => {
	return (
		<div className={style.Layout}>
			<Toolbar />
			<main className={style.Content}>{props.children}</main>
		</div>
	)
}

export default Layout
