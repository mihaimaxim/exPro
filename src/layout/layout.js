import React from 'react'
import { connect } from 'react-redux'

import Toolbar from '../components/navigation/toolbar/Toolbar'

import style from './Layout.module.css'

const Layout = props => {
	let background = null

	if (props.path === '/') {
		background = [style.Layout, style.Home].join(' ')
	} else if (props.path === '/about') {
		background = [style.Layout, style.About].join(' ')
	} else if (props.path === '/contact') {
		background = [style.Layout, style.Contact].join(' ')
	} else {
		background = [style.Layout, style.Auth].join(' ')
	}

	return (
		<div className={background}>
			<Toolbar isAuthenticated={props.isAuthenticated} />
			<main className={style.Content}>{props.children}</main>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null,
	}
}

export default connect(mapStateToProps)(Layout)
