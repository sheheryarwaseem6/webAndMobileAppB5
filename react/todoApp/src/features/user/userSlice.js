import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./userAction";

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: {},
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            }).addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.user = action.payload;
            }).addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export default userSlice.reducer