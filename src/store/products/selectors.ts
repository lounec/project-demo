import { RootState } from "../types";
import { IProduct } from "./types";

export const selectIsFetching = (state: RootState): boolean =>
    state.products.isFetching;

export const selectIsError = (state: RootState): boolean =>
    state.products.isError;

export const selectProducts = (state: RootState): IProduct[] =>
    state.products.products;
