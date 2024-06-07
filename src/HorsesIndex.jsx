
export function HorsesIndex(props) {
  console.log(props)
  return (
    <div>
      <h1>All Horses</h1>
      <div className="HorseIndex">
      {props.horses.map(horse => (
        <div key={horse.id}>
          <p>{horse.id}</p>
          <h2>Breed: {horse.breed} </h2>
          <img id="horseImage" src={horse.image_url} />
          <p>Build: {horse.build} </p>
          <p>Color: {horse.color} </p>
          <p>Price: {horse.price}</p>
          <button onClick={() => props.onShowHorse(horse)}>Show More Info/Update</button>
        </div>
    ))}
      </div>
    </div>
  );
}