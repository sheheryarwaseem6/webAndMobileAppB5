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
        if (!response.ok) {
              const errorData = await response.json(); 
              return rejectWithValue(errorData);
            }
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})