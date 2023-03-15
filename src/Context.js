import React from 'react'

import {useState, useEffect,createContext} from "react"
// import {inputs} from './Search';



const NoteContext = createContext();

const Context = ({children}) => {

  
    const [query, setQuery] = useState('lucknow');
    const [tempdata, setTempdata] = useState([]);


    


    useEffect(() => {
        let timerOut = setTimeout(() => {
        getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1325e3a176af0a7cfae0d10628fec2a8&units=metric`)

        }, 300);
        return() => clearTimeout(timerOut);
        // getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1325e3a176af0a7cfae0d10628fec2a8&units=metric`)
    },[query]);


    const getWeather =async(url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            setTempdata(data);
        } catch (error) {
            console.log(error);
        }

    }

     
//   console.log(tempdata);

    return(
        <NoteContext.Provider value= {{tempdata,query, setQuery}}>
            {children}
        </NoteContext.Provider>
       

    )
}
export {NoteContext};
export default Context;