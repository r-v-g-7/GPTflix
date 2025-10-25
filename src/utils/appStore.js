import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./moviesSlice.js"
import gptReducer from "./gptSlice.js"
import userReducer from "./userSlice.js"

const appStore = configureStore({
    reducer: {
        movies: movieReducer,
        gpt: gptReducer,
        user: userReducer,
    }
})

export default appStore