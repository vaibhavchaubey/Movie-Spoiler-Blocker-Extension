import React from 'react';
import MovieReviews from './components/MovieReviews';
import reviews from './data/reviews';

function App() {
  return (
    <div className="App">
      <MovieReviews reviews={reviews} />
    </div>
  );
}

export default App;
