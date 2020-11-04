import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../../components/UI/input/Input'
import Spinner from '../../components/UI/spinner/Spinner'

import * as actions from '../../store/actions/index'

import style from './About.module.css'

class About extends Component {
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
               maximumLength: 30,
            },
            valid: false,
            touched: false,
         },
         length: {
            elementType: 'input',
            valueType: 'length',
            elementConfig: {
               type: 'number',
               placeholder: 'Your length',
            },
            value: '',
            validation: {
               required: true,
               lengthValidation: /[0-9]/,
            },
            valid: false,
            touched: false,
         },
         type: {
            elementType: 'select',
            elementConfig: {
               options: [
                  { value: 'road', displayValue: 'Road' },
                  { value: 'bridge', displayValue: 'Bridge' },
               ],
            },
            value: 'road',
            valid: false,
         },
      },
      formIsValid: false,
      errorMessage: 'Please enter a valid',
      signInMode: true,
   }

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

      const formData = {}

      for (let formIdentifier in this.state.controls) {
         formData[formIdentifier] = this.state.controls[formIdentifier].value
      }

      const contract = {
         contractData: formData,
         userId: this.props.localUserId,
      }

      this.props.onContractUpload(contract, this.props.localToken)
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

      // let authRedirect = null

      // if (this.props.isAuthenticated) {
      //    authRedirect = <Redirect to={this.props.authRedirectPath} />
      // }

      return (
         <div className={style.About}>
            {/* {authRedirect} */}
            {errorMessage}
            <form onSubmit={this.submitHandler}>
               {form}
               <button disabled={!this.state.formIsValid}>UPLOAD CONTRACT</button>
            </form>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      localLoading: state.auth.loading,
      localError: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      localUserId: state.auth.userId,
      localToken: state.auth.token,
      localContract: state.contracts.contracts,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      // onAuth: (email, password, signInMode) =>
      //    dispatch(actions.auth(email, password, signInMode)),
      // onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path)),
      onContractUpload: (contractData, token) =>
         dispatch(actions.setContract(contractData, token)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
