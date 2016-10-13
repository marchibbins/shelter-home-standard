import React from 'react';
import { Col, Grid, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Footer extends React.Component {

    render () {
        return (
            <footer>
                <div className="footer">
                    <Grid>
                        <Col md={6}>
                            <Nav bsStyle="pills" stacked>
                                <LinkContainer to="/">
                                    <NavItem className="navitem--primary text-uppercase">The Living Home Standard</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/great-home-debate">
                                    <NavItem className="navitem--secondary text-uppercase">The Great Home Debate</NavItem>
                                </LinkContainer>

                                <LinkContainer to="/affordability">
                                    <NavItem className="navitem--large text-uppercase">Affordability</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/space">
                                    <NavItem className="navitem--large text-uppercase">Space</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/stability">
                                    <NavItem className="navitem--large text-uppercase">Stability</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/decent">
                                    <NavItem className="navitem--large text-uppercase">Decent conditions</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/neighbourhood">
                                    <NavItem className="navitem--large text-uppercase">Neighbourhood</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Col>
                        <Col md={6}>
                            <Nav bsStyle="pills" stacked>
                                <LinkContainer to="/executive-summary">
                                    <NavItem className="text-uppercase">Executive summary</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/foreword-campbell-ross">
                                    <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">Campbell Ross</span></NavItem>
                                </LinkContainer>
                                <LinkContainer to="/foreword-british-gas">
                                    <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">British Gas</span></NavItem>
                                </LinkContainer>
                                <LinkContainer to="/foreword-ipsos-mori">
                                    <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">IPSOS MORI</span></NavItem>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <NavItem className="text-uppercase">Contact</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Grid>
                </div>
                <div className="logo-footer">
                    <Grid>
                        <ul className="list-unstyled logo-footer__logos">
                            <li className="logo"><img src="/livinghomestandard/assets/img/footer-logo-shelter.jpg" alt="Shelter"/></li>
                            <li className="logo"><img src="/livinghomestandard/assets/img/footer-logo-ipsosmori.jpg" alt="Ipsos MORI"/></li>
                            <li className="logo"><img src="/livinghomestandard/assets/img/footer-logo-britishgas.jpg" alt="British Gas"/></li>
                        </ul>
                        <ul className="list-unstyled logo-footer__info">
                            <li>
                                Charity Number 263710 (England &amp; Wales); SC002327 (Scotland)<br/>
                                88 Old Street London EC1V 9HU
                            </li>
                        </ul>
                    </Grid>
                </div>
            </footer>
        );
    }

}
