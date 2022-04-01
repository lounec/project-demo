import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import { getProducts, resetProducts } from "../store/products";
import {
    selectProducts,
    selectIsFetching,
    selectIsError
} from "../store/products/selectors";
import Loader from "../components/global/Loader";
import Container from '@mui/material/Container';

const ProductsPage: React.FC = (): ReactElement => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);
    const isError = useSelector(selectIsError);
    const products = useSelector(selectProducts);

    useEffect(() => {
        !products.length && dispatch(getProducts());

        return () => {
            console.log("quit");

            dispatch(resetProducts());
        };
    }, []);

    return (
        <DefaultLayout>
            <Container maxWidth="md">
                <h1>Products</h1>
                {isFetching && <Loader />}
                {isError && <h1>Error loading data.</h1>}
                {products.map((product, idx) => (
                <h5 key={product.title + idx}>{product.title}</h5>
                ))}
            </Container>
        </DefaultLayout>
    );
};

export default ProductsPage;
