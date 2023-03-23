import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  ///using the cartContext
  const cartContext = useContext(CartContext)
  const noOfCartItems = cartContext.items.reduce((acc, cVal) => {
    return acc + cVal.amount;
  },0)
  return <Button button ={{
    "className" : classes.button ,
     "type" : "",
     onClick: props.onClick
  }} >
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{noOfCartItems}</span>
  </Button>
}

export default HeaderCartButton;