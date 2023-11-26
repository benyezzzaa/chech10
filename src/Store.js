
import {configureStore} from '@reduxjs/toolkit'
import RestaurantReducer from './RestaurantSlice'
export const store =configureStore({
    reducer :{
        restaurent:RestaurantReducer
    }
})