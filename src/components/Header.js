import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-orange-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">DishDelights</Link>
          <div className="space-x-6">
            <Link to="/recipes" className="hover:text-orange-200">Recipes</Link>
            <Link to="/favorites" className="hover:text-orange-200">Favorites</Link>
            <Link to="/about" className="hover:text-orange-200">About</Link>
            <Link to="/contact" className="hover:text-orange-200">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
