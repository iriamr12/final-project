import React, { useState } from 'react';
import AddToFavoritesButton from './assets/AddToFavoritesButton'


const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  return (
    <div>
      <h2>My Favorite Books</h2>
      {favoriteBooks.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
      <AddToFavoritesButton
        book={{ title: 'Sample Book' }}
        onAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
};

export default App;
