import React from 'react'
import { useSelector } from 'react-redux'

const TodayWeather = () => {

    const state = useSelector(state => state.reducer.todayWeather)

    return (
        <div className='today'>
            <div className='todayContent'>
                <div className='temp'>
                    <div>
                        <h1>{Math.round(state.main.temp) + '°'}</h1>
                        <p className='weekDay'>Сегодня</p>
                    </div>
                    {state.weather[0].description == 'пасмурно' 
                        ?  <div className='todayWeatherCloudy'></div>
                        :  state.weather[0].description == 'ясно' 
                        ?  <div className='todayWeatherSunny'></div>
                        :  state.weather[0].description == 'облачно с прояснениями'
                        ?  <div className='todayWeatherSunnyCloudy'></div>
                        :  state.weather[0].description == 'дождь'
                        ?  <div className='todayWeatherRain'></div>
                        :  <div className='todayWeatherSunnyCloudy'></div>
                    }
                </div>
                <div className='info'>
                    <p>{state.weather[0].description}</p>
                    <p>{state.name}</p>
                </div>
            </div>
        </div>
    )
}

export default TodayWeather