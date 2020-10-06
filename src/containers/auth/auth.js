import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				valueType: 'email',
				elementConfig: {
					type: 'email',
					placeholder: 'Your email',
				},
				value: '',
				validation: {
					required: true,
					isEmail: true,
					email: new RegExp([
						"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
					]),
				},
				valid: false,
				touched: false,
			},
			password: {
				elementType: 'input',
				valueType: 'password',
				elementConfig: {
					type: 'password',
					placeholder: 'Your password',
				},
				value: '',
				validation: {
					required: true,
					minimumLength: 6,
				},
				valid: false,
				touched: false,
			},
		},
		formIsValid: false,
		errorMessage: 'Please enter a valid',
		signInMode: true,
	}

	render() {
		return <div>Authentication Page</div>
	}
}

export default Auth
