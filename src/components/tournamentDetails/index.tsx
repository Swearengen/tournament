import { observer } from "mobx-react"
import * as React from 'react'
import { Col, Container, Row } from 'reactstrap'
import cc from "classcat"

import { Match as MatchModel, Round, RoundSchemaItem } from '../../models/types'
import './index.css'
import Match from './match'
import RoundsSchema from './rounds-schema'


interface Props {
	selectedTournament: {
		name: string;
		roundItems: Round[];
		roundsSchemaItems: RoundSchemaItem[];
		setSelectedRound: (roundNum: number) => void
	}
}

export const TournamentDetails: React.SFC<Props> = (props) => {

	const renderTournamentRounds = (rounds: Round[]) => {
		return (
			rounds.map((round: Round, j: number) =>							
				<Col 
					key={`Round${round.roundNumber}`}
					xs={{size: 12}} 
					md={{size: 6}}
					xl={{size: 4}}								
				>
					<h3 className='tournament-detail__round-title'>{round.roundName}</h3>
					<div>
						{round.matches.map((matchPairs: MatchModel[], index) =>
							<div 
								key={`MatchPair${round.roundNumber}-${index}`}
								className={
									cc([
										'tournament-detail__match-pair',
										`column-num-${j+1}`
									])}
							>
								{matchPairs.map((matchItem: MatchModel, i) =>
									<Match key={`Match${round.roundNumber}-${index}-${i}`} match={matchItem} />
								)}
							</div>
						)}								
					</div>
				</Col>
			)			
		)
	}

	return (
		<div  className='tournament-detail'>
			<Container>
				{props.selectedTournament && 
					<h2 className='tournament-detail__main-title'>{props.selectedTournament.name}</h2>					
				}
				<RoundsSchema 
					rounds={props.selectedTournament.roundsSchemaItems} 
					setSelectedRound={props.selectedTournament.setSelectedRound}
				/>
				<Row>
					{
						props.selectedTournament && 							
						props.selectedTournament.roundItems &&						
						renderTournamentRounds(props.selectedTournament.roundItems)							
					}						
				</Row>	
			</Container>
		</div>
	)
}

export default observer(TournamentDetails)
