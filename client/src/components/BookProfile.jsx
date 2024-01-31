import React, { useState } from 'react';
import AddToFavoritesButton from "./AddToFavoritesButton.jsx";
import { BookViewer } from './BookViewer.jsx';
import { useLocation } from "react-router-dom";

// import "./BookViewer.css";
const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
const location = useLocation()
const book=location.state?.book
  // console.log(`book${JSON.stringify(book)}`)

  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  return (
    <div>
      {favoriteBooks.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
      <BookViewer
        bookId={book.id}
      />
      <AddToFavoritesButton
        book={{ title: 'Sample Book' }}
        onAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
};

export default App;