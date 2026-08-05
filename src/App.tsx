import './App.css'
// import React from 'react'
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import { Search } from './Components/Search/Search'
import Weather from './Components/Weather/Weather'
import { Toggle }  from './Components/Toggle/Toggle'

export const App = () => {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      
      <div id='app-container'>
        <div id='scrollable'>
          <Navbar/>
          <Toggle
       isChecked={isDark} 
       handleChange={() => setIsDark(!isDark)} />
          <Search/>
          <Weather/>
        </div>

      </div>  
      
    </div>
  )
}

export default App
