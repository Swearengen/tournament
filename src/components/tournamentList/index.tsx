import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { TournamentListModel } from '../../models/TournamentList'
import Carousel from '../shared/carousel'

interface MatchParams {
    name: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    tournamentListModel: typeof TournamentListModel.Type
}

class TournamentList extends React.Component<Props> {    

    public render() {                
        return (
            <div>
                <Carousel />
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
