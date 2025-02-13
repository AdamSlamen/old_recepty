import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Recipes from './views/Recipes';
import Favorites from './views/Favorites';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === recipe.id)
        ? prevFavorites.filter((fav) => fav.id !== recipe.id)
        : [...prevFavorites, recipe]
    );
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes toggleFavorite={toggleFavorite} favorites={favorites} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

