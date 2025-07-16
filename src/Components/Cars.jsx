import React from 'react'

const Cars = [
     'Land Rover Defender',
     'G63',
     'Tesla',
     'BMW',
     'Camry'
];

function CarsList() {
    const CarItems = Cars.map(Car => <li>{Car}</li>)
  return (
    <div>
        <h1>Cars List</h1>
       <ul>{CarItems}</ul>
    </div>
  )
}

export default CarsList