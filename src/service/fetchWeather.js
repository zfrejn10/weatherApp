import { useDispatch, useSelector } from "react-redux"
import { getWeatherToday } from "../store/weatherSlice"

export const fetchWeather = (city = 'Moscow') => {

    const cityName = (city.split(' ')).join(',')

    return async dispatch => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=af23976f6db1d4bb9c581e64ca8aaf84&lang=ru&units=metric`)
        .then(weather => weather.json())
        .then(weather => dispatch(getWeatherToday(weather)))  
    }


    
}