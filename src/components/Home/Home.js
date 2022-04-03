import React from 'react';
import './Home.css'
import { Container } from 'react-bootstrap';
import macbook from '../../images/macbook.png'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();
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

            <div>
                <h1>Reviews</h1>
                <div className='reviews-container mt-4'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div className='mb-5'>
                <Link className='text-decoration-none border p-2 text-white btn btn-primary ' to="/reviews">See All Reviews</Link>
            </div>
        </Container >
    );
};

export default Home;