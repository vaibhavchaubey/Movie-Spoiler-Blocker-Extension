import React from 'react';

const ReviewCard = ({ title, description, username, date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="review m-4 border border-gray-300 bg-white p-8 rounded-lg shadow-lg shadow-blue-500/40 hover:shadow-blue-200">
      <h2 className="title text-2xl font-bold mb-2">{title}</h2>
      <div className="flex items-center text-blue-500 mb-2">
        <p className="mr-2">{username}</p>
        <p className="text-gray-500">{formattedDate}</p>
      </div>
      <p className="description text-sm md:text-base">{description}</p>
    </div>
  );
};

export default ReviewCard;
