// import React from 'react';

// export default function Type({ data1 }) {
//   // Filter books based on specific categories
//   const computersBooks = data1.filter(book => book.volumeInfo.categories && book.volumeInfo.categories.includes('Computers'));
//   const juvenileFictionBooks = data1.filter(book => book.volumeInfo.categories && book.volumeInfo.categories.includes('Juvenile Fiction'));

//   return (
//     <div>
//       {/* Render books for "Computers" category */}
//       <div>
//         <h2>Computers</h2>
//         {computersBooks.map((book, index) => (
//           <div key={index}>
//             <a href={book.volumeInfo.previewLink}>
//               <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} />
//             </a>
//             <h3>{book.volumeInfo.title}</h3>
//             <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
//           </div>
//         ))}
//       </div>

//       {/* Render books for "Juvenile Fiction" category */}
//       <div>
//         <h2>Juvenile Fiction</h2>
//         {juvenileFictionBooks.map((book, index) => (
//           <div key={index}>
//             <a href={book.volumeInfo.previewLink}>
//               <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} />
//             </a>
//             <h3>{book.volumeInfo.title}</h3>
//             <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//conditional filtering

// import React from 'react';

// export default function Type({ data1 }) {
//   console.log('Data:', data1);
//   const filterBooksByCategory = (category) => {
//     return data1.filter(book => 
//       book.volumeInfo && 
//       book.volumeInfo.categories && 
//       book.volumeInfo.categories.includes(category)
//     );
//   };
  

//   const renderBooks = (category) => {
//     const books = filterBooksByCategory(category);

//     return (
//       <div key={category}>
//         <h2>{category}</h2>
//         {books.map((book, index) => (
//           <div key={index}>
//             <a href={book.volumeInfo.previewLink}>
//               <img src={book?.volumeInfo?.imageLinks?.smallThumbnail} alt={book.volumeInfo.title} />
//             </a>
//             <h3>{book.volumeInfo.title}</h3>
//             <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p>

//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       {renderBooks('Computers')}
//       {renderBooks('Juvenile Fiction')}
//       {/* Add more categories as needed */}
//     </div>
//   );
// }

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./Type.css"

export default function Type ({data1}) {
  console.log('Received data:', data1);

  const renderBooks = (category) => {
    const books = data1.filter(book => 
      book.volumeInfo && 
      book.volumeInfo.categories && 
      book.volumeInfo.categories.includes(category)
    );

    console.log(`Books in ${category} category:`, books);

    return (
      <div className="books-container" key={category}>
        <h2>{category}</h2>
        {books.map((book, index) => (
          <div className="each-book" key={index}>
            {/* <h5>{book.volumeInfo.title}</h5> */}
            {/* <a href={book.volumeInfo.previewLink}>  */}
            <Link to={`/book/${index}`}>
              <img className="imagen" src={book?.volumeInfo?.imageLinks?.smallThumbnail}/>
            </Link>
            <button onClick={() => window.location.href = `/bookviewer/${book.id}`}>Read me</button>
            {/* </a> */}
            {/* <p>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'N/A'}</p> */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='titles'>
      {renderBooks('Education')}
      {renderBooks('Fiction')}
      {renderBooks('Cooking')}
    </div>
  );
}

