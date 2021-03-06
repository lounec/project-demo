/* eslint-disable max-len */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_PRODUCTS_BASE_URL } from "./../../constants/index";
import { IProduct, ISlice } from "./types";
import { Thunk } from "../../store/types";

const initialState: ISlice = {
    products: [],
    cart: [],
    isFetching: false,
    isError: false
};


const slice = createSlice({
    name: "products",
    initialState,
    reducers: {
        request: (state) => {
            state.isFetching = true;
        },
        success: (state, action: PayloadAction<IProduct[]>) => {
            state.isFetching = false;
            state.isError = false;
            state.products = action.payload;
        },
        failure: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        resetProducts: (state) => {
            state.products = [];
            state.isFetching = false;
            state.isError = false;
        },
        addToCart: (state, action) => {
            const id = action.payload
            const prevCart = [...state.cart]

           !prevCart.includes(id)  && state.cart.push(id)
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            const prevCart = [...state.cart]
            const newCart = prevCart.filter(item => item !== id)

            state.cart = newCart
        },
        resetCart: (state) => {
            state.cart = []
        }
    }
});

export const { reducer } = slice;

export const { request, success, failure, resetProducts, addToCart, removeFromCart, resetCart } = slice.actions;

export const getProducts = (): Thunk => {
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data } = await axios.get(API_PRODUCTS_BASE_URL);

            dispatch(success(data));
        } catch (e) {
            dispatch(failure());
        }
    };
};
