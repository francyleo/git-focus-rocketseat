import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Http from '../../services/http'

import {} from './styles'

export default class Repository extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				repository: PropTypes.string,
			}),
		}).isRequired,
	}

	state = {
		repository: {},
		issues: [],
		loading: false,
	}

	async componentDidMount() {
		this.setState({ loading: true })

		const { match } = this.props

		const decodedRepo = decodeURIComponent(match.params.repository)

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
