import { combineReducers } from "@reduxjs/toolkit";
import { reducer as products } from "./products";
import { reducer as auth } from "./auth";

const reducers = {
    products,
    auth
};

export const rootReducer = combineReducers(reducers);
