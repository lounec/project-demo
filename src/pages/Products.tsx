import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import { getProducts } from "../store/products";
import {
    selectProducts,
    selectIsFetching,
    selectIsError
} from "../store/products/selectors";

const ProductsPage: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);
    const isError = useSelector(selectIsError);
    const products = useSelector(selectProducts);
    console.log("isFetching ", isFetching);
    console.log("isError ", isError);
    console.log("products ", products);

    const loadData = (): void => {
        dispatch(getProducts());
    };

    useEffect(() => {
        console.log("isFetching => ", isFetching);
    }, [isFetching]);

    return (
        <DefaultLayout>
            <h1>Products</h1>
            {isFetching && <h1>Is fethcing ...</h1>}
            {isError && <h1>Error loading data.</h1>}
            <button onClick={loadData}>Load products</button>
            {products.map((product, idx) => (
                <h5 key={product.title + idx}>{product.title}</h5>
            ))}
        </DefaultLayout>
    );
};

export default ProductsPage;
