import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import movieReducer from "./moviesSlice.js"

const appStore = configureStore({
    reducer: {
        movies: movieReducer,
    }
})

export default appStore