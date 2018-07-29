import { observer } from "mobx-react"
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'
import cc from "classcat"

import { Match as MatchModel, Round } from '../../models/itemMock'
import { TournamentItemModel } from '../../models/TournamentItem'
import './index.css'
import Match from './match'

interface MatchParams {
  	topicId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
	tournamentItem: typeof TournamentItemModel.Type
}

class TournamentDetails extends React.Component<Props> {
  	public render() {
		const { tournament } = this.props.tournamentItem
		  
    	return (
			<div  className='tournament-detail'>
				<Container fluid={true}>
					<h2 className='tournament-detail__main-title'>{this.props.tournamentItem.name}</h2>					
					<Row>
						{tournament!.rounds.map((round: Round, j: number) =>							
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
						)}						
					</Row>	
				</Container>
			</div>
    	)
	}
}

export default observer(TournamentDetails)
