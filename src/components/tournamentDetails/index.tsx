import { observer } from "mobx-react"
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'

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
		  console.log(this.props.tournamentItem.tournament, 'ggg');
		  
    	return (
			<div style={{ paddingTop: 50, paddingBottom: 50 }}>
				<Container fluid={true}>
					<h2 style={{textAlign: 'center', marginBottom: 50}}>{this.props.tournamentItem.name}</h2>
					{/* <h3>{this.props.match.params.topicId}</h3> */}
					<Row>
						<Col 
							xs={{size: 10, offset: 1}} 
							md={{size: 6, offset: 0}}
							lg={{size: 4, offset: 0}}
						>
							<Match match={this.props.tournamentItem.tournament!.rounds[0].matches[0]} />
						</Col>
						<Col 
							xs={{size: 10, offset: 1}} 
							md={{size: 6, offset: 0}}
							lg={{size: 4, offset: 0}}
						>
							ggggg
						</Col>
						<Col 
							xs={{size: 10, offset: 1}} 
							md={{size: 6, offset: 0}}
							lg={{size: 4, offset: 0}}
						>
							ggggg
						</Col>
					</Row>	
				</Container>
			</div>
    	)
  	}
}

export default observer(TournamentDetails)
