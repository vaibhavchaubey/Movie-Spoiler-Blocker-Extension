import React from 'react';
import ReviewCard from './ReviewCard';
import TitleCard from './TitleCard';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="container mx-auto">
      <div id="movie-reviews"> {/* Add the id here */}
        <TitleCard />

        <div className="reviews">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieReviews;
