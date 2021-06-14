import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { MyProvider } from './context'

ReactDOM.render(
	<React.StrictMode>
		<MyProvider>
			<App />
		</MyProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
