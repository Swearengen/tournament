import Button from 'antd/lib/button'
import * as React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'
import './App.css'

import About from './components/about'
import TournamentList from './components/tournamentList'

import { TournamentListModel } from './models/TournamentList'

const tournamentListModel = TournamentListModel.create({
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
            <Button type="primary">Button</Button>

            <hr/>

            <Route exact={true} path="/" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />}/>
            <Route path="/tournaments" render={(props) => <TournamentList {...props} tournamentListModel={tournamentListModel} />}/>
            <Route path="/about" component={About}/>            
          </div>
        </Router>
      </div>
    );
  }
}

setTimeout(() => {
    tournamentListModel.items[0].changeName('new name')
}, 1000)

export default App
