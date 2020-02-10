import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Http from '../../services/http'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton, List } from './styles'

export default class Main extends Component {
	state = {
		newRepo: '',
		repositories: [],
		loading: false,
	}

	componentDidMount() {
		const repos = localStorage.getItem('repos')

		if (repos) {
			this.setState({ repositories: JSON.parse(repos) })
		}
	}

	componentDidUpdate(_, prevState) {
		const { repositories } = this.state

		if (prevState.repositories !== repositories) {
			localStorage.setItem('repos', JSON.stringify(repositories))
		}
	}

	handleInputChange = e => {
		this.setState({ newRepo: e.target.value })
	}

	handleSubmit = async e => {
		e.preventDefault()

		this.setState({ loading: true })

		const { newRepo, repositories } = this.state

		const response = await Http.get(`repos/francyleo/${newRepo}`)

		const data = {
			name: response.data.full_name,
		}

		this.setState({ repositories: [...repositories, data], loading: false })
	}

	render() {
		const { newRepo, loading, repositories } = this.state

		return (
			<Container>
				<h1>
					<FaGithubAlt />
					Repositórios
				</h1>

				<Form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Adicionar repositório"
						value={newRepo}
						onChange={this.handleInputChange}
						required
					/>

					<SubmitButton loading={loading ? 1 : 0}>
						{loading ? <FaSpinner color="#fff" size={14} /> : <FaPlus color="#fff" size={14} />}
					</SubmitButton>
				</Form>

				<List>
					{repositories.map(repo => (
						<li key={repo.name}>
							<span>{repo.name}</span>
							<Link to={`/repository/${encodeURIComponent(repo.name)}`}>Detalhes</Link>
						</li>
					))}
				</List>
			</Container>
		)
	}
}
