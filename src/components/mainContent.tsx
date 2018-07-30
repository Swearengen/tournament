import * as React from 'react'
import { Route } from 'react-router-dom'
import * as _ from 'lodash'

import { TournamentListModel } from '../models/TournamentList'
import About from './about'
import TournamentDetails from './tournamentDetails'
import TournamentList from './tournamentList'

interface Props {
    tournamentListModel: typeof TournamentListModel.Type
}

class MainContent extends React.Component<Props> {
    
    public render() {        

        const { tournamentListModel } = this.props                        
        
        return (
            <div>
                <Route exact={true} path="/" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />} />
                <Route exact={true} path="/tournaments" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />} />
                <Route path="/about" component={About} />
                <Route 
                    path={`/tournaments/:topicId`} 
                    render={(props) => <TournamentDetails 
                        {...props} 
                        // @ts-ignore
                        tournamentItem={
                            tournamentListModel.items.length > 0 ? 
                            _.find(tournamentListModel.items, (item) => item.id === props.match.params.topicId) :                            
                            undefined
                        }/>
                    }
                />
            </div>
        )
    }
    
}

export default MainContent