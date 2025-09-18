import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        session: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload.user
            state.user = action.payload.session
        },
        removeUser: (state, action) => {
            state.user = null;
        },
    },
})


export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;