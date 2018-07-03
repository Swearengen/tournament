import * as React from 'react'
import { Route } from 'react-router-dom'

import { TournamentListModel } from '../models/TournamentList';
import About from './about'
import TournamentList from './tournamentList'

const tournamentListModel = TournamentListModel.create({
	items: [{
		name: 'tournament 1'
	}]
})

class MainContent extends React.Component {
    
    public render() {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Route exact={true} path="/" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />} />
                <Route path="/tournaments" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />} />
                <Route path="/about" component={About} />
            </div>
        )
    }
    
}
setTimeout(() => {
    tournamentListModel.items[0].changeName('new name')
}, 1000)

export default MainContent