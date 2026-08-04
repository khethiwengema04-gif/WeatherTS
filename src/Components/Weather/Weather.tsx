import React from 'react'
import style from './Weather.module.css'
import Background from '../../assets/Background.jpg'

const Weather = () => {
  return (
   <div className='weather' style={{ backgroundImage: `url(${Background})` }}>
        
        <p className='location'>London</p>
        <p className='temperature'>16°C</p>
       
    </div>
  )
}

export default Weather