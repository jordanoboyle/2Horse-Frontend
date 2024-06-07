import axios from "axios"

export function HorsesShow(props) {


  return (
    <div>
      <h1>Extra Inforamtion</h1>
      <p>ID: {props.horse.id}</p>
      <p>Breed: {props.horse.breed}</p>
      <p>Color: {props.horse.breed}</p>
    </div>
  )
}