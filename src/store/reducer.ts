import { combineReducers } from "@reduxjs/toolkit";
import { reducer as products } from "./products";

const reducers = {
    products
};

export const rootReducer = combineReducers(reducers);
