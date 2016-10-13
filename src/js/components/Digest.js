import React from 'react';
import { Link } from 'react-router';
import { Col, Collapse, Nav, NavItem, Row, Tab } from 'react-bootstrap';

import { URLS } from '../config';

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
                                        <p className="lead">&ldquo;Developed by the public for the public, this ground-breaking piece of work amplifies Shelter’s vision of a home for everyone&rdquo;</p>
                                        <p>We wanted to mark our 50th anniversary by reconnecting society with a united vision that we need to strive for – something more than a roof over our heads. Because while a roof is a necessity, it’s far from enough.</p>
                                        <p>With the Living Wage as inspiration, we wanted something that would raise the bar for homes in this country. We’ve been able to take a holistic look at home, and provide an ambitious but realistic definition of what the British public believe everyone needs from a home in order to live rather than just get by.</p>
                                        <p><Link to={`${URLS.baseUrl}/foreword-campbell-ross`} className="read-more">Read more</Link></p>
                                    </div>
                                </Collapse>
                            </Tab.Pane>
                            <button className={'dimension-digest__button btn ' + (this.state[2] ? 'active' : '')}
                                onClick={this.handleClick.bind(this, 2)}>British Gas</button>
                            <Tab.Pane eventKey="2" className="dimension-digest__panel">
                                <Collapse in={this.state[2]}>
                                    <div>
                                        <p className="lead">&ldquo;We share a belief with Shelter that we should all have a safe, decent and warm place to call home&rdquo;</p>
                                        <p>Working together for four years, we’ve raised over £1million and helped to improve living standards for thousands of families.</p>
                                        <p>Home is central to our work as it’s vital to our customers. We need to do more to improve the standard of homes for everyone. We saw the development of the Living Home Standard as a powerful opportunity to do just this.</p>
                                        <p>As well as building on our partnership with Shelter, we’ve been able to learn more from our customers about what’s important to them in a home and together produce something that has the potential to help us all have a safe, decent and warm place to call home.</p>
                                        <p><Link to={`${URLS.baseUrl}/foreword-british-gas`} className="read-more">Read more</Link></p>
                                    </div>
                                </Collapse>
                            </Tab.Pane>
                            <button className={'dimension-digest__button btn ' + (this.state[3] ? 'active' : '')}
                                onClick={this.handleClick.bind(this, 3)}>Ipsos MORI</button>
                            <Tab.Pane eventKey="3" className="dimension-digest__panel">
                                <Collapse in={this.state[3]}>
                                    <div>
                                        <p className="lead">&ldquo;We studied existing standards, literature and evidence, and consulted with experts. However, first and foremost creating the Living Home Standard was about the public.&rdquo;</p>
                                        <p>Defining a home that provides more than the bare minimum, that allows people to flourish, meant bringing in expertise from right across Ipsos MORI. Initial research into different aspects of housing uncovered four key themes: Affordability, Decent conditions, Space and Stability.</p>
                                        <p>These themes – along with an additional theme of Neighbourhood which arose from the conversations we had with the public – were explored in discussion groups, workshops an online discussion community and quantitative research, to establish a list of 39 attributes the public believes are needed from a home to support an acceptable standard of physical, mental and social wellbeing.</p>
                                        <p>Some attributes are classed as essentials – conditions that every home must meet in order to meet the Living Home Standard. Others are classed as tradables – features of a home which many people believed were important, but not universally applicable to or equally desired by everyone. A household can be measured against these 39 attributes to assess whether or not it meets the Living Home Standard.</p>
                                        <p><Link to={`${URLS.baseUrl}/foreword-ipsos-mori`} className="read-more">Read more</Link></p>
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
