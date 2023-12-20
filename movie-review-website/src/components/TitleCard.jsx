import React, { useRef } from 'react';
import moviePoster from '../image/moviePoster.jpg';

const TitleCard = () => {
  const rating = 4.5;
  const reviewsRef = useRef(null);

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  return (
    <div className="relative m-4 flex items-center mb-8">
      {/* Glass Morphism Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-500 opacity-30 rounded-lg backdrop-filter backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 bg-gray-200 bg-opacity-20 p-10 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img
            src={moviePoster}
            alt="Movie Poster"
            className="w-32 h-40 rounded-md shadow-md"
          />
          <div className="ml-4">
            <h1 className="text-4xl font-extrabold leading-tight text-white">
              Avengers: Endgame (2019)
            </h1>
            <h2 className="text-xl font-semibold text-gray-300">
              User Reviews
            </h2>
          </div>
        </div>
        <div className="mt-4 text-gray-300">
          <p className="text-lg">
            An epic conclusion to the Marvel Cinematic Universe saga, Avengers:
            Endgame brings together our favorite superheroes for an
            unforgettable battle against Thanos.
          </p>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={scrollToReviews}
            className="px-6 py-3 bg-purple-300 bg-opacity-30 text-white rounded-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out hover:bg-opacity-40"
          >
            Explore Reviews
          </button>
          <div className="flex items-center">
            <span className="mr-2 text-xl text-gray-400">Rating:</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 text-yellow-400 ${
                    star < rating
                      ? 'fill-current'
                      : star === rating
                      ? 'fill-half'
                      : 'stroke-current'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l2.371 7.235h7.582l-6 4.765 2.371 7.236L12 16.733l-7.582 4.503 2.371-7.236-6-4.765h7.582z"
                  ></path>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div ref={reviewsRef}></div>
    </div>
  );
};

export default TitleCard;
