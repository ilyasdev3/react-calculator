import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CalcolatorContexProvider from './context/CalcolatorContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CalcolatorContexProvider>
			<App />
		</CalcolatorContexProvider>
	</React.StrictMode>
)
