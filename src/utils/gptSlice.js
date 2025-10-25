import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchToggle: false,
    },
    reducers: {
        setGptSearchToggle: (state) => {
            state.gptSearchToggle = !state.gptSearchToggle
        }
    }
})

export const { setGptSearchToggle } = gptSlice.actions;
export default gptSlice.reducer