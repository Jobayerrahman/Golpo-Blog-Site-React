import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Navigation(){
    return(
            <div className='navigation-wrapper'>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className='navigation-header'>Golpo</div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navigation-menu">
                                <Nav.Link><NavLink aria-current="page" to="/" className='navigation-link'>Home</NavLink></Nav.Link>
                                <NavDropdown title="Catagories" className='navigation-link' id="basic-nav-dropdown">
                                    <NavDropdown.Item><NavLink className='navigation-link'  to="/Catagory">History</NavLink></NavDropdown.Item>
                                    <NavLink  to="/Catagory" className='navigation-link'><NavDropdown.Item>Nature</NavDropdown.Item></NavLink>
                                    <NavLink  to="/Catagory" className='navigation-link'><NavDropdown.Item>Technology</NavDropdown.Item></NavLink>
                                    <NavLink  to="/Catagory" className='navigation-link'><NavDropdown.Item>Health</NavDropdown.Item></NavLink>
                                    <NavLink  to="/Catagory" className='navigation-link'><NavDropdown.Item>Entertainment</NavDropdown.Item></NavLink>
                                </NavDropdown>
                                <Nav.Link className='navigation-link' >About</Nav.Link>
                                <Nav.Link className='navigation-link' >Contact</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}