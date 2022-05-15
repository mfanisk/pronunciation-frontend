import React, { Component } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar(props) {

    let navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(props.LOGGED_IN);
    function logout(e) {
        setLoggedIn(false);
        sessionStorage.clear();
        navigate("/")
    }

    if(loggedIn){
        return (
            <div>
                <Navbar bg="dark" variant="dark" className="navbar-brand">
                    <Container>
                        <Navbar.Brand href="/">Primes Pronounce</Navbar.Brand>
                        <Nav>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        ); 
    }
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

export default NavBar;