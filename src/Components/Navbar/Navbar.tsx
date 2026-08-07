
import style from './Navbar.module.css'
import { Text } from '../Text/Text'
import SettingsIcon from '../../assets/SettingsIcon.png'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const navigate = useNavigate()
  const handleSettingsClick = () => {
    navigate('/settings')
  }

  return (
    <nav>
      <div className={style.content}>
        <div className={style['WeatherIcon']}>
        </div>
        <Text varient={'h1'} style={{ margin: 0 }}>WEATHER</Text>
        <div className={style['SettingsIcon']} >
          <img onClick={handleSettingsClick} src={SettingsIcon} alt="" height="30" width="30" />
        </div>
      </div>
    </nav>
  )
}