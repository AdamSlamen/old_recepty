import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to DishDelights</h1>
      <p className="text-xl mb-8">
        Discover a world of delicious recipes and join our community of food lovers.
        From traditional classics to modern innovations, find the perfect dish for any occasion.
      </p>
      <Link 
        to="/recipes" 
        className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
      >
        Explore Recipes
      </Link>
    </div>
  );
}

export default Home;
