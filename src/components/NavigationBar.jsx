import React, { Component } from 'react';

import { Navbar, Nav, Container } from "react-bootstrap";

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="navbar-brand">
                    <Container>
                        <Navbar.Brand href="#home">Primes Pronounce</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#Register">Register</Nav.Link>
                            <Nav.Link href="#Login">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;