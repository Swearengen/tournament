import * as React from 'react'
import { observer } from 'mobx-react';

import { Link, RouteComponentProps } from 'react-router-dom'

import { TournamentListModel } from '../../models/TournamentList'
import Carousel from '../shared/carousel'

interface MatchParams {
    name: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    tournamentListModel: typeof TournamentListModel.Type
}

@observer
class TournamentList extends React.Component<Props> {    

    public render() {                               
        return (
            <div>
                <Carousel />
                <h2>Topics</h2>
                <ul>
                    {this.props.tournamentListModel.tournamentItems.map((item) => (
                        <li key={`nav-item-${item.id}`}>
                            <Link to={`${this.rootPath()}/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>                    
                    ))}                    
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
