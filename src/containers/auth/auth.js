import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import Input from '../../components/UI/input/Input'
import Spinner from '../../components/UI/spinner/Spinner'

import style from './Auth.module.css'

import * as actions from '../../store/actions/index'

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

	componentDidMount() {}

	checkValidity = (value, rules) => {
		let isValid = true

		if (!rules) {
			return true && isValid
		}

		if (rules.required) {
			isValid = value !== '' && isValid
		}

		if (rules.nameValidation) {
			isValid = rules.nameValidation.test(value) && isValid
		}

		if (rules.email) {
			isValid = rules.email.test(value) && isValid
		}

		if (rules.minimumLength) {
			isValid = value.length > rules.minimumLength && isValid
		}

		if (rules.maximumLength) {
			isValid = value.length < rules.maximumLength && isValid
		}
		return isValid
	}

	inputChangeHandler = (event, inputIdentifier) => {
		const updatedControls = {
			...this.state.controls,
		}

		const updatedFormElement = { ...updatedControls[inputIdentifier] }

		updatedFormElement.value = event.target.value
		updatedFormElement.valid = this.checkValidity(
			updatedFormElement.value,
			updatedFormElement.validation
		)
		updatedFormElement.touched = true
		updatedControls[inputIdentifier] = updatedFormElement

		let formIsValid = true

		for (let inputIdentifier in updatedControls) {
			formIsValid = updatedControls[inputIdentifier].valid && formIsValid
		}

		this.setState({ controls: updatedControls, formIsValid: formIsValid })
	}

	submitHandler = event => {
		event.preventDefault()

		this.props.onAuth(
			this.state.controls.email.value,
			this.state.controls.password.value,
			this.state.signInMode
		)
	}

	toggleSignInMode = () => {
		this.setState(prevState => {
			return { signInMode: !prevState.signInMode }
		})
	}

	render() {
		const formElementsArray = []

		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key],
				errorMessage: this.state.errorMessage,
			})
		}

		let form = formElementsArray.map(formElement => (
			<Input
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={event => this.inputChangeHandler(event, formElement.id)}
				valueType={formElement.config.valueType}
				errorMessage={formElement.errorMessage}
			/>
		))

		if (this.props.localLoading) {
			form = <Spinner />
		}

		let errorMessage = null

		if (this.props.localError) {
			errorMessage = <p style={{ color: 'red' }}>{this.props.localError.message}</p>
		}

		let authRedirect = null

		if (this.props.isAuthenticated) {
			authRedirect = <Redirect to={this.props.authRedirectPath} />
		}

		return (
			<div className={style.Auth}>
				{authRedirect}
				{errorMessage}
				<form onSubmit={this.submitHandler}>{form}</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		localLoading: state.loading,
		localError: state.error,
		isAuthenticated: state.token !== null,
		authRedirectPath: state.authRedirectPath,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, signInMode) =>
			dispatch(actions.auth(email, password, signInMode)),
		onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
