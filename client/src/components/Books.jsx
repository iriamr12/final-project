import React from "react";
import "./Books.css";

export default function Books({ data }) {
  return (
    <div className="book-list">
      {data.map((book, index) => (
          <div key={index} className="books">
            <h3 className="titleName">{book.volumeInfo.title}</h3>
            <p className="title">TITLE</p>
            {/*TODO this line needs some work, as it emits errors*/}
            {/*<p>{book.volumeInfo.authors.join(", ")}</p>*/}
            <p className="authors">AUTHORS</p>

            <a href={book.volumeInfo.previewLink}>
              <img className="image" src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </a>
            {/*book.volumeInfo.industryIdentifiers[0].identifier*/}
            <button onClick={() => window.location.href = `/bookviewer?isbn=9781291512472`}>embedded viewer</button>
          </div>
      ))}
    </div>
  );
}
// "9781291512472"
// import React from 'react'

// export default function Books({ data }) {
//     return (
//       <div>
//         {data.map((book, index) => (
//           <div key={index}>
//             <a href={book.volumeInfo.previewLink}>
//             <img src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
//             </a>
//             <h3>{book.volumeInfo.title}</h3>
//             <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
