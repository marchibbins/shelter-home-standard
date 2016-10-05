import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Footer extends React.Component {

    render () {
        return (
            <footer className="footer full-width">
                <Nav bsStyle="pills" stacked activeKey={1}>
                    <LinkContainer to="/">
                        <NavItem className="navitem--primary">The Living Home Standard</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/great-home-debate">
                        <NavItem className="navitem--secondary">The Great Home Debate</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/affordability">
                        <NavItem className="navitem--large">Affordability</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/security">
                        <NavItem className="navitem--large">Security</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/stability">
                        <NavItem className="navitem--large">Stability</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/decency">
                        <NavItem className="navitem--large">Decenct conditions</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/neighbourhood">
                        <NavItem className="navitem--large">Neighbourhood</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/">
                        <NavItem>Executive summary</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>Foreword by Campbell Ross</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>Foreword by British Gas</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>Foreword by IPSOS MORI</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>Shelter and British Gas</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>Contributors</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <NavItem>Contact</NavItem>
                    </LinkContainer>
                </Nav>
            </footer>
        );
    }

}
