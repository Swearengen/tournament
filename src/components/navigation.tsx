import * as React from 'react'
import { Link } from 'react-router-dom'


class Navigation extends React.Component {

    public render() {
        return (
            <div>
                <ul>
                  <li><Link to="/tournaments">Tournaments</Link></li>            
                  <li><Link to="/about">About</Link></li>            
                </ul>
            </div>        
        )
    }

}

export default Navigation