import React, { useState } from 'react';

const AddToFavoritesButton = ({ book, onAddToFavorites }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToFavorites = () => {
    setIsAdded(true);
    onAddToFavorites(book);
  };

  return (
    <button
      onClick={handleAddToFavorites}
      disabled={isAdded}
    >
      {isAdded ? 'Added to Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToFavoritesButton;