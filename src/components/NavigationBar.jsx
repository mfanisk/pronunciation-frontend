import React, { Component } from 'react';

import { Navbar, Nav, Container } from "react-bootstrap";

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="navbar-brand">
                    <Container>
                        <Navbar.Brand href="/">Primes Pronounce</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/sign-in">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;