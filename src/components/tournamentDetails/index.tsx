import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  topicId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

class TournamentDetails extends React.Component<Props> {
  public render() {
    return (
      <div>
        <p>tournament</p>
        <h3>{this.props.match.params.topicId}</h3>
      </div>
    );
  }
}

export default TournamentDetails;
