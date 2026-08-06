import './App.css'
// import React from 'react'
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import { Search } from './Components/Search/Search'
import Weather from './Components/Weather/Weather'
import { Toggle } from './Components/Toggle/Toggle'
import { HourCard } from './Components/HourCard/HourCard'
import WeekelyCard from './Components/WeekelyCard/WeekelyCard'

export const App = () => {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>

      <div id='app-con tainer'>
        <div id='scrollable'>
          <Navbar />
          <Toggle
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)} />
          <Search />
          <Weather />
          <HourCard />
          <WeekelyCard days={[
            { day: 'Mon', icon: 'https://openweathermap.org/img/wn/01d.png', high: 25, low: 15 },
            { day: 'Tue', icon: 'https://openweathermap.org/img/wn/02d.png', high: 22, low: 14 },
            { day: 'Wed', icon: 'https://openweathermap.org/img/wn/03d.png', high: 20, low: 12 },
            { day: 'Thu', icon: 'https://openweathermap.org/img/wn/04d.png', high: 18, low: 10 },
            { day: 'Fri', icon: 'https://openweathermap.org/img/wn/09d.png', high: 16, low: 8 },
            { day: 'Sat', icon: 'https://openweathermap.org/img/wn/10d.png', high: 14, low: 6 },
            { day: 'Sun', icon: 'https://openweathermap.org/img/wn/11d.png', high: 12, low: 4 },
          ]} />
        </div>

      </div>

    </div>
  )
}

export default App
