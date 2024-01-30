// import React, { useState } from 'react';
// import CommentBox from "./CommentBox.jsx";
// import AddToFavoritesButton from "./AddToFavoritesButton.jsx";
// import { BookViewer } from './BookViewer.jsx';
// import { BookViewer } from './BookViewer.css';

// const App = () => {
//   const [favoriteBooks, setFavoriteBooks] = useState([]);

//   const handleAddToFavorites = (book) => {
//     setFavoriteBooks([...favoriteBooks, book]);
//   };

//   return (
//     <div>
//       {favoriteBooks.map((book, index) => (
//         <div key={index}>{book.title}</div>
//       ))}
//       <AddToFavoritesButton
//         book={{ title: 'Sample Book' }}
//         onAddToFavorites={handleAddToFavorites}
//       />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import CommentBox from './CommentBox.jsx';
import AddToFavoritesButton from './AddToFavoritesButton.jsx';
import { BookViewer } from './BookViewer.jsx';

const App = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  const handleAddToFavorites = (newBook) => {
    setFavoriteBooks([...favoriteBooks, newBook]);
  };

  return (
    <div>
      {favoriteBooks.map((book, index) => (
        <div key={index}>{book.title}</div>
      ))}
      <AddToFavoritesButton
        onAddToFavorite={newBook => handleAddToFavorites(newBook)}
      />
    </div>
  );
};

export default App;