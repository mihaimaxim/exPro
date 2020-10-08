import React from 'react'

import style from './Button.module.css'

const Button = props => {
	return (
		<button
			onClick={props.clicked}
			className={[style.Button, style[props.btnType]].join(' ')}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}

export default Button
