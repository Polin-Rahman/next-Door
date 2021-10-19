import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><span className="fw-bolder fs-2 fst-italic"> <i className="fas fa-user-md"></i> next Door</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link> <NavLink className="custom-nav-text" to="/home">Home</NavLink></Nav.Link>
                        <Nav.Link className="custom-nav-text" as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link><NavLink className="custom-nav-text" to="/pharmacy">Online Pharmacy</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="custom-nav-text" to="/pathology">Pathology</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="custom-nav-text" to="/login">LogIn</NavLink></Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;