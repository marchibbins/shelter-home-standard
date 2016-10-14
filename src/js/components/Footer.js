import React from 'react';
import { Col, Grid, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { URLS } from '../config';

export default class Footer extends React.Component {

    render () {
        return (
            <footer>
                <div className="footer">
                    <Grid>
                        <Col md={6}>
                            <Nav bsStyle="pills" stacked>
                                <LinkContainer to={`${URLS.baseUrl}`}>
                                    <NavItem className="navitem--primary text-uppercase">The Living Home Standard</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/great-home-debate`}>
                                    <NavItem className="navitem--secondary text-uppercase">The Great Home Debate</NavItem>
                                </LinkContainer>

                                <LinkContainer to={`${URLS.baseUrl}/affordability`}>
                                    <NavItem className="navitem--large text-uppercase">Affordability</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/space`}>
                                    <NavItem className="navitem--large text-uppercase">Space</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/stability`}>
                                    <NavItem className="navitem--large text-uppercase">Stability</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/decent`}>
                                    <NavItem className="navitem--large text-uppercase">Decent conditions</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/neighbourhood`}>
                                    <NavItem className="navitem--large text-uppercase">Neighbourhood</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Col>
                        <Col md={6}>
                            <Nav bsStyle="pills" stacked>
                                <LinkContainer to={`${URLS.baseUrl}/executive-summary`}>
                                    <NavItem className="text-uppercase">Executive summary</NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/foreword-campbell-robb`}>
                                    <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">Campbell Robb</span></NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/foreword-british-gas`}>
                                    <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">British Gas</span></NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/foreword-ipsos-mori`}>
                                    <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">IPSOS MORI</span></NavItem>
                                </LinkContainer>
                                <LinkContainer to={`${URLS.baseUrl}/contact`}>
                                    <NavItem className="text-uppercase">Contact</NavItem>
                                </LinkContainer>
                            </Nav>
                        </Col>
                    </Grid>
                </div>
                <div className="logo-footer">
                    <Grid>
                        <ul className="list-unstyled logo-footer__logos">
                            <li className="logo logo--shelter"><img src="/livinghomestandard/assets/img/footer-logo-shelter.jpg" alt="Shelter"/></li>
                            <li className="logo logo--british-gas"><img src="/livinghomestandard/assets/img/footer-logo-britishgas.jpg" alt="British Gas"/></li>
                            <li className="logo logo--ipsos-mori"><img src="/livinghomestandard/assets/img/footer-logo-ipsosmori.jpg" alt="Ipsos MORI"/></li>
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
