import { observer } from "mobx-react"
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'

import { Match as MatchModel, Round } from '../../models/itemMock'
import { TournamentItemModel } from '../../models/TournamentItem'
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
			<div style={{ paddingTop: 50, paddingBottom: 50 }}>
				<Container fluid={true}>
					<h2 style={{textAlign: 'center', marginBottom: 50}}>{this.props.tournamentItem.name}</h2>					
					<Row>
						{tournament!.rounds.map((round: Round) =>							
							<Col key={`Round${round.roundNumber}`}
								xs={{size: 10, offset: 1}} 
								md={{size: 6, offset: 0}}
								lg={{size: 4, offset: 0}}
							>
								{round.matches.map((matchItem: MatchModel, index) =>
									<Match key={`Match${round.roundNumber}-${index}`} match={matchItem} />
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
