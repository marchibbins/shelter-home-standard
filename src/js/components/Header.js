import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            expanded: false
        };
    }

    handleNavbar (expanded) {
        this.setState({expanded: expanded});
    }

    closeNavbar () {
        this.setState({expanded: false});
    }

    render () {
        return (
            <Navbar expanded={this.state.expanded} onToggle={this.handleNavbar.bind(this)}
                fixedTop={true} inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" onClick={this.closeNavbar.bind(this)}>
                            <img alt="Home standard" src="/dist/img/logo.jpg"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/affordability">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                Affordability</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/decency">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                Decency</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/neighbourhood">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                Neighbourhood</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/security">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                Security</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/stability">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                Stability</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
