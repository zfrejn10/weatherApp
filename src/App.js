import React, { useEffect } from 'react'
import style from './style/App.css'
import Header from './components/Header'
import TodayPart from './components/TodayPart';
import MyButton from './UI/button/MyButton';
import DayItem from './components/DayItem';
import DopWeather from './components/DopWeather';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherToday } from './store/weatherSlice';
import { fetchWeather } from './service/fetchWeather';

function App() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  return (
    <div className="App">
      <Header/>
      <TodayPart/>
      {/* <DopWeather/> */}
    </div>
  );
}

export default App;
