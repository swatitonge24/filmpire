import { configureStore } from '@reduxjs/toolkit'
import React from 'react';
import  useReducer  from './userSlice';
import moviesReducer from './moviesSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';


const aapStore = configureStore({
    reducer : {
        user : useReducer,
        movies :moviesReducer,
        gpt :  gptReducer,
        config :configReducer,
        
    }

})
 

export default aapStore;