import React, { Suspense, useEffect } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../layout/Layout'
import Homepage from './homepage/Homepage'
import Spinner from '../components/UI/spinner/Spinner'

import * as actions from '../store/actions/index'

const App = props => {
	const { onAutoSignUp } = props

	useEffect(() => {
		onAutoSignUp()
	}, [onAutoSignUp])

	const AsnycAbout = React.lazy(() => {
		return import('../components/about/About')
	})

	const AsyncContact = React.lazy(() => {
		return import('./contact/Contact')
	})

	const AsyncAuth = React.lazy(() => {
		return import('./auth/Auth')
	})

	const AsyncLogout = React.lazy(() => {
		return import('./auth/Logout')
	})

	let routes = (
		<Switch>
			<Route path='/auth' render={props => <AsyncAuth {...props} />} />
			<Route path='/' exact component={Homepage} />
			<Redirect to='/' />
		</Switch>
	)

	if (props.isAuthenticated) {
		routes = (
			<Switch>
				<Route path='/about' render={props => <AsnycAbout {...props} />} />
				<Route path='/contact' render={props => <AsyncContact {...props} />} />
				<Route path='/auth' render={props => <AsyncAuth {...props} />} />
				<Route path='/logout' render={props => <AsyncLogout {...props} />} />
				<Route path='/' exact component={Homepage} />
				<Redirect to='/' />
			</Switch>
		)
	}

	return (
		<Layout path={props.history.location.pathname}>
			<Suspense fallback={<Spinner />}>{routes}</Suspense>
		</Layout>
	)
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAutoSignUp: () => dispatch(actions.authCheckState()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
