import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeDetail from '../components/RecipeDetail';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (recipe) => {
    const newFavorites = [...favorites, recipe];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (recipeId) => {
    const newFavorites = favorites.filter(recipe => recipe.id !== recipeId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">You haven't saved any favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(recipe => (
            <div key={recipe.id} className="relative">
              <div onClick={() => setSelectedRecipe(recipe)} className="cursor-pointer">
                <RecipeCard recipe={recipe} />
              </div>
              <button
                onClick={() => removeFromFavorites(recipe.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
}

export default Favorites;
