import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (props) => {
    const { name, review, img, rating } = props.review;
    return (

        <Card className='shadow p-3 mb-5 bg-body rounded border-0' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <h2>{name}</h2>
                <h6>{review}</h6>
                <h5>Rating: {rating}</h5>
            </Card.Body>
        </Card>

    );
};

export default Review;