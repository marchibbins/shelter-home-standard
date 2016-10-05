import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Footer extends React.Component {

    render () {
        return (
            <footer className="footer full-width">
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
                    <LinkContainer to="/security">
                        <NavItem className="navitem--large text-uppercase">Security</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/stability">
                        <NavItem className="navitem--large text-uppercase">Stability</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/decency">
                        <NavItem className="navitem--large text-uppercase">Decenct conditions</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/neighbourhood">
                        <NavItem className="navitem--large text-uppercase">Neighbourhood</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/">
                        <NavItem className="text-uppercase">Executive summary</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">Campbell Ross</span></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">British Gas</span></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem><span className="text-uppercase">Foreword</span> by <span className="text-uppercase">IPSOS MORI</span></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem className="text-uppercase">Shelter and British Gas</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem className="text-uppercase">Contributors</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem className="text-uppercase">Contact</NavItem>
                    </LinkContainer>
                </Nav>
            </footer>
        );
    }

}
