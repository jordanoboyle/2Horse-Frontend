import axios from "axios"

export function HorsesShow(props) {
//build a form
// build a submitForm function that shows console.log
//prefill form with props data
//mimic httpie patch web request and transfer data to API
// reset page

  const submitFormHorse = (event) => {
  console.log("submitting the new horse data")
  event.preventDefault();
  const params = new FormData(event.target);
  axios.patch(`http://localhost:3000/horses/${props.horse.id}.json`, params).then((response) => {
    console.log(response.data)
    window.location.href = "/"
  })
  
  }

  return (
    <div>
      <h1>Extra Inforamtion</h1>
      <p>ID: {props.horse.id}</p>
      <p>Breed: {props.horse.breed}</p>
      <p>Color: {props.horse.color}</p>
      <br/>
      <br/>
      <br/>
      <form onSubmit={submitFormHorse}>
        <p>Breed: <input type="text" name="breed" defaultValue={props.horse.breed} />  </p>
        <p>Build: <input type="text" name="build" defaultValue={props.horse.build} />  </p>
        <p>Color: <input type="text" name="color" defaultValue={props.horse.color} />  </p>
        <p>Price: <input type="text" name="price" defaultValue={props.horse.price} />  </p>
        <p>Image_url: <input type="text" name="image_url" defaultValue={props.horse.image_url} />  </p>
        <button type="submit">Submit Horse Information Update</button>
      </form>
    </div>
  )
}