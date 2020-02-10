import { createGlobalStyle } from 'styled-components'
import Colors from './colors'
export default createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100%;
	}

	body {
		background: ${Colors.primary};
		-webkit-font-smoothing: antialiased !important;
		font-family: Arial, Helvetica, sans-serif;
	}
`
