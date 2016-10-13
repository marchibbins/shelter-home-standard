import React from 'react';
import { Col, Collapse, Nav, NavItem, Row, Tab } from 'react-bootstrap';

export default class Digest extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            1: true,
            2: false,
            3: false
        };
    }

    handleClick (eventKey) {
        this.setState({1: false, 2: false, 3: false, [eventKey]: !this.state[eventKey]});
    }

    render () {
        return (
            <Tab.Container id="digest" defaultActiveKey="1">
                <Row className="clearfix">
                    <Col md={6}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="1">
                                Shelter
                            </NavItem>
                            <NavItem eventKey="2">
                                British Gas
                            </NavItem>
                            <NavItem eventKey="3">
                                Ipsos MORI
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={6}>
                        <Tab.Content animation>
                            <button className={'dimension-digest__button btn ' + (this.state[1] ? 'active' : '')}
                                onClick={this.handleClick.bind(this, 1)}>Shelter</button>
                            <Tab.Pane eventKey="1" className="dimension-digest__panel">
                                <Collapse in={this.state[1]}>
                                    <div>
                                        <p className="lead">Shelter lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p><a href="#" className="read-more">Read more</a></p>
                                    </div>
                                </Collapse>
                            </Tab.Pane>
                            <button className={'dimension-digest__button btn ' + (this.state[2] ? 'active' : '')}
                                onClick={this.handleClick.bind(this, 2)}>British Gas</button>
                            <Tab.Pane eventKey="2" className="dimension-digest__panel">
                                <Collapse in={this.state[2]}>
                                    <div>
                                        <p className="lead">British Gas ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p><a href="#" className="read-more">Read more</a></p>
                                    </div>
                                </Collapse>
                            </Tab.Pane>
                            <button className={'dimension-digest__button btn ' + (this.state[3] ? 'active' : '')}
                                onClick={this.handleClick.bind(this, 3)}>Ipsos MORI</button>
                            <Tab.Pane eventKey="3" className="dimension-digest__panel">
                                <Collapse in={this.state[3]}>
                                    <div>
                                        <p className="lead">Ipsos MORI ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p><a href="#" className="read-more">Read more</a></p>
                                    </div>
                                </Collapse>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
          </Tab.Container>
        );
    }

}
