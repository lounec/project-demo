import React, { MouseEventHandler, ReactElement } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import { makeStyles } from "@mui/styles"
import { useSelector } from "react-redux";
import { selectCart, selectProducts } from "../store/products/selectors";
import Container from '@mui/material/Container';
import { removeFromCart } from "../store/products";

const useStyles = makeStyles({
    listWrapper: {
        padding: 0,
        margin: 0
    },
    item: {
        display: "flex",
        justifyItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
        borderBottom: "1px solid #ccc",

        "&:last-child": {
            border: "none"
        }
    },
    title: {},
    price: {
        fontWeight: "bold"
    },
    remove: {
        fontSize: 14,
        color: "red",
        cursor: "pointer"
    }
})

const CartPage = (): ReactElement => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const products = useSelector(selectProducts);
    const cart = useSelector(selectCart);

    const handleRemove = (id: number): void => {
        dispatch(removeFromCart(id))
    }


    return (
        <DefaultLayout>
            <Container maxWidth="md">
                <h1>Cart</h1>
                {!cart.length ? <em>Cart empty</em> : null}
                
                {cart.length? (<ul className={classes.listWrapper}>

                {cart.map((id, idx) => {
                    const product = products.filter(product => product.id === id)
                    console.log("product", product);
                    

                    if(!product) return null
                    
                    const {title, price, id: prodId} = product[0]

                    
                    return (<li key={id + idx + prodId} className={classes.item}>
                        <span className={classes.title}>{title}</span>
                        <span className={classes.price}>${price}</span>
                        <span className={classes.remove} onClick={() => handleRemove(id)}>Remove</span>
                    </li>)
               })}

            </ul>): null}
            </Container>
        </DefaultLayout>
    );
};

export default CartPage;
