import * as React from 'react'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom';

import TournamentDetails from '../components/tournamentDetails'
import { Round } from '../models/types';

interface Props extends RouteComponentProps<{ topicId: string }> {
	selectedTournament: {
		loading: boolean
		name: string,
		rounds: Round[],
		fetchRounds: (topicId: string) => void
	}
}

export default inject('selectedTournament')(observer(
	class TournamentPage extends Component<Props> {
		public componentDidMount () {
			const { topicId } = this.props.match.params
			this.props.selectedTournament.fetchRounds(topicId)
		}

		public render() {
			const { loading } = this.props.selectedTournament

			if (loading) {
				return <div>Loading...</div>
			}

			return (
				<TournamentDetails selectedTournament={this.props.selectedTournament} />
			)
		}
	}
))
