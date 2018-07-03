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
        
        console.log(match.url, match, 'ggg');
        
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                <li>
                    <Link to={`${this.rootPath()}/tournament1`}>
                        tournament1
                    </Link>
                </li>
                <li>
                    <Link to={`${this.rootPath()}/tournament2`}>
                        tournament2
                    </Link>
                </li>
                <li>
                    <Link to={`${this.rootPath()}/tournament2`}>
                        tournament2
                    </Link>
                </li>
                </ul>            

                <Route 
                    path={`${match.path}/:topicId`} 
                    render={(props) => <TournamentDetails {...props} tournamentItem={this.props.tournamentListModel.items[0]}/>}
                />
            </div>
        );
    }

    private rootPath() {
        const { match } = this.props;

        if (match.url === '/') {
            return '/tournaments'
        }

        return match.url
    }
}

export default TournamentList
