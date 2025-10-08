import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./moviesSlice.js"

const appStore = configureStore({
    reducer: {
        movies: movieReducer,
    }
})

export default appStore