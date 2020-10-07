import React, { Suspense } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import Layout from '../layout/Layout'
import Homepage from './homepage/Homepage'
import Spinner from '../components/UI/spinner/Spinner'

const App = props => {
	const AsnycAbout = React.lazy(() => {
		return import('../components/about/About')
	})

	const AsyncContact = React.lazy(() => {
		return import('./contact/Contact')
	})

	const routes = (
		<Switch>
			<Route path='/about' render={props => <AsnycAbout {...props} />} />
			<Route path='/contact' render={props => <AsyncContact {...props} />} />
			<Route path='/' exact component={Homepage} />
			<Redirect to='/' />
		</Switch>
	)

	return (
		<Layout>
			<Suspense fallback={<Spinner />}>{routes}</Suspense>
		</Layout>
	)
}

export default withRouter(App)
