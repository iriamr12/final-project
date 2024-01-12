import {useState} from "react";
import BookForm from "../components/BookForm";
import axios from "axios";
import Books from "../components/Books";

function App(){
    const[loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

const API_KEY = "AIzaSyDBN0k-cEvlnsLQj0YELqLD1ckFYMmPF4I";

    const getBook = async (title) => {
        setLoading(true);
        setError("")

        let url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`
        
        try{
            let response = await fetch(url);
            if(response.ok){
                let data = await response.json();
                console.log('We got data!');
                console.log(data);
                setBooks(data.items)
            }
            else{
                setError(`Server Error: ${response.status} ${response.statusText}`);
            }
        } catch(e){
            setError(`Network Error: ${e.message}`);
        }
        setLoading(false)
    };

    return(
      <div>
        <h2>Google Books Search</h2>
        <BookForm getBookCb = {(title) => getBook(title)}/>
        <Books data={books}/>
        {
            loading && <h2>Loading...</h2>
        }
        {
            error && <h2 style={{color: 'red'}}>{error}</h2>
        }
    </div>
    ) 

}
export default App;