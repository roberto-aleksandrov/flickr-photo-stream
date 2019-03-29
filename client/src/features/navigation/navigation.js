
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Collapse,
    NavItem,
    NavLink,
    NavbarToggler } from 'reactstrap';
import './navigation.css';

class Navigation extends React.Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
          });
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Flickr Photos</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Photos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/users">Users</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;