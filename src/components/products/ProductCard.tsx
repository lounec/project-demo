import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../store/products"
import { selectCart } from '../../store/products/selectors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles({
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: 240,
    whiteSpace: "nowrap"
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "box",
    lineClamp: 3,
    boxOrient: "vertical"
  },
  price: {
    fontWeight: "bold"
  },
  actions: {
    justifyContent: "space-between"
  }
})

export default function ProductCard({ product }: any) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id, title, description, image, price } = product
  const cart = useSelector(selectCart)
  
  const handleAddToCart = (): void => {

    dispatch(addToCart(id))
  }
     
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className={classes.description}>
          {description.slice(0, 100)}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleAddToCart} disabled={cart.includes(id)} size="small">Add to cart</Button>
        <span className={classes.price}>${ price }</span>
      </CardActions>
    </Card>
  );
}
