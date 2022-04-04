import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar className='mt-2' bg="white" variant="light">
            <Container>
                <Nav className="mx-auto d-flex align-items-center">
                    <CustomLink to="/home">HOME</CustomLink>
                    <CustomLink className="ms-5 nav-link" to="/reviews">REVIEWS</CustomLink>
                    <CustomLink className="ms-5 nav-link" to="/dashboard">DASHBOARD</CustomLink>
                    <CustomLink className="ms-5 nav-link" to="/blogs">BLOGS</CustomLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;