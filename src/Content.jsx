import { HorsesIndex } from "./HorsesIndex"
import { HorsesNew } from "./HorsesNew";
import { Modal } from "./Modal";
import { HorseShow } from "./HorsesShow";
import axios from "axios"
import { useState, useEffect } from "react"



export function Content() {
  const [horses, setHorses] = useState([]);
  const [currentHorse, setCurrentHorse] = useState({});
  const [isShowVisible, setIsShowVisible] = useState(true)

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

  useEffect(handleHorsesIndex, [])

  return (
    <main>
      <h1>Welcome to the world of Horses!</h1>
      <HorsesNew onSubmit={handleCreateHorse} />
      <br/>
      <br/>
      <br/>
      <HorsesIndex horses={horses} />
      <Modal isShowVisible={true}>
        This is Modal show
      </Modal >
    </main>
  )
}