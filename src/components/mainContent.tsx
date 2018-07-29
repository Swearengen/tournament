import * as React from 'react'
import { Route } from 'react-router-dom'
import * as moment from 'moment'

import { rounds as mockedRounds } from '../models/itemMock'
import { TournamentListModel } from '../models/TournamentList'
import About from './about'
import TournamentDetails from './tournamentDetails'
import TournamentList from './tournamentList'

const tournamentListModel = TournamentListModel.create({
	items: [{
        id: '1',
        name: 'ffff',
        location: 'DSR Trnje',
        dateTime: moment('2018-02-08 09:30').toDate(),
        rounds: mockedRounds
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
                    render={(props) => <TournamentDetails 
                        {...props} 
                        // @ts-ignore
                        tournamentItem={tournamentListModel.items.length > 0 ? tournamentListModel.items[0] : undefined}/>
                    }
                />
            </div>
        )
    }
    
}
// setTimeout(() => {
//     // @ts-ignore
//     tournamentListModel.items[0].changeName('new name')
// }, 1000)

export default MainContent