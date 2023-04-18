import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const theme = createTheme({
	palette: {
		primary: {
			main: "#000000"
		},
	},
	typography: {
		fontFamily: "Fira Sans Extra Condensed"
	}
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	</ThemeProvider>
)
