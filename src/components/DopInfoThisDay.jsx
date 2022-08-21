import React from 'react'
import { useSelector } from 'react-redux'

const DopInfoThisDay = () => {

  const state = useSelector(state => state.reducer.todayWeather)

    return (
        <div className='dopInfo'>
          <div className='dopInfoContent'>
              <ul className='infoList'>
                <li className='infoItem icon1'></li>
                <li className='infoItem icon2'></li>
                <li className='infoItem icon3'></li>
                <li className='infoItem icon4'></li>
              </ul> 
              <ul className='infoListTitle'>
                <li className='titleItem'>Темература</li>
                <li className='titleItem'>Давление</li>
                <li className='titleItem'>Осадки</li>
                <li className='titleItem'>Ветер</li>
              </ul> 
              <ul className='infoListSet'>
                <li className='setItem'>{Math.round(state.main.temp) + '°'} - ощущается как {Math.round(state.main.feels_like) + '°'}</li>
                <li className='setItem'>{state.main.pressure} мм ртутного столба</li>
                <li className='setItem'>{state.weather[0].description}</li>
                <li className='setItem'>{state.wind.speed} м/с</li>
              </ul> 
          </div>
        </div>
    )
}

export default DopInfoThisDay