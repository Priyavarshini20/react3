import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        logoutUser: (state) => {
            return null;
        }
    }
});

export const { setUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;