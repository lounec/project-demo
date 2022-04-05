import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/products/selectors';

const useStyles = makeStyles({
    root: {
        position: "relative",
        display: "inline-flex",
        marginRight: 20,
        cursor: "pointer"
    },
    count: {
        position: "absolute",
        top: -6,
        right: -6,
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        width: 18,
        height: 18,
        borderRadius: "50%",
        backgroundColor: "red",
        fontSize: 14,
        lineHeight: "14px",
        color: "#fff"
    }
})

const Cart = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const cart = useSelector(selectCart)

    const handleClick = () => {
        navigate("/cart")
    }

    return (
        <div className={classes.root} onClick={handleClick}>
            <span className={classes.count}>{cart.length}</span>
            <ShoppingCartIcon color="info" />
        </div>
    )
}

export default Cart