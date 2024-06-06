import axios from "axios"
import { useState } from "react";


export function HorsesIndex() {


  return (
    <div>
      <h1>All Horses</h1>
      {horses.map(horse => (
        <div key={horse.id}>
          <h2>Breed: {horse.breed} </h2>
          <p>Build: {horse.build} </p>
          <img id="horseImage" src={horse.image_url} />
          <p>Color: {horse.color} </p>
          <p>Price: {horse.price}</p>
        </div>
    ))}
    </div>
  );
}