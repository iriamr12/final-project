import React from 'react'
import {useState} from "react";

export default function BookForm(props){
    const [book, setBook] = useState("");

    const handleChange = (e) => {
        setBook(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getBookCb(title)
        setBook("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='The Davinci Code'
            value = {title}
            onChange={handleChange}
            />
        </form>
    )
}