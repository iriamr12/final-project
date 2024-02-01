import React, { useState, useEffect, useRef } from 'react';

import AddToFavoritesButton from "./AddToFavoritesButton.jsx";

import { useLocation } from "react-router-dom";

import "./BookProfile.css";
const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
const location = useLocation()
const book=location.state?.book
  // console.log(`book${JSON.stringify(book)}`)
  const canvasRef = useRef();
  // Initialize loaded state as false
  const [loaded, setLoaded] = useState(false);

  // Create alert message if the book is not found in the Google Database
  function alertNotFound() {
    alert("Could not embed the book!");
  }

  // Add a Google Books script tag and event listener if the tag has loaded
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.google.com/books/jsapi.js';
    scriptTag.id = "google-script";

    scriptTag.onload = () => {
      window.google.books.load();
      window.google.books.setOnLoadCallback(() => setLoaded(true));
    };

    document.body.appendChild(scriptTag);

    return () => {
      // Cleanup: Remove the script tag if the component is unmounted
      document.body.removeChild(scriptTag);
    };
  }, []);

  // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
  useEffect(() => {
    if (loaded) {
      const viewer = new window.google.books.DefaultViewer(canvasRef.current);
      viewer.load(book.id, alertNotFound);
    }
  }, [loaded, book.id]);

  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  };

  return (
    <div>
      {favoriteBooks.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
     <div>
      {loaded ? (
        <div>
          <div ref={canvasRef} id="viewerCanvas"></div>
        </div>
      ) : (
        'Script not loaded'
      )}
    </div>
      <AddToFavoritesButton
        book={{ title: 'Sample Book' }}
        onAddToFavorites={handleAddToFavorites}
      />
    </div>
  );
};

export default App;