import { configureStore } from '@reduxjs/toolkit'
import React from 'react';
import  useReducer  from './userSlice';
import moviesReducer from './moviesSlice';


const aapStore = configureStore({
    reducer : {
        user : useReducer,
        movies :moviesReducer,
        
    }

})
 

export default aapStore;