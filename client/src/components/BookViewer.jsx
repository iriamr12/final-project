// import {useEffect, useRef, useState} from "react";
// import "./BookViewer.css"
// import {useSearchParams} from "react-router-dom";
// import { useParams } from 'react-router-dom'
// export const BookViewer = () => {
//     const [searchParams, setSearchParams] = useSearchParams();

//     // const ISBN_num = "9789029568913"
//     // const ISBN_num = searchParams.get('isbn')
//     const {isbn} = useParams()
//     console.log(isbn);
//     const canvasRef = useRef()

//     // Initialize loaded state as false
//     const [loaded, setLoaded] = useState(false);

//     // Create alert message if book not found in Google Database
//     function alertNotFound() {
//         alert("could not embed the book!");
//     }

//     // Add a Google Books script tag and event listener if the tag has loaded
//     useEffect(() => {
//         const scriptTag = document.createElement('script')
//         scriptTag.src = 'https://www.google.com/books/jsapi.js'
//         scriptTag.addEventListener('load', () => setLoaded(true))
//         scriptTag.id = "google-script"
//         document.body.appendChild(scriptTag);
//     }, []);
//     // Once Google Books has loaded, then create new instance of Default viewer and load book's information to viewer
//     useEffect(() => {
//         if (!loaded) {
//             return
//         }
//         else {
//             if (window.viewer) {
//                 let viewer = new window.google.books.DefaultViewer
//                 (canvasRef.current);
//                 viewer.load('ISBN:' + isbn, alertNotFound);
//             } else {
//                 window.google.books.load()
//                 window.google.books.setOnLoadCallback(() => {
//                     let viewer = new window.google.books.DefaultViewer
//                     (canvasRef.current);
//                     window.viewer = viewer
//                     viewer.load('ISBN:' + isbn, alertNotFound);
//                 })
//             }
//         }
//     }, [loaded])
//     return (
//         <div>
//             {loaded ?
//                 <div>
//                     <div ref={canvasRef} id="viewerCanvas"></div>
//                 </div> :
//                 'Script not loaded'}
//         </div>)
//         ;
// }
import { useEffect, useRef, useState } from "react";
import "./BookViewer.css";

export const BookViewer = ({ bookId}) => {
    console.log(`bookId${bookId}`)
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
      viewer.load(bookId, alertNotFound);
    }
  }, [loaded, bookId]);

  return (
    <div>
      {loaded ? (
        <div>
          <div ref={canvasRef} id="viewerCanvas"></div>
        </div>
      ) : (
        'Script not loaded'
      )}
    </div>
  );
};