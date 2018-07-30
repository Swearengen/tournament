import * as React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { TournamentListModel } from './models/TournamentList'

import MainContent from './components/mainContent'
import Navigation from './components/shared/navigation'
library.add(faUser)

const fetcher = (url: string) => window.fetch(url).then(response => response.json())
const tournamentListModel = TournamentListModel.create(	
	{},
	{
        fetch: fetcher
    }
)

class App extends React.Component {
	public componentDidMount() {
		tournamentListModel.fetchTournaments()
	}

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
