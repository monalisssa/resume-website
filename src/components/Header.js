import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "../static/logo.png"
const Header = () => {
    return (
        <Navbar data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width={150}/>
                </Navbar.Brand>
                <Nav className="mb-auto d-flex gap-4">
                    <Nav.Link href="#main">Main</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about-me">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;