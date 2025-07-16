import React from 'react'

const Movies = ['Oppenheimer' ,
                 'Formula 1', 
                 'Jurrasic world', 
                 'Superman',
                 'I like you Grace'  
                ];

function MoviesList() {

    const movieItems = Movies.map(movie => <li>{movie}</li>)
   return (
    <>

    <h1>Movies List</h1>
    <ul>{movieItems}</ul>

    </>

  )
}

export default MoviesList