import React from 'react';
import moviePoster from '../image/moviePoster.jpg';

const TitleCard = () => {
  return (
    <div className="m-4 flex items-center mb-8">
      <div className="bg-white p-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-md bg-opacity-40">
        <div className="flex items-center">
          <img
            src={moviePoster}
            alt="Movie Poster"
            className="w-32 h-40 rounded-md"
          />
          <div className="ml-4">
            <h1 className="text-4xl font-semibold text-white leading-tight">
              Avengers: Endgame (2019)
            </h1>
            <h2 className="text-xl font-semibold text-gray-200">
              User Reviews
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
