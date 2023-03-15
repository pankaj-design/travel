import {React, useContext} from 'react';
import {NoteContext} from "../Context";



const Weather2 = () => {
  const d = useContext(NoteContext);
  console.log(d);
  if (!d.tempdata.weather) {
    return <span>Loading...</span>;
}

  return (
    <>
    <div>
   
    {/* <h1>{d.tempdata.weather[0].description}</h1> */}
    <h1>{d.tempdata.main.humidity}</h1>
    <h2>Pressure </h2> 
    <h1>{d.tempdata.main.pressure}</h1>


    </div>
    </>
  )
}

export default Weather2;