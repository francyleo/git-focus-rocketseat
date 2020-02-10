import React, { Component } from 'react'
import Http from '../../services/http'

import {} from './styles'

export default class Repository extends Component {
	state = {
		repository: {},
		issues: [],
		loading: false,
	}

	async componentDidMount() {
		this.setState({ loading: true })
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

		this.setState({
			repository: repository.data,
			issues: repository.data,
			loading: false,
		})
	}

	render() {
		const { repository, issues, loading } = this.state
		return (
			<div>
				<h1>{repository.name}</h1>
			</div>
		)
	}
}
