// Example UserProfile component
import React, { useContext } from 'react';
import { authContext } from './context/AuthenticationProvider';
import "./UserProfile.css";


const UserProfile = () => {
  const auth = useContext(authContext);
console.log(auth.favoriteBooks)
  return (
    <div>
      <br />
      <h2>Favorite Books</h2>
      <ul className="books-container">
        {auth.favoriteBooks.map((book, index) => (
          <li className="book-list" key={index}>
            {book.volumeInfo.title}
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
