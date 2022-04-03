import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="mx-auto">
                    <Nav.Link className='text-black' href="#home">HOME</Nav.Link>
                    <Nav.Link className='text-black ms-5' href="#reviews">REVIEWS</Nav.Link>
                    <Nav.Link className='text-black ms-5' href="#dashboard">DASHBOARD</Nav.Link>
                    <Nav.Link className='text-black ms-5' href="#blogs">BLOGS</Nav.Link>
                    <Nav.Link className='text-black ms-5' href="#about">ABOUT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;