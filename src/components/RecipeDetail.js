import React from 'react';

function RecipeDetail({ recipe, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
          </div>
          <div>
            <h3 className="font-bold">Nutrition</h3>
            <p>Calories: {recipe.nutrition.calories}</p>
            <p>Protein: {recipe.nutrition.protein}</p>
            <p>Carbs: {recipe.nutrition.carbohydrates}</p>
            <p>Fat: {recipe.nutrition.fat}</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Ingredients</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Instructions</h3>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
        <button
          onClick={onClose}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
