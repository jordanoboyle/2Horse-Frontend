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

  const handleHorsesIndex = () => {
    console.log("pulling Horses Data");
    axios.get("http://localhost:3000/horses.json").then((response) => {
      console.log(response.data);
      setHorses(response.data);
    })
  } 

  const handleShowHorse = (horse) => {
    console.log("showing this horse data");
    setCurrentHorse(horse);
    setIsHorsesShowVisible(true);
  }

  const handleUpdateHorse = (theParams, id) => {
    console.log("updating horse from Content");
    axios.patch(`http://localhost:3000/horses/${id}.json`, theParams).then((response) => {
      console.log(response.data)
      
      closeModal()

      setHorses(horses.map((horse) => {
        if (horse.id === id) {
          return response.data
        } else {
          return horse
        }}
      ))
    })
  }

  const handleHorseDestroy = (id) => {
    console.log("acceptiong destroy submit from show")
    axios.delete(`http://localhost:3000/horses/${id}.json`).then((response) => {
      console.log(reponse.data);
    })
    closeModal()
    window.location.href = '/'
  }

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
        <HorsesShow horse={currentHorse} onHorseUpdate={handleUpdateHorse} onHorseDestroy={handleHorseDestroy}/>
      </Modal >
    </main>
  )
}