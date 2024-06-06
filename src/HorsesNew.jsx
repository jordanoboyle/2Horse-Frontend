import axios from "axios"

export function HorsesNew() {

  const handleSubmitHorse = (event) => {
    event.preventDefault();
    console.log("handling horse data submit");
  }

  return (
    <div>
      <h1>Add A New Horse</h1>
      <form onSubmit={handleSubmitHorse}>
        <div>
          Breed: <input type="text" />  
        </div>
        <div>
          Build: <input type="text" />  
        </div>
        <div>
          Color: <input type="text" />  
        </div>
        <div>
          Price: <input type="text" />  
        </div>
        <div>
          Image: <input type="text" />  
        </div>
        <button type="submit">Submit New Horse Data</button>
      </form>
    </div>
  )
}