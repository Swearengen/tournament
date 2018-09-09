import * as React from 'react'
import { match } from "react-router"

import './navigation.css'

import { Navbar, NavbarBrand } from 'reactstrap';

interface State {
    isOpen: boolean;
}

export class Navigation extends React.Component<{}, State> {

    public state: State = {
        isOpen: false,
    };

    public toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public oddEvent = (matchParams: match<any>, location: any) => {
        if (matchParams && !matchParams.isExact) {
            return location.pathname === '/' || location.pathname.includes('tournaments')
        }
        
        return matchParams ? true : false;    
    }

    public render() {
          
        return (
            <div>
                <Navbar color="light" light={true} expand="md">
                    <div className="container">
                        <NavbarBrand href="/" >
                            <h2>GLAVNO DA SE IGRA</h2>                            
                            <p>Tenis liga</p>
                        </NavbarBrand>                        
                    </div>
                </Navbar>                
            </div>        
        )
    }

}

export default Navigation