import React from 'react'
import style from './HourCard.module.css'
import { Text } from '../Text/Text'

export const HourCard = () => {
  return (
    <div className={style.hourlyContent}>



      <div className={style.hourlyForecast}>
        <Text varient="h2">6:00 AM</Text>
        :sunny:🌞
        <Text varient="p">22°C</Text>
      </div>

      <div className={style.hourlyForecast}>
        <Text varient="h2">7:00 AM</Text>
        :snow_cloud:
        <Text varient="h2">22°C</Text>
      </div>

      <div className={style.hourlyForecast}>
        <Text varient="h2">8:00 AM</Text>
        :rain_cloud:🌧️
        <Text varient="p">22°C</Text>
      </div>

      <div className={style.hourlyForecast}>
        <Text varient="h2">9:00 AM</Text>
        :thought_balloon:💭
        <Text varient="p">22°C</Text>
      </div>

      <div className={style.hourlyForecast}>
        <Text varient="h2">10:00 AM</Text>
        :sunny:🌞
        <Text varient="p">22°C</Text>
      </div>

      <div className={style.hourlyForecast}>
        <Text varient="h2">11:00 AM</Text>
        :partly_sunny:🌤️
        <Text varient="p">22°C</Text>
      </div>
      <div className={style.hourlyForecast}>
        <Text varient="h2">12:00 PM</Text>
        :thunder_cloud_and_rain:⛈️
        <Text varient="p">22°C</Text>
      </div>
    </div>



    //   <div className={style['HourCard']}>
    //       <h3>Hourly Forecast</h3>
    //       <p>Temperature:🌡️ 25°C</p>
    //       <p>Humidity: 60%</p>
    //       <p>Wind Speed: 💨 10 km/h</p>
    //   </div>
    // )
  )
}
