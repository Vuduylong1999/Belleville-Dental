import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const ProductRating = ({ productId, onRatingSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [hover, setHover] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await onRatingSubmit({
                productId,
                rating,
                comment,
                date: new Date().toISOString().split('T')[0],
                user: "Anonymous" // In a real app, this would come from user authentication
            });
            
            // Reset form
            setRating(0);
            setComment('');
            setShowForm(false);
        } catch (error) {
            console.error('Error submitting rating:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!showForm) {
        return (
            <button 
                className="btn btn-outline-primary"
                onClick={() => setShowForm(true)}
            >
                Write a Review
            </button>
        );
    }

    return (
        <div className="card shadow-sm p-3 mb-4">
            <h4 className="mb-3">Write Your Review</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FontAwesomeIcon
                                key={star}
                                icon={star <= (hover || rating) ? faStarSolid : faStarRegular}
                                className="text-warning me-1 fs-4"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                            />
                        ))}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Your Review</label>
                    <textarea
                        className="form-control"
                        id="comment"
                        rows="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>

                <div className="d-flex gap-2">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={isSubmitting || !rating}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-secondary"
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductRating;
