import * as React from 'react'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

interface Props {
	tournamentList: {
		loading: boolean
		tournamentItems: Array<{ id: string, name: string }>
		fetchTournaments: (resource: string, url: string) => void
	}
}

export default inject('tournamentList')(observer(
	class TournamentsListPage extends Component<Props> {
		public componentDidMount () {
			this.props.tournamentList.fetchTournaments('tournament', '/tournamentsList')			
		}

		public render() {
			const { loading, tournamentItems } = this.props.tournamentList

			if (loading) {
				return <div>Loading...</div>
			}

			return (
				<ul>
					{tournamentItems.map(item => (
						<li key={item.id}>
							<Link to={`/tournaments/${item.id}`}>{item.name}</Link>
						</li>
					))}
				</ul>
			)
		}
	}
))
