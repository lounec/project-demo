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
import Grid from '@mui/material/Grid';
import  ProductCard from "../components/products/ProductCard";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    root: {
        marginBottom: 300
    }
})

const ProductsPage: React.FC = (): ReactElement => {
    const classes = useStyles()
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
            <Container maxWidth="md" className={classes.root}>
                <h1>Products</h1>
                {isFetching && <Loader />}
                {isError && <h1>Error loading data.</h1>}
                <Grid container spacing={2}>
                    {products.map((product, idx) => (
                        <Grid key={product.title + idx} item xs={4}>
                            <ProductCard   product={product} />
                        </Grid>
                        
                    ))}
                </Grid>
            </Container>
        </DefaultLayout>
    );
};

export default ProductsPage;
