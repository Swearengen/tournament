import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import About from './components/about';
import TournamentList from './components/tournamentList';

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

            <Route exact={true} path="/" render={(props) => <TournamentList {...props} tourProp='dfs' />}/>
            <Route path="/tournaments" render={(props) => <TournamentList {...props} tourProp='fsdsf' />}/>
            <Route path="/about" component={About}/>            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
