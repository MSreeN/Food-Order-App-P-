import { useContext } from "react";
import Button from "../Components/UI/Button";
import Modal from "../Components/UI/Modal";
import CartContext from "../Store/cart-context";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartContext = useContext(CartContext);
  console.log(cartContext.items);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((cartItem) => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );

  const totalAmount = cartContext.items.reduce((acc, cVal) =>{
    return Math.floor(acc) + cVal.price
  },0)
  console.log(cartItems);

  return (
    <Modal onClick = {props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{Math.floor(totalAmount)}</span>
      </div>
      <div className={classes.actions}>
        <Button
          button={{
            "className": classes["button--alt"],
            onClick: props.onClose
          }}
        >
          Close
        </Button>
        <Button
          button={{
            "className": classes.button,
          }}
        >
          Order
        </Button>
        {/* <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button> */}
      </div>
    </Modal>
  );
}

export default Cart;
