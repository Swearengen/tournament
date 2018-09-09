import * as React from 'react'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import TournamentList from '../components/tournamentList';


interface Props {
	tournamentList: {
		loading: boolean
		tournamentItems: Array<{ id: string, name: string, location: string, dateTime: string }>
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
				<TournamentList tournamentItems={tournamentItems} />
			)
		}
	}
))
