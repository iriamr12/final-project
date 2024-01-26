import React from "react";
import './Books.css';


export default function Books({ data }) {
  return (
    <div className="book-list">
      {data.map((book, index) => (
        <div key={index} className="books">
        <h3 className="titleName">{book.volumeInfo.title}</h3>
        <p className="title">TITLE</p>
          <p>{book.volumeInfo.authors.join(", ")}</p>
          <p className="authors">AUTHORS</p>
          
          <a href={book.volumeInfo.previewLink}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} />
          </a>
          
        </div>
      ))}
    </div>
  );
}

