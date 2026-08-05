import React from 'react'
import style from './Navbar.module.css'
import { Text } from '../Text/Text'

export default function Navbar () {
    
  return (
    <nav>
        <div className={style.content}>
           <div className={style['WeatherIcon']}>
            </div>
            <Text varient={'h1'} style= {{margin:0}}>WEATHER</Text>

        </div>
    </nav>
  )
}