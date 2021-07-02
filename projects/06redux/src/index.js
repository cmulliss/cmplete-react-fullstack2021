import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './store/reducers'
import promiseMiddleware from 'redux-promise'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(promiseMiddleware))(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
)

// need to connect the Provider, the bridge, to Redux. Provider needs a prop called store.
