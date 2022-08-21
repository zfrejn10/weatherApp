import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCity } from '../store/weatherSlice'
import MyButton from '../UI/button/MyButton'
import DayItem from './DayItem'

const DopWeather = () => {

    const dispatch = useDispatch()
    const weatherToday = useSelector(state => state.reducer.city)

    const func = () =>  {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=krasnodar&appid=af23976f6db1d4bb9c581e64ca8aaf84&lang=ru&units=metric`)
        .then(weather => weather.json())
        .then(weather => dispatch(addCity(weather)))  
    }

    return (
        <div className='dopWeather'>
            <div className='btns'>
            <div className='dayWeather'>
                <MyButton title={'На неделю'}
                    onClick={() => func()}
                />
                <MyButton title={'На месяц'}/>
                <MyButton title={'На 10 дней'}/>
            </div>  
            <div className='cancel'>
                <MyButton title={'Отменить'} />
            </div>   
            </div>
            <ul className='containerDay'>
            <DayItem title='Сегодня' date={19} mounch='авг' dayTemp={'+' + 26 + '°'} nightTemp={'+' + 15} weath='Солнечно'/>
            <DayItem title='Завтра' date={20} mounch='авг' dayTemp={+28 + '°'} nightTemp={'+' + 17} weath='Солнечно'/>
            <DayItem title='Пн' date={21} mounch='авг' dayTemp={'+' + 27 + '°'} nightTemp={'+' + 16 + '°'} weath='Солнечно'/>
            <DayItem title='Вт' date={22} mounch='авг' dayTemp={'+' + 30 + '°'} nightTemp={'+' + 19 + '°'} weath='Солнечно'/>
            <DayItem title='Ср' date={23} mounch='авг' dayTemp={'+' + 29 + '°'} nightTemp={'+' + 12 + '°'} weath='Облачно'/>
            <DayItem title='Чт' date={24} mounch='авг' dayTemp={'+' + 28 + '°'} nightTemp={'+' + 19 + '°'} weath='Солнечно'/>
            <DayItem title='Пт' date={25} mounch='авг' dayTemp={'+' + 32 + '°'} nightTemp={'+' + 17 + '°'} weath='Солнечно'/>
            </ul>
        </div>
    )
}

export default DopWeather