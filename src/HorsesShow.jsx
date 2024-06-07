import axios from "axios"

export function HorsesShow(props) {


  return (
    <div>
      <h1>Extra Inforamtion</h1>
      <p>ID: {props.horse.id}</p>
      <p>Breed: {props.horse.breed}</p>
      <p>Color: {props.horse.color}</p>
      <br/>
      <br/>
      <br/>
      <form>
        <p>Breed: <input type="text" name="breed"/> </p>
        <p>Build: <input type="text" name="build"/> </p>
        <p>Color: <input type="text" name="color"/> </p>
        <p>Price: <input type="text" name="price"/> </p>
        <p>Image_url: <input type="text" name="image_url"/> </p>
        <button>Submit Horse Information Update</button>
      </form>
    </div>
  )
}