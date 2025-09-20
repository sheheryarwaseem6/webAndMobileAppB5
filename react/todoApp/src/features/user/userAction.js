import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk('registerUser', async (data, { rejectWithValue }) => {
    try {
        console.log(data,)
        const response = await fetch('http://localhost:3002/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body:JSON.stringify(data),
        }
        )
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})