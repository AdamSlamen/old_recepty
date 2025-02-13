import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
      <div className="text-sm text-gray-600 mb-2">
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Prep Time: {recipe.prepTime}</p>
        <p>Total Time: {recipe.cookTime}</p>
      </div>
      <div className="mt-4">
        <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded">
          {recipe.category}
        </span>
      </div>
    </div>
  );
}

export default RecipeCard;
