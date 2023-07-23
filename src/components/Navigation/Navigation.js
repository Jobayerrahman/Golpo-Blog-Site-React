import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMagnifyingGlass,faGlobe,faMoon  } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
export default function Navigation(){
    const [toggle, setToggle] = useState(false)

    const handleSearch = () =>{
        toggle? setToggle(false): setToggle(true)
    }
    return(
            <div className='navigation-wrapper'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div><NavLink className='navigation-header' aria-current="page" to="/" >Golpo</NavLink></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navigation-menu">
                                <Nav.Link><NavLink aria-current="page" to="/" className='navigation-link'>Home</NavLink></Nav.Link>
                                <NavDropdown title="Catagories" className='navigation-link' id="basic-nav-dropdown">
                                    <NavDropdown.Item className='navdropdown-item'><NavLink className='navigation-link'  to="/History">History</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink  to="/Nature" className='navigation-link'>Nature</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink  to="/Technology" className='navigation-link'>Technology</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink  to="/Health" className='navigation-link'>Health</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink  to="/Entertainment" className='navigation-link'>Entertainment</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link><NavLink className='navigation-link' to="/Quotes">Quotes</NavLink></Nav.Link>
                                <Nav.Link><NavLink className='navigation-link' to="/About">About</NavLink></Nav.Link>
                                <Nav.Link><NavLink className='navigation-link' to="/Contact">Contact</NavLink></Nav.Link>
                            </Nav>
                            {toggle ? 
                                <Form>
                                    <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    />
                                </Form> : <div></div>
                            }
                            <div className='navigation-icon-wrapper'>
                                <FontAwesomeIcon onClick={handleSearch} className='navigation-icon' icon={faMagnifyingGlass} />
                                <FontAwesomeIcon className='navigation-icon' icon={faGlobe} />
                                <FontAwesomeIcon className='navigation-icon' icon={faMoon} />
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}