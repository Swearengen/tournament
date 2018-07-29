import * as React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

// import { rounds as mockedRounds } from './models/itemMock'
import { TournamentListModel } from './models/TournamentList'

import MainContent from './components/mainContent'
import Navigation from './components/shared/navigation'
library.add(faUser)

const tournamentListModel = TournamentListModel.create({
	// items: [{
    //     id: '1',
    //     name: 'ffff',
    //     location: 'DSR Trnje',
    //     dateTime: moment('2018-02-08 09:30').toDate(),
    //     rounds: mockedRounds
    // }]
})

class App extends React.Component {
	public render() {
		
		return (
			<div className="layout">
				<Navigation />			
				<MainContent tournamentListModel={tournamentListModel}/>				
			</div>
		);
	}
}

export default App
