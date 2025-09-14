import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk('getProducts', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:3001/user/products')
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const createProduct = createAsyncThunk('createProduct', async (data, { rejectWithValue }) => {
    try {
        console.log(data,)
        const response = await fetch('http://localhost:3001/user/product', {
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