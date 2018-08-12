import { observer } from "mobx-react"
import * as React from 'react'
import { Col, Container, Row } from 'reactstrap'
import cc from "classcat"

import { Match as MatchModel, Round } from '../../models/types'
import './index.css'
import Match from './match'


interface Props {
	selectedTournament: {
		name: string
		roundItems: Round[]
	}
}

class TournamentDetails extends React.Component<Props> {

  	public render() {		
		
    	return (
			<div  className='tournament-detail'>
				<Container fluid={true}>
					{this.props.selectedTournament && 
						<h2 className='tournament-detail__main-title'>{this.props.selectedTournament.name}</h2>					
					}
					<Row>
						{
							this.props.selectedTournament && 							
							this.props.selectedTournament.roundItems &&
							
							this.renderTournamentRounds(this.props.selectedTournament.roundItems as Round[])							
						}						
					</Row>	
				</Container>
			</div>
    	)
	}

	private renderTournamentRounds(rounds: Round[]) {
		return (
			rounds.map((round: Round, j: number) =>							
				<Col key={`Round${round.roundNumber}`}
					xs={{size: 10, offset: 1}} 
					md={{size: 6, offset: 0}}
					lg={{size: 4, offset: 0}}								
				>
					{round.matches.map((matchPairs: MatchModel[], index) =>
						<div 
							key={`MatchPair${round.roundNumber}-${index}`}
							className={cc([
								'tournament-detail__match-pair',
								`column-num-${j+1}`
							])}
						>
							{matchPairs.map((matchItem: MatchModel, i) =>
								<Match key={`Match${round.roundNumber}-${index}-${i}`} match={matchItem} />
							)}
						</div>
					)}								
				</Col>
			)			
		)
	}
}

export default observer(TournamentDetails)
