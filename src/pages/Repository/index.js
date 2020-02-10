import React from 'react'
import {} from './styles'

export default function Repository({ match }) {
	return (
		<div>
			<h1>{decodeURIComponent(match.params.repository)}</h1>
		</div>
	)
}
