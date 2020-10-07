import * as actions from '../actions/ActionTypes'

const initialState = {
	token: null,
	userId: null,
	error: null,
	loading: null,
	authRedirectPath: '/',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.AUTH_START:
			return {
				...state,
				error: null,
				loading: true,
			}
		case actions.AUTH_SUCCESS:
			return {
				...state,
				token: action.idToken,
				userId: action.userId,
				error: null,
				loading: false,
			}
		case actions.AUTH_FAIL:
			return {
				...state,
				error: action.error,
				loading: false,
			}
		case actions.LOGOUT:
			return {
				...state,
				token: null,
				userId: null,
			}
		case actions.SET_AUTH_REDIRECT_PATH:
			return {
				...state,
				authRedirectPath: action.path,
			}
		default:
			return state
	}
}

export default reducer
