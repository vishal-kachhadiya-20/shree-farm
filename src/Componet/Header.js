import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Images/logoback.png"
export default function Header() {
    return (
        <Navbar expand="lg" className="header-bg" style={{ position: "fixed", width: "100%", zIndex: 999999999 }}>
            <Container>
                <Navbar.Brand href="#home">
                    <a className='anchor' href="#home">
                        <img className='logo' src={logo} alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <a className='anchor' href="#propertytype">PropertyType</a>
                        <a className='anchor' href="#farmhouse">FarmHouse</a>
                        <a className='anchor' href="#contact">Contact</a>
                        <a className='anchor' href="#about">AboutUs</a>
                        <a className='anchor' href="#review">Review</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
