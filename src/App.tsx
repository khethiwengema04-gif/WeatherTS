import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Pages/Home/Home'
import SettingsIcon from './assets/SettingsIcon.png'
import Settings from './Components/Pages/Settings/Settings'

const App = () => {
  const [isDark, setIsDark] = React.useState(false);
  const handleToggleChange = () => {
    setIsDark(!isDark);
  }


  return (
    <div data-theme={isDark ? "dark" : "light"}>
      <Routes>
        <Route path='/' element={<Home isDark={isDark} handleToggleChange={handleToggleChange} />} />

        <Route path='/settings' element={<Settings isDark={isDark} handleToggleChange={handleToggleChange} />} />
      </Routes>
    </div>
  )
}

export default App
