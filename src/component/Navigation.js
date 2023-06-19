import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Navigation(){
    return(
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='navigation-container'>
                    <div className='navigation-header'>Golpo</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navigation-menu">
                            <Nav.Link className='navigation-link'>Home</Nav.Link>
                            <NavDropdown title="Catagories" className='navigation-link' id="basic-nav-dropdown">
                                <NavDropdown.Item className='navigation-link' >History</NavDropdown.Item>
                                <NavDropdown.Item className='navigation-link' >Nature</NavDropdown.Item>
                                <NavDropdown.Item className='navigation-link' >Technology</NavDropdown.Item>
                                <NavDropdown.Item className='navigation-link' >Health</NavDropdown.Item>
                                <NavDropdown.Item className='navigation-link' >Entertainment</NavDropdown.Item>
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
    )
}