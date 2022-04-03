import './Reviews.css'
import Review from '../Review/Review';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2 className='my-4'>Reviews</h2>
            <div className='reviews-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;