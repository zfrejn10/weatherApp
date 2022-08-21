import React from 'react'
import TodayWeather from './TodayWeather'
import DopInfoThisDay from './DopInfoThisDay'

const TodayPart = () => {
    return (
        <div className='todayPart'>
            <TodayWeather/>
            <DopInfoThisDay/>
        </div>
    )
}

export default TodayPart