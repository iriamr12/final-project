import React from 'react'

export default function Books({ data }) {
    return (
      <div>
        {data.map((book, index) => (
          <div key={index}>
            <a href={book.volumeInfo.previewLink}>
            <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </a>
            <h3>{book.volumeInfo.title}</h3>
            <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  }
  