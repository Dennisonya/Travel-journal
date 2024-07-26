import './App.css'
import React from "react"
import Navbar from "./components/Navbar.jsx"
import data from "./data.js"
import Travel from "./components/Travel.jsx"

function App(){
  console.log(data)
  const travel = data.map(item =>{
    return(
      <Travel
      key={item.id}
      {...item}/>
    )
  })
    return (
        <div className='journal'>
        <Navbar />
        <div className='grid-container'>
        {travel}
        </div>
        </div>
    )
}

export default App