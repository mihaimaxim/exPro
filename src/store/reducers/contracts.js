import * as actions from '../actions/ActionTypes'

const initialState = {
   contracts: [],
   loading: false,
   error: false,
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.SET_CONTRACT_START:
         return {
            ...state,
            loading: true,
         }
      case actions.SET_CONTRACT_SUCCESS:
         const newContract = {
            ...action.contractData,
            id: action.contractId,
         }
         return {
            ...state,
            loading: false,
            contracts: state.contracts.concat(newContract),
         }
      case actions.SET_CONTRACT_FAIL:
         return {
            ...state,
            loading: false,
            error: true,
         }
      case actions.FETCH_CONTRACTS_START:
         return {
            ...state,
            loading: true,
         }
      case actions.FETCH_CONTRACTS_SUCCESS:
         return {
            ...state,
            contracts: action.contracts,
            loading: false,
            error: null,
         }
      case actions.FETCH_CONTRACTS_FAIL:
         return {
            ...state,
            error: action.error,
         }
      default:
         return state
   }
}

export default reducer
