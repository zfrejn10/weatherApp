import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../service/fetchWeather'
import { addCity } from '../store/weatherSlice'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

const Header = () => {

    const city = useSelector(state => state.reducer.city)
    const dispatch = useDispatch()

    const cityWeather = () => {
        dispatch(fetchWeather(city))
        dispatch(addCity(''))
    }

    return (
        <header>
            <div className='title'>
                <div className='headerLogo'></div>
                <p>WEATHER REACT</p>
            </div>
            <div className='cities'>
                <MyInput 
                value={city}
                onChange={e => dispatch(addCity(e.target.value))}
                placeholder='Город на англ...'
                />
                <MyButton 
                title='Найти'
                onClick={cityWeather}
                />
            </div>
        </header>
    )
}

export default Header