import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk('getProducts', async ({page, limit}, { rejectWithValue }) => {
    try {
        const response = await fetch(`http://localhost:3002/user/products?page=${page}&limit=${limit}`,{
            credentials: 'include',
        })
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
        const response = await fetch('http://localhost:3002/user/product', {
            method: "POST",
            credentials: 'include',
            body: data,
        }
        )
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})