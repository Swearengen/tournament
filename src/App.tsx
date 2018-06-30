import * as React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'

import About from './components/about'
import TournamentList from './components/tournamentList'

import { TournamentListModel } from './models/TournamentList'

const tournamentListMOdel = TournamentListModel.create({
  items: [{
    name: 'tournament 1'
  }]
})

class App extends React.Component {
  public render() {
    return (
      <div className="container">        
        <Router>
          <div>
            <ul>
              <li><Link to="/tournaments">Tournaments</Link></li>            
              <li><Link to="/about">About</Link></li>            
            </ul>

            <hr/>

            <Route exact={true} path="/" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListMOdel} />}/>
            <Route path="/tournaments" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListMOdel} />}/>
            <Route path="/about" component={About}/>            
          </div>
        </Router>
      </div>
    );
  }
}

export default App
