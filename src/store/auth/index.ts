import { LS_USER } from './../../constants/index';
/* eslint-disable max-len */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_USER_BASE_URL } from "./../../constants/index";
import { IUser, ISlice } from "./types";
import { Thunk } from "../../store/types";

const initialState: ISlice = {
    user: null,
    isFetching: false,
    isError: false,
    authenticated: false
};

//

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        request: (state) => {
            state.isFetching = true;
        },
        success: (state, action: PayloadAction<IUser>) => {

            state.isFetching = false;
            state.isError = false;

            if (action.payload) {
                state.user = action.payload;
                state.authenticated = true;
            }
        },
        failure: (state) => {
            state.isFetching = false;
            state.isError = true;
        },
        resetAuth: (state) => {
            state.user = null;
            state.isFetching = false;
            state.isError = false;
            state.authenticated = false;
        }
    }
});

export const { reducer } = slice;

export const { request, success, failure, resetAuth } = slice.actions;

export const refreshLogin = (): Thunk => {

    return async (dispatch) => {
        try {

            const user = JSON.parse(localStorage.getItem(LS_USER) || "{}")
            
            dispatch(success(user))
            
        } catch (error) {
            console.error(error);
            
        }
    }
}

export const getUser = (): Thunk => {
    return async (dispatch) => {
        dispatch(request());
        try {
            const { data } = await axios.get(API_USER_BASE_URL);

            const {
                id: { value },
                name: { first },
                email,
                phone,
                picture: { thumbnail }
            } = data.results[0];

            const user = {
                id: value,
                username: first.toLowerCase(),
                email,
                phone,
                picture: thumbnail
            };

            setTimeout(() => {
                dispatch(success(user));
                localStorage.setItem(LS_USER, JSON.stringify(user))
            }, 2000);
        } catch (e) {
            dispatch(failure());
        }
    };
};
