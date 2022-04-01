/* eslint-disable max-len */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API_PRODUCTS_BASE_URL } from "./../../constants/index";
import axios from "axios";
import { IProduct, ISlice } from "./types";
import { Thunk } from "../../store/types";

const initialState: ISlice = {
    products: [],
    isFetching: false,
    isError: false
};

//

const slice = createSlice({
    name: "products",
    initialState,
    reducers: {
        request: (state) => {
            state.isFetching = true;
        },
        success: (state, action: PayloadAction<IProduct[]>) => {
            console.log("action => ", action);

            state.isFetching = false;
            state.isError = false;
            state.products = action.payload;
        },
        failure: (state) => {
            state.isFetching = false;
            state.isError = true;
        }
    }
});

export const { reducer } = slice;

export const { request, success, failure } = slice.actions;

export const getProducts = (): Thunk => {
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data } = await axios.get(API_PRODUCTS_BASE_URL);
            console.log("axios data", data);

            dispatch(success(data));
        } catch (e) {
            console.log("e =>", e);

            dispatch(failure());
        }
    };
};
