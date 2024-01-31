import React from 'react';
import "./Books.css";

export default function Books({data}) {
    return (
      <div className="books-container">
        {data.map((book, index) => (
          <div className="each-book" key={index}>
            <a href={book.volumeInfo.previewLink}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </a>
            <h3>{book.volumeInfo.title}</h3>
          
            <button onClick={() => window.location.href = `/bookviewer/${book.id}`}>Read me</button>
            {/* <p>Authors: {book.volumeInfo.authors.join(', ')}</p>*/}
          </div>
        ))}
      </div>
    );
  }