import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import RecipeDetail from '../components/RecipeDetail';

function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === '' || recipe.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(recipes.map(recipe => recipe.category))];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Our Recipes</h2>
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)} className="cursor-pointer">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <RecipeDetail 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
}

export default Recipes;
