import axios from "axios"

export function HorsesNew() {
// transfer axios post to content under handleCreateHorse function
//props inserted in HorseNew
//pass event params to props, and content props.onSubmit.params?
  const handleSubmitHorse = (event) => {
    event.preventDefault();
    console.log("handling horse data submit");
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/horses.json", params).then((response) => {
      console.log("new horse created")
      window.location.href = '/'
    })
  }

  return (
    <div>
      <h1>Add A New Horse</h1>
      <form onSubmit={handleSubmitHorse}>
        <div>
          Breed: <input type="text" name="breed" />  
        </div>
        <div>
          Build: <input type="text" name="build" />  
        </div>
        <div>
          Color: <input type="text" name="color" />  
        </div>
        <div>
          Price: <input type="text" name="price"/>  
        </div>
        <div>
          Image: <input type="text" name="image_url" />  
        </div>
        <button type="submit">Submit New Horse Data</button>
      </form>
    </div>
  )
}