import React from 'react'
import { Toggle } from '../../Toggle/Toggle'
import style from './Settings.module.css'
import { useNavigate } from 'react-router-dom'




type SettingsProps = {
    isDark: boolean,
    handleToggleChange: () => void
}
const Settings = ({ isDark, handleToggleChange }: SettingsProps) => {
    const navigate = useNavigate()
    const handleBackToHomeClick = () => {
        navigate('/')
    }
    return (
        <div className={style.App}>
            <h1>Settings</h1>
            <Toggle
                isChecked={isDark}
                handleChange={handleToggleChange} />


            <div>
                <button onClick={handleBackToHomeClick}>Back to Home</button>
            </div>
        </div>
    )
}

export default Settings