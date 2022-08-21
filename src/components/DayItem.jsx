import React from 'react'

const DayItem = ({title, date, mounch, dayTemp, nightTemp, weath}) => {
    return (
        <li className='dayItem'>
            <div className='wrap'>
                <h2 className='dayOfTheWeek'>{title}</h2>
                <p className='date'>{date} {mounch}</p>
                <div className='iconWeather'></div>
                <p className='dayTemp'>{dayTemp}</p>
                <p className='nightTemp'>{nightTemp}</p>
                <p className='weath'>{weath}</p>
            </div>
        </li>
    )
}

export default DayItem