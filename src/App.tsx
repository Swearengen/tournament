import * as React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

import MainContent from './components/mainContent'
import Navigation from './components/shared/navigation'

class App extends React.Component {
	public render() {
		
		return (
			<div className="layout">
				<Navigation />			
				<MainContent />				
			</div>
		);
	}
}

export default App
