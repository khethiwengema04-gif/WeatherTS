import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Search } from './Components/Search/Search'
import Weather from './Components/Weather/Weather'

export const App = () => {
  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar/>
        <Search/>
        <Weather/>


      </div>  
      
    </div>
  )
}

export default App
