import { HorsesIndex } from "./HorsesIndex"
import { HorsesNew } from "./HorsesNew";
import { Modal } from "./Modal";
import { HorsesShow } from "./HorsesShow";
import axios from "axios"
import { useState, useEffect } from "react"



export function Content() {
  const [horses, setHorses] = useState([]);
  const [currentHorse, setCurrentHorse] = useState({});
  const [isHorsesShowVisible, setIsHorsesShowVisible] = useState(false)

  const handleCreateHorse = (theParams, successCallback) => {
    console.log("creating horse passed to content");
    axios.post("http://localhost:3000/horses.json", theParams).then((response) => {
      console.log(response.data);
      setHorses([...horses, response.data]);
      successCallback()
    })
  }


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

  //create modal, get modal to show on true or not on false. 
  // get modal to open and close on click
  //render a form for submitting new data
  //axios request to patch data about horse
  //make sure to render data in form already for update

  const handleShowHorse = (horse) => {
    console.log("showing this horse data");
    setCurrentHorse(horse);
    setIsHorsesShowVisible(true);
  }

  //transfer axios patch request 
  // pass params to axios request and horse id
  // close modal
  //fancy refresh with JS logic something like if (horse.id === id) {setHorses = something}
  const handleUpdateHorse = (theParams, id) => {
    console.log("updating horse from Content");
    axios.patch(`http://localhost:3000/horses/${id}.json`, theParams).then((response) => {
      console.log(response.data)
      window.location.href = "/"
      
    }
  )}

  const closeModal = () => {
    console.log("closing the modal");
    setIsHorsesShowVisible(false)
  }

  useEffect(handleHorsesIndex, [])

  return (
    <main>
      <h1>Welcome to the world of Horses!</h1>
      <HorsesNew onSubmit={handleCreateHorse} />
      <br/>
      <br/>
      <br/>
      <HorsesIndex horses={horses} onShowHorse={handleShowHorse} />
      <Modal show={isHorsesShowVisible} onClose={closeModal} >
        <HorsesShow horse={currentHorse} onHorseUpdate={handleUpdateHorse}/>
      </Modal >
    </main>
  )
}