import React from 'react'
import { connect } from 'react-redux'

import Toolbar from '../components/navigation/toolbar/Toolbar'

import style from './Layout.module.css'

const Layout = props => {
	return (
		<div className={style.Layout}>
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
