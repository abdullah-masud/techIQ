import React from 'react';
import './Home.css'
import { Container } from 'react-bootstrap';
import macbook from '../../images/macbook.png'

const Home = () => {
    return (
        <Container>
            <div className='d-flex align-items-center justify-content-between my-5 hero-container'>
                <div className=' text-start'>
                    <h1>MacBook Air</h1>
                    <h1>Power. It's in the Air</h1>
                    <h6 className='mt-4 text-start mx-auto'>Our thinnest, lightest notebook, completely transformed by the Apple M1 chip
                        The longest battery life ever in a MacBook Air.
                    </h6>
                </div>
                <div className='hero-image'>
                    <img width="600px" src={macbook} alt="" />
                </div>
            </div>
        </Container >
    );
};

export default Home;