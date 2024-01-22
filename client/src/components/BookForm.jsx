import React from 'react'
import {useState} from "react";

export default function BookForm(props){
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getBookCb(title)
        setTitle("");
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

