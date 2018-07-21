import * as React from 'react'

import './App.css'
import MainContent from './components/mainContent'

import Navigation from './components/navigation';

class App extends React.Component {
	public render() {
		
		return (
			<div className="layout">
				<div>
					<div className="logo" />
					<Navigation />
				</div>
				<div style={{ padding: '0 50px' }}>
					<MainContent />
				</div>
			</div>
		);
	}
}

export default App
