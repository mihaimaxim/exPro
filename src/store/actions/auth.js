import axios from '../../axios'
import key from '../../keys'
import * as actions from './ActionTypes'

export const authStart = () => {
	return {
		type: actions.AUTH_START,
	}
}

export const authSucces = (idToken, userId) => {
	return {
		type: actions.AUTH_SUCCESS,
		idToken: idToken,
		userId: userId,
	}
}

export const authFail = error => {
	return {
		type: actions.AUTH_FAIL,
		error: error,
	}
}

export const logout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('expirationDate')
	localStorage.removeItem('userId')
	return {
		type: actions.LOGOUT,
	}
}

export const checkAuthTimeout = expirationTime => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, expirationTime * 1000)
	}
}

export const auth = (email, password, signInMode) => {
	return dispatch => {
		dispatch(authStart())
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true,
		}

		let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
		if (signInMode) {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
		}

		axios
			.post(url, authData)
			.then(response => {
				const expirationDate = new Date(
					new Date().getTime() + response.data.expiresIn * 1000
				)
				localStorage.setItem('token', response.data.idToken)
				localStorage.setItem('expirationDate', expirationDate)
				localStorage.setItem('userId', response.data.localId)
				dispatch(authSucces(response.data.idToken, response.data.localId))
				dispatch(checkAuthTimeout(response.data.expiresIn))
				console.log(response)
			})
			.catch(error => {
				console.log(error)
				dispatch(authFail(error.response.data.error))
			})
	}
}

export const setAuthRedirectPath = path => {
	return {
		type: actions.SET_AUTH_REDIRECT_PATH,
		path: path,
	}
}

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token')
		if (!token) {
			dispatch(logout())
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'))
			if (expirationDate < new Date()) {
				dispatch(logout())
			} else {
				const userId = localStorage.getItem('userId')
				dispatch(authSucces(token, userId))
				dispatch(
					checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000)
				)
			}
		}
	}
}
