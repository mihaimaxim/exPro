import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker'

import App from './containers/App'
import authReducer from './store/reducers/auth'

import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const composeEnhancers = process.env.NODE_ENV
// 	? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE
// 	: null || compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
   <Provider store={store}>
      <BrowserRouter>
         <React.StrictMode>
            <App />
         </React.StrictMode>
      </BrowserRouter>
   </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
