import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/system'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = createTheme({
	palette: {
		primary: "#000000",
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	</ThemeProvider>
)
