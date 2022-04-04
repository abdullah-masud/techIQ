import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (props) => {
    const { name, review, img, rating } = props.review;
    return (

        <Card className='shadow mb-5 bg-body rounded border-0 ' style={{ width: '18rem' }}>
            <Card.Img style={{ borderRadius: "50%", width: "150px" }} className=" mx-auto mt-3" variant="top" src={img} />
            <Card.Body>
                <h2 style={{ color: "#0c5348" }}>{name}</h2>
                <p className='m-0 my-3'>{review}</p>
                <h6><small>Rating: {rating}</small></h6>
            </Card.Body>

        </Card>


    );
};

export default Review;