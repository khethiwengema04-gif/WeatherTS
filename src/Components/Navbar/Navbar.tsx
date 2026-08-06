
import style from './Navbar.module.css'
import { Text } from '../Text/Text'
import SettingsIcon from '../../assets/SettingsIcon.png'
export default function Navbar() {

  return (
    <nav>
      <div className={style.content}>
        <div className={style['WeatherIcon']}>
        </div>
        <Text varient={'h1'} style={{ margin: 0 }}>WEATHER</Text>
        <div className={style['SettingsIcon']}>
          <img src={SettingsIcon} alt="" height="30" width="30" />
        </div>
      </div>
    </nav>
  )
}