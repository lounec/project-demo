import { RootState } from "../types";
import { IUser } from "./types";

export const selectIsFetching = (state: RootState): boolean =>
    state.auth.isFetching;

export const selectIsError = (state: RootState): boolean => state.auth.isError;

export const selectUser = (state: RootState): IUser | null => state.auth.user;

export const selectAuthenticated = (state: RootState): boolean =>
    state.auth.authenticated;
