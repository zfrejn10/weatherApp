import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        todayWeather: {
            name: 'Loading...',
            main: {
                temp: 0,
                pressure: 0,
                feels_like: 0,
                pressure: 0,
            },
            wind: {
                speed: 0
            },
            weather: [{description: 'ясно'}]
        },
        city: ''
    },
    reducers: {
        getWeatherToday(state, action) {
            state.todayWeather = action.payload
        },
        addCity(state, action) {
            state.city = action.payload
        }
    }
})

export default weatherSlice.reducer
export const {getWeatherToday, addCity} = weatherSlice.actions
