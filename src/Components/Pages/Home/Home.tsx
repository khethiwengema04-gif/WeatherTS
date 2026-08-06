import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Search } from '../../Search/Search'
import Weather from '../../Weather/Weather'
import { HourCard } from '../../HourCard/HourCard'
import WeekelyCard from '../../WeekelyCard/WeekelyCard'
import { Toggle } from '../../Toggle/Toggle'



export const Home = () => {
    const [isDark, setIsDark] = React.useState(false);
    return (
        <div className="App" data-theme={isDark ? "dark" : "light"}>
            <Navbar />
            <Search />
            <Toggle
                isChecked={isDark}
                handleChange={() => setIsDark(!isDark)} />
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

    )
}

export default Home