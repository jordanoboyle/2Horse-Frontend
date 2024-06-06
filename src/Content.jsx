import { HorsesIndex } from "./HorsesIndex"
import axios from "axios"
import { useState, useEffect } from "react"



export function Content() {
  const [horses, setHorses] = useState([]);


  //render basic data so we have a template
  //pull data from axios and prove a render
  //write a map function/loop to render all the data from the data base 
  const handleHorsesIndex = () => {
    console.log("pulling Horses Data");
    axios.get("http://localhost:3000/horses.json").then((response) => {
      console.log(response.data);
      setHorses(response.data);
    })
    
  } 

  return (
    <main>
      <h1>Welcome to React!</h1>
      <HorsesIndex horses={horses} />
    </main>
  )
}