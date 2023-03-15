import {React, useContext} from 'react';
import {NoteContext} from "./Context";



const Weather = () => {
  const b = useContext(NoteContext);
  console.log(b);
  if (!b.tempdata.weather) {
    return <span>Loading...</span>;
}

  return (
    <>
    <div>
    {/* <h2>Helloooo weather</h2>  */}
    <h1>{b.tempdata.name}</h1>
    <h1>{b.tempdata.weather[0].description}</h1>
    <h1>{b.tempdata.main.temp}-Cel</h1>




    </div>
    </>
  )
}

export default Weather;




// - ----------------------------------

// import {NoteContext} from "./Context";

// const Weather = () => {
//   const a = useContext(NoteContext)

//   return (
//     <>
//     <div>
//       This is about {a.name}
//     </div>
//     </>
//   )
// }

// export default Weather