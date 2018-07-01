import { observer } from "mobx-react"
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { TournamentItemModel } from '../../models/TournamentItem'

interface MatchParams {
  	topicId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
	tournamentItem: typeof TournamentItemModel.Type
}

class TournamentDetails extends React.Component<Props> {
  	public render() {
    	return (
      		<div>
        		<p>tournament name: {this.props.tournamentItem.name}</p>
        		<h3>{this.props.match.params.topicId}</h3>
      		</div>
    	);
  	}
}

export default observer(TournamentDetails)
