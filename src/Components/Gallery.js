import React from 'react'

const Gallery = () => {
    const categories = [
        {
          id: 1,
          tag: 'Temperature',
          title: "Lucknow",
          imageUrl: "https://images.unsplash.com/photo-1583504491400-a6270df17ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,
        },
        {
          id: 2,
          title: 'Delhi',
          imageUrl: "https://images.unsplash.com/photo-1595928607828-6fdaee9c0942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        },
        {
            id: 3,
            title: 'TamilNadu',
            imageUrl: "https://images.unsplash.com/photo-1544588440-fc7551331160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
          },
          {
            id: 4,
            title:"Goa",
            "imageUrl": "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,
          },
          {
            id: 5,
            title: 'Uttar Pradesh',
            "imageUrl": "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80" ,
            // "imageUrl": "../images/randomtemple.jpg"
          },
           {
            id: 6,
      title: 'Assam',
      "imageUrl": "https://images.unsplash.com/photo-1615472910606-9d4f7291944f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" ,
           }
    ]
  return (
    <>
    <div className='bg-primary text-white'>Must Visit</div>
    <div className='bg-primary grid-container-image'>
    {categories.map(({id,title, imageUrl}) => (
      <div key={id} style={{ backgroundImage:`url(${imageUrl})`, backgroundRepeat:"no-repeat", backgroundSize:" 100% 100% "}} className='containeri2'>
      
      <div className='container-text'>
        {/* <p>{id}</p> */}
        <div>{title}</div>
       
        </div>
       </div>
    ))}
  </div> 

    </>
  )
}

export default Gallery