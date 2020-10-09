import React, { Component } from 'react'
import Spinner from '../../components/UI/spinner/Spinner'

import style from './Contact.module.css'

class Contact extends Component {
	state = {
		controls: {
			name: {
				elementType: 'input',
				valueType: 'name',
				elementConfig: {
					type: 'text',
					placeholder: 'Your name',
				},
				value: '',
				validation: {
					required: true,
					nameValidation: /^[A-Za-z\s]+$/,
					minimumLength: 6,
					maximumLength: 18,
				},
				valid: false,
				touched: false,
			},
			surname: {
				elementType: 'input',
				valueType: 'surname',
				elementConfig: {
					type: 'text',
					placeholder: 'Your surname',
				},
				value: '',
				validation: {
					required: true,
					nameValidation: /^[A-Za-z\s]+$/,
					minimumLength: 6,
					maximumLength: 18,
				},
				valid: false,
				touched: false,
			},
			email: {
				elementType: 'input',
				valueType: 'e-mail',
				elementConfig: {
					type: 'text',
					placeholder: 'Your e-mail',
				},
				value: '',
				validation: {
					required: true,
					email: new RegExp([
						"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
					]),
				},
				valid: false,
				touched: false,
			},
			comments: {
				elementType: 'textarea',
				elementConfig: {
					type: 'text',
					placeholder: 'Your mentions (not mandatory)',
				},
				value: '',
				validation: {},
				valid: true,
				touched: false,
			},
		},
		formIsValid: false,
		errorMessage: 'Please enter a valid',
	}

	render() {
		return (
			<div className={style.Contact}>
				<Spinner />
			</div>
		)
	}
}

export default Contact
