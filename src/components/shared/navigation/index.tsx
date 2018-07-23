import * as React from 'react'
import { match } from "react-router"
import { NavLink } from 'react-router-dom'

import './navigation.css'

import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler    
} from 'reactstrap';

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
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar={true}>
                            <Nav className="ml-auto" navbar={true}>
                                <NavLink to="/" activeClassName="active" isActive={this.oddEvent}>                                    
                                    Tournaments
                                </NavLink>
                                <NavLink to="/about" activeClassName="active" isActive={this.oddEvent}>                                    
                                    About
                                </NavLink>                        
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>                
            </div>        
        )
    }

}

export default Navigation