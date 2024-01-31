import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Books.css";

export default function Books({ data }) {
  const navigate = useNavigate();

  const toComponentB = (book) => {
    navigate('/bookprofile', { state: { book } });
  }
  return (
    <div className="books-container">
      {data.map((book, index) => (
        <div className="each-book" key={index}>
          <a href={book.volumeInfo.previewLink}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} />
          </a>
          <h3>{book.volumeInfo.title}</h3>

          {/* <button onClick={() => window.location.href = `/bookprofile/${book.id}`}>Read me</button> */}

          <Link to={{ pathname: "/bookprofile", state: { book } }}>
            Read me
          </Link>
          <a
            onClick={() => toComponentB(book)}
          >Component B
          </a>
          {/* <p>Authors: {book.volumeInfo.authors.join(', ')}</p>*/}
        </div>
      ))}
    </div>
  );
}