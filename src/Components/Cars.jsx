import React, { useState } from 'react'


function CarsList() {

    const [Cars, setCars] = useState([
        'Land Rover Defender',
        'G63',
        'Tesla',
        'BMW',
        'Camry'
    ]);

    const [newCar, SetNewCars] = useState("")

    function handleInputChange(event) {
        SetNewCars(event.target.value)
    }

    function addCar() {
        if (newCar !== "")
            setCars(Cars => [...Cars, newCar])
        SetNewCars("")
    }

    function deleteCars(index) {

        const currentMovies = Cars.filter((_, i) => i !== index);
        setCars(currentMovies);
    }

    const CarItems = Cars.map((Car,index) => 
    <li class =" font-serif p-2 font-medium" > {Car}<button class = " hover:text-emerald-200 ml-2.5 p-1 border-2 rounded-lg"  onClick={() => deleteCars(index)} >Delete Car</button> </li>)

    return (
        <div>
            <h1  class=" text-2xl font-medium p-6 underline font-serif " >Cars List</h1>
            <input  class=" font-serif border-2 rounded-lg"  type="text" placeholder='Enter a car'
                value={newCar}
                onChange={handleInputChange}
            />
            <button class ="hover:text-emerald-200 font-serif border-2 p-0.5 rounded-lg ml-2.5" onClick={addCar} >Add</button>
            <l>{CarItems}</l>
        </div>
    )
}

export default CarsList