import {React} from 'react';
import Weather from "./Weather";
import Search from "./Search";
import Map from "./Map";
import Front from './Front';
import Gallery from './Components/Gallery';
import Weather2 from './Components/Weather2';




const Home = () => {
  const categories = [
    {
      id: 1,
      tag: 'Temperature',
      title: <Weather />,
     
    },
    {
      id: 2,
      tag: 'Humidity',
      title: <Weather2/>,

    
    
    },
    // {
    //   id: 3,
    //   tag: 'Jackets',
    //   title:"desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    // },
    // {
    //   id: 4,
    //   tag: "gyan",
    //   title:"desktop publishing software like Aldus PageMaker including versions of",
    // },
    
  ];



  return (
    <>
    
    
 
    <div className='container-main'>
    
    <Search/>
    <Front/>
  <div className='grid-container'>
    {categories.map(({id,tag,title, imageUrl}) => (
      <div key={id} style={{ backgroundImage:`url(${imageUrl})`, backgroundRepeat:"no-repeat", backgroundSize:" 100% 100% "}} className='container2'>
      
      <div className='container3'>
        <h2>{tag}</h2>
        <div className='textcolor'>{title}</div>
       
        </div>
       </div>
    ))}
  </div> 
  </div>
  <Gallery/>
  <Map/>


    </>
  )
}

export default Home

//   const a = useContext(NoteContext);
// //   if (!a.weather) {
// //     return <span>Loading...</span>;
// // }