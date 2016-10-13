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
                            <img alt="Home standard" width="200" height="80"
                                src="/livinghomestandard/assets/img/living-home-standard.svg"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse className="navbar-drawer">
                    <Nav>
                        <LinkContainer to="/">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase navitem--primary">
                                    The Living Home Standard</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/great-home-debate">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase navitem--secondary">
                                    The Great Home Debate</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/affordability">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Affordability</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/space">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Space</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/stability">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Stability</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/decent">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Decent conditions</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/neighbourhood">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Neighbourhood</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/executive-summary">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Executive summary</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/foreword-campbell-ross">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                <span className="text-uppercase">Foreword</span> by <span className="text-uppercase">Campbell Ross</span>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/foreword-british-gas">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                <span className="text-uppercase">Foreword</span> by <span className="text-uppercase">British Gas</span>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/foreword-ipsos-mori">
                            <NavItem onClick={this.closeNavbar.bind(this)}>
                                <span className="text-uppercase">Foreword</span> by <span className="text-uppercase">Ipsos MORI</span>
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/shelter-british-gas">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Shelter and British Gas</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contributors">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Contributors</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <NavItem onClick={this.closeNavbar.bind(this)}
                                className="text-uppercase">Contact</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}
