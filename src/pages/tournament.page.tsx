import * as React from 'react'
import { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import * as _ from 'lodash'

import TournamentDetails from '../components/tournamentDetails'
import { Round, RoundSchemaItem } from '../models/types';

interface Props extends RouteComponentProps<{ topicId: string }> {
	selectedTournament: {
		loading: boolean
		name: string
		roundItems: Round[]
		roundsSchemaItems: RoundSchemaItem[];
		fetchRounds: (topicId: string) => void
		setWindowWidth: (width: number) => void
	}
}

export default inject('selectedTournament')(observer(
	class TournamentPage extends Component<Props> {
		private onResize = _.debounce(() => {			
			this.props.selectedTournament.setWindowWidth(window.innerWidth)
		}, 350);

		public componentDidMount() {						
			const { topicId } = this.props.match.params
			window.addEventListener("resize", this.onResize)
			this.props.selectedTournament.fetchRounds(topicId)
			this.props.selectedTournament.setWindowWidth(window.innerWidth)
		}

		public componentWillUnmount() {
			window.removeEventListener("resize", this.onResize)
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
