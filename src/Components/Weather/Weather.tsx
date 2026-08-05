import React from 'react'
import style from './Weather.module.css'
import Background from '../../assets/Background.jpg'
import HumidityIcon from '../../assets/HumidityIcon.jpg'
import WindIcon from '../../assets/WindIcon.png'

const Weather = () => {
  return (
    <div className='weather' style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "500px",
      marginTop: "0px",
      display: "flex",
      flexDirection: "column",
      gap: "1px",
      justifyContent: "center",
      alignItems: "center"
    }}>
       
      <p className='location'>London</p>
      <p className='temperature'>16°C☀️</p>
      <div className={style['humidity']}>
        <img src={HumidityIcon} alt="" height="100" width="100"  />
        <div>
          <p>90 %</p>
          <span>Humidity</span>
        </div>
      </div>
      <div className={style['wind']}>
        <img src={WindIcon} alt="" height="100" width="100" />
        <div>
          <p>3.6km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>

  )
}

export default Weather