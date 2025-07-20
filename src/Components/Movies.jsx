import React, { useState } from 'react'


function MoviesList() {

    const [Movies, setMovies] = useState([

        'Oppenheimer',
        'Formula 1',
        'Jurrasic world',
        'Superman',
        'I like you Grace'
    ]);

    const [newMovie, setNewMovie] = useState("")

    function handleInputChange(event) {
        setNewMovie(event.target.value)
    }

    function addMovie() {

        if (newMovie !== "") {
            setMovies(Movies => [...Movies, newMovie]);
            setNewMovie("");
        }
    }

    function deleteMovie(index) {

        const currentMovies = Movies.filter((_, i) => i !== index);
        setMovies(currentMovies);
    }

    const movieItems = Movies.map((movie, index) => 
    <li class =" font-serif p-2 font-medium" > {movie} <button class = "hover:text-emerald-200 ml-2.5 p-1 border-2 rounded-lg" onClick={() => deleteMovie(index)} >Delete Movie</button></li>)
    return (
        <>

            <h1 class=" text-2xl font-medium p-6 underline font-serif " >Movies List</h1>
            <input class="font-serif border-2 rounded-lg" type="text" placeholder='Add a Movie '
                value={newMovie}
                onChange={handleInputChange}
            />
            <button class =" hover:text-emerald-200 font-serif border-2 p-0.5 rounded-lg ml-2.5" onClick={addMovie}>Add</button>
            <l>{movieItems}</l>

        </>

    )


}
export default MoviesList