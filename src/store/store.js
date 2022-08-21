import { combineReducers, configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weatherSlice'

const rootReducer = combineReducers({
    reducer: weatherSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})