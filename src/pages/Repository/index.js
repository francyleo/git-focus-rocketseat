import React, { Component } from 'react'
import Http from '../../services/http'

import {} from './styles'

export default class Repository extends Component {
	state = {
		repository: {},
	}

	async componentDidMount() {
		const decodedRepo = decodeURIComponent(this.props.match.params.repository)

		const [repository, issues] = await Promise.all([
			Http.get(`repos/${decodedRepo}`),
			Http.get(`repos/${decodedRepo}/issues`, {
				params: {
					state: 'open',
					per_page: 5,
				},
			}),
		])
	}

	render() {
		const { repository } = this.state
		return (
			<div>
				<h1>{repository.name}</h1>
			</div>
		)
	}
}
