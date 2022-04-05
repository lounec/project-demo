import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import { makeStyles } from "@mui/styles"
import { useSelector } from "react-redux";
import { selectCart, selectProducts } from "../store/products/selectors";
import Container from '@mui/material/Container';
import { removeFromCart } from "../store/products";
import clsx from "clsx"

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
    },
    total: {
        marginTop: 30
    },
    titleTotal: {
        fontWeight: "bold"
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

    const getTotal = () => {
        
        if (!cart.length) return 0

        let total = 0
        
        for (const id of cart) {
            const product = products.find((elem) => elem.id === id)
            
            if (product) {
                 total += product.price
             }
            
        }

        return total
    }


    return (
        <DefaultLayout>
            <Container maxWidth="md">
                <h1>Cart</h1>
                {!cart.length ? <em>Cart empty</em> : null}
                
                {cart.length? (<ul className={classes.listWrapper}>

                {cart.map((id, idx) => {
                    const product = products.find(product => product.id === id)
                    

                    if(!product) return null
                    
                    const {title, price, id: prodId} = product

                    
                    return (<li key={id + idx + prodId} className={classes.item}>
                        <span className={classes.title}>{title}</span>
                        <span className={classes.price}>${price}</span>
                        <span className={classes.remove} onClick={() => handleRemove(id)}>Remove</span>
                    </li>)
                })}
                    
                    <li className={clsx(classes.item, classes.total)}>
                        <span className={clsx(classes.title, classes.titleTotal)}>Total</span>
                        <span className={classes.price}>${getTotal()}</span>
                    </li>

            </ul>): null}
            </Container>
        </DefaultLayout>
    );
};

export default CartPage;
