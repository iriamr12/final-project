import React from 'react'
import './Home.css'
import photo1 from './public/pexels-thought-catalog-904616.jpg'

function Home() {
    return(
        <div>
        <h1>Welcome to your book profile</h1>
        <img src={photo1} />
        </div>
    )
}

export default Home;