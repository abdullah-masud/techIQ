import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar className='mt-2' bg="white" variant="light">
            <Container>
                <Nav className="mx-auto d-flex align-items-center">
                    <CustomLink to="/home">HOME</CustomLink>
                    <CustomLink className="ms-5" to="/reviews">REVIEWS</CustomLink>
                    <CustomLink className="ms-5" to="/dashboard">DASHBOARD</CustomLink>
                    <CustomLink className="ms-5" to="/blogs">BLOGS</CustomLink>
                    <CustomLink className="ms-5" to="/about">ABOUT</CustomLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;