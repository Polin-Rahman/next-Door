import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './MenuBar.css';

const MenuBar = () => {

    const { user, logOut } = useAuth();

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

                        {
                            user.email && <Navbar.Text>
                                Hello! {user.displayName}
                            </Navbar.Text>
                        }

                        {
                            user.email ?
                                <button onClick={logOut}
                                    className="btn btn-light ms-2"
                                >Log Out</button>
                                :
                                <Nav.Link><NavLink className="custom-nav-text" to="/login">LogIn</NavLink></Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;