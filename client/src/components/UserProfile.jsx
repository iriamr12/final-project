// Example UserProfile component
import React, { useContext } from 'react';
import { authContext } from './context/AuthenticationProvider';

const UserProfile = () => {
  const auth = useContext(authContext);
console.log(auth.favoriteBooks)
  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {auth.favoriteBooks.map((book, index) => (
          <li key={index}>
            {book.volumeInfo.title}
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;