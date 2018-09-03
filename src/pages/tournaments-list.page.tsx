import * as React from 'react'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { API } from "aws-amplify"

interface Props extends RouteComponentProps<{ topicId: string }> {
	tournamentList: {
		loading: boolean
		tournamentItems: Array<{ id: string, name: string }>
		fetchTournaments: () => void
	}
}

export default inject('tournamentList')(observer(
	class TournamentsListPage extends Component<Props> {
		public componentDidMount () {
			this.props.tournamentList.fetchTournaments()

			const test = API.get('tournament', '/tournamentsList', null)
			test.then(res => {
				console.log(res, 'res');				
			}).catch(err => {
				console.log(err, 'ccc');
				
			})
			
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
