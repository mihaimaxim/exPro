import React from 'react'

import style from './Input.module.css'

const Input = props => {
	let inputElement = null
	let validationError = null
	const inputStyle = [style.InputElement]

	if (props.invalid && props.shouldValidate && props.touched) {
		inputStyle.push(style.Invalid)

		validationError = (
			<p className={style.ValidationError}>
				{props.errorMessage} {props.valueType}
			</p>
		)
	}

	switch (props.elementType) {
		case 'Input':
			inputElement = (
				<input
					{...props.elementConfig}
					className={inputStyle.join(' ')}
					value={props.value}
					onChange={props.changed}
				/>
			)
			break
		case 'textarea':
			inputElement = (
				<input
					{...props.elementConfig}
					className={inputStyle.join(' ')}
					value={props.value}
					onChange={props.changed}
				/>
			)
			break
		case 'select':
			inputElement = (
				<select
					{...props.elementConfig}
					className={inputStyle.join(' ')}
					onChange={props.changed}
				>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			)
			break
		default:
			inputElement = (
				<input
					{...props.elementConfig}
					className={inputStyle.join(' ')}
					value={props.value}
					onChange={props.changed}
				/>
			)
	}

	return (
		<div className={style.Input}>
			<label className={style.Label}>{props.label}</label>
			{inputElement}
			{validationError}
		</div>
	)
}

export default Input
