import axios from "axios"
import { useState } from "react";


export function HorsesIndex(props) {

  return (
    <div>
      <h1>All Horses</h1>
      <div className="HorseIndex">
      {props.horses.map(horse => (
        <div key={horse.id}>
          <h2>Breed: {horse.breed} </h2>
          <img id="horseImage" src={horse.image_url} />
          <p>Build: {horse.build} </p>
          <p>Color: {horse.color} </p>
          <p>Price: {horse.price}</p>
        </div>
    ))}
      </div>
    </div>
  );
}