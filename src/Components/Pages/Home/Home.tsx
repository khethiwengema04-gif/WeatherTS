import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Search } from '../../Search/Search'
import Weather from '../../Weather/Weather'
import { HourCard } from '../../HourCard/HourCard'


const Home = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <Weather />
            <HourCard />

        </div>

    )
}

export default Home