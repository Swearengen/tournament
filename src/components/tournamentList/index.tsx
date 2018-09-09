import * as React from 'react'

import Carousel from '../shared/carousel'
import { Container, Row, Col, Button, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

import './index.css'

interface Props {
    tournamentItems: Array<{ id: string, name: string, location: string, dateTime: string }>
}

interface State {
    collapse: boolean;
}

class TournamentList extends React.Component<Props, State> {    

    public state: State = {
        collapse: true,
    }

    public render() {                                   
        return (
            <div className="tournaments-list">
				<Carousel />
                <Container>
                    <h2 className="tournaments-list__title">TOURNAMENTS</h2>
                    <Row>
                        <Col md="8">
                            <div className="tournaments-list__collapse-cont">
                                <Button className="tournaments-list__collapse-button" onClick={this.toggle}>2018</Button>
                                <Collapse isOpen={this.state.collapse}>
                                    <ul className="tournaments-list__list">
                                        {this.props.tournamentItems.map(item => (
                                            <li className="tournaments-list__item" key={item.id}>
                                                <Link to={`/tournaments/${item.id}`}>{item.name} / {item.location} / {this.formatDate(item.dateTime)}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Collapse>
                            </div>                            
                        </Col>
                        <Col md="4">
                            <h3>About</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>                            
                        </Col>							
                    </Row>
                </Container>
                
            </div>
        )
    }

    private formatDate(dateString: string) {
        const date = new Date(dateString);

        return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }

    private toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }
}

export default TournamentList
