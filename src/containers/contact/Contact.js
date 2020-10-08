import React, { Component } from 'react'

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
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has
					roots in a piece of classical Latin literature from 45 BC, making it over
					2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
					College in Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through the cites of the
					word in classical literature, discovered the undoubtable source. Lorem
					Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
					Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
				</p>
			</div>
		)
	}
}

export default Contact
