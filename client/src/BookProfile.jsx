import React, { useState } from 'react';
import AddToFavoritesButton from "./AddToFavoritesButton.jsx";

// "9789029568913"
const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  return (
    <div>
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