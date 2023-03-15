import React from 'react'
import {useContext} from "react";
import {NoteContext} from "./Context";
import {NavLink} from 'react-router-dom';
// import Weather from "./Weather";
// const c = useContext(NoteContext);


const Search = () => {

  const c = useContext(NoteContext);
  const {query,setQuery} = c;

  // const [inputs, setInputs] = useState({});
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setQuery(values => ({...values, [name]: value}))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(inputs);
  //   // setInputs(inputs);



  //   // (inputs);
  // }
  
  return (
    <>
    {/* <div className='search-container1'>
   
    <form onSubmit={(e) => e.preventDefault()}>
      
    
      <label>
         <span className='logo'></span>search city:
     
      <input 
        type="form" 
        name="username" 
       
        value={query}
       
        onChange ={(e) =>setQuery(e.target.value)}
        />
        </label>
  


  </form>
</div> */}


<nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <NavLink className="Logo ">The Visitor</NavLink>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/map">Map</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Pricing</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</NavLink>
        </li> */}
      </ul>
    </div>



    <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
    {/* <h5 className="btn" type="submit">city</h5> */}
      <input className="form-control me-1" type="search" name='username' value={query} onChange ={(e) =>setQuery(e.target.value)} placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>

    </>
  )
};

export default Search;

