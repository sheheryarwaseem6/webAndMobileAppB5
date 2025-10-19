import { createSlice } from "@reduxjs/toolkit";
import { createProduct, getAllProducts } from "./productsAction";

export const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        currentPage: 1,
        totalPages: 1,
        totalProducts: 0,
        error: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            }).addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.products = action.payload.data;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.totalProducts = action.payload.totalProducts;
            }).addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
            }).addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload)
                state.products.push(action.payload.data);
            }).addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default productSlice.reducer