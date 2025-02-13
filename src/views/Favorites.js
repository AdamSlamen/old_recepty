import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h1>Favorite Recipes</h1>
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
          </div>
        ))
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};

export default Favorites;
