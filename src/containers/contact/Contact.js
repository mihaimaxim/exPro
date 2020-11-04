import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from '../../axios'

import * as actions from '../../store/actions/index'
import Contract from '../../components/contract/Contract'

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

   componentDidMount() {
      console.log(this.props.localToken)
      console.log(this.props.localUserId)
      console.log(
         this.props.onFetchContracts(this.props.localToken, this.props.localUserId)
      )
   }

   render() {
      let contracts = null

      if (this.props.localToken) {
         contracts = this.props.localContracts.map(contract => (
            <Contract
               key={contract.id}
               name={contract.contractData.name}
               length={contract.contractData.length}
            />
         ))
      }

      return (
         <div>
            <div style={{ paddingTop: '100vh' }} />
            <div className={style.Contact}>{contracts}</div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      localContracts: state.contracts.contracts,
      localToken: state.auth.token,
      localUserId: state.auth.userId,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onFetchContracts: (token, userId) =>
         dispatch(actions.fetchContracts(token, userId)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact, axios)
