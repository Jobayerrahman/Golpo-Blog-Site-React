import '../../assets/css/navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Navigationlang from './Navigationlang';
import Navigationsearch from './Navigationsearch';
import Navigationtheme from './Navigationtheme';
import Navigationuser from './Navigationuser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSquarePlus  } from '@fortawesome/free-solid-svg-icons';

export default function Navigation(){
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
                                    <NavDropdown.Item className='navdropdown-item'><NavLink className='navigationLink-item'  to="/History">History</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/Nature" className='navigationLink-item'>Nature</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/Technology" className='navigationLink-item'>Technology</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/Health" className='navigationLink-item'>Health</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item><NavLink to="/Entertainment" className='navigationLink-item'>Entertainment</NavLink></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link><NavLink className='navigation-link' to="/Posts">
                                    {/* <FontAwesomeIcon className='' icon={faSquarePlus} />     */}
                                    Post
                                </NavLink></Nav.Link>
                                <Nav.Link><NavLink className='navigation-link' to="/About">About</NavLink></Nav.Link>
                                <Nav.Link><NavLink className='navigation-link' to="/Contact">Contact</NavLink></Nav.Link>
                            </Nav>
                            <div className='navigation-icon-wrapper'>
                                <Navigationtheme/>
                                <Navigationsearch/>
                                <Navigationlang/>
                                <Navigationuser/>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}