import * as React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Navigation from './components/shared/navigation'

import TournamentPage from './pages/tournament.page'
import TournamentsListPage from './pages/tournaments-list.page'
import About from './components/about'

library.add(faUser)

const Application = () => (
	<div className="layout">
		<Navigation />
		<Switch>
			<Redirect path="/" to="/tournaments" exact={true} />
			<Route path="/tournaments" component={TournamentsListPage} exact={true} />
			<Route path="/about" component={About} />
			<Route path="/tournaments/:topicId" component={TournamentPage} exact={true} />
		</Switch>
	</div>
);

export default Application
