import * as React from 'react'
import { Link, Route, RouteComponentProps } from 'react-router-dom'

import { TournamentListModel } from '../../models/TournamentList'
import TournamentDetails from '../tournamentDetails'

interface MatchParams {
    name: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    tournamentListModel: typeof TournamentListModel.Type
}

class TournamentList extends React.Component<Props> {
    public render() {
        const { match } = this.props;
        
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                <li>
                    <Link to={`${match.url}/tournament1`}>
                        tournament1
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/tournament2`}>
                        tournament2
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/tournament2`}>
                        tournament2
                    </Link>
                </li>
                </ul>            

                <Route path={`${match.path}/:topicId`} component={TournamentDetails}/>
            </div>
        );
      }
}

export default TournamentList;
