import './categories.scss';
// import './App.css';
import Home from "./Home";
import Weather from "./Weather";
import Search from "./Search";
import Context from "./Context";
import Map from "./Map";
import Front from "./Front";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
   <BrowserRouter>
   <Context>
   <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/weather" element = {<Weather />} />
    <Route path = "/search" element = {<Search />} />
    <Route path = "/map" element = {<Map />} />
    <Route path = "/front" element = {<Front />} />
    
   </Routes>
   </Context>
   </BrowserRouter>
  
  );
}

export default App;
