import axios from '../../axios'
import * as actions from './ActionTypes'

export const setContractStart = () => {
   return {
      type: actions.SET_CONTRACT_START,
   }
}

export const setContractSuccess = (id, contractData) => {
   return {
      type: actions.SET_CONTRACT_SUCCESS,
      contractId: id,
      contractData: contractData,
   }
}

export const setContractFail = error => {
   return {
      type: actions.SET_CONTRACT_FAIL,
      error: error,
   }
}

export const setContract = (contractData, token) => {
   return dispatch => {
      dispatch(setContractStart())
      axios
         .post('contracts.json?auth=' + token, contractData)
         .then(response => {
            dispatch(setContractSuccess(response.data.name, contractData))
         })
         .catch(error => {
            dispatch(setContractFail(error))
         })
   }
}

export const fetchContractsStart = () => {
   return {
      type: actions.FETCH_CONTRACTS_START,
   }
}

export const fetchContractsSuccess = contracts => {
   return {
      type: actions.FETCH_CONTRACTS_SUCCESS,
      contracts: contracts,
   }
}

export const fetchContractsFail = error => {
   return {
      type: actions.FETCH_CONTRACTS_FAIL,
      error: error,
   }
}

export const fetchContracts = (token, userId) => {
   return dispatch => {
      dispatch(fetchContractsStart())
      const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'
      axios
         .get('contracts.json' + queryParams)
         .then(response => {
            const fetchedContracts = []
            for (let key in response.data) {
               fetchedContracts.push({
                  ...response.data[key],
                  id: key,
               })
            }
            dispatch(fetchContractsSuccess(fetchedContracts))
         })
         .catch(error => {
            dispatch(fetchContractsFail(error))
         })
   }
}

export const updateContract = (token, userId) => {
   
}
