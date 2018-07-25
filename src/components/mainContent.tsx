import * as React from 'react'
import { Route } from 'react-router-dom'

import { mockedTournament } from '../models/itemMock'
import { TournamentListModel } from '../models/TournamentList'
import About from './about'
import TournamentDetails from './tournamentDetails'
import TournamentList from './tournamentList'

const tournamentListModel = TournamentListModel.create({
	items: [{
        name: 'tournament 1',
        tournament: mockedTournament
	}]
})

class MainContent extends React.Component {
    
    public render() {        

        return (
            <div>
                <Route exact={true} path="/" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />} />
                <Route exact={true} path="/tournaments" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />} />
                <Route path="/about" component={About} />
                <Route 
                    path={`/tournaments/:topicId`} 
                    // @ts-ignore
                    render={(props) => <TournamentDetails {...props} tournamentItem={tournamentListModel.items[0]}/>}
                />
            </div>
        )
    }
    
}
setTimeout(() => {
    // @ts-ignore
    tournamentListModel.items[0].changeName('new name')
}, 1000)

export default MainContent