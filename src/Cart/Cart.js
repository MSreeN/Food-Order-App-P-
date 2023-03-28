import { useContext } from "react";
import Button from "../Components/UI/Button";
import Modal from "../Components/UI/Modal";
import CartContext from "../Store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartContext = useContext(CartContext);
  // console.log(cartContext.items);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          onAdd={cartItemAddHandler.bind(null, cartItem)}
          onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
          amount = {cartItem.amount}
        />
      ))}
    </ul>
  );

  function cartItemAddHandler(item) {
    cartContext.addItem({...item, "amount" : 1});
  }
  function cartItemRemoveHandler(id) {}
  const hasItems = cartContext.items.length > 0;
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  // console.log(cartContext.totalAmount);
  // console.log(cartItems);

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button
          button={{
            className: classes["button--alt"],
            onClick: props.onClose,
          }}
        >
          Close
        </Button>
        {hasItems && (
          <Button
            button={{
              className: classes.button,
            }}
          >
            Order
          </Button>
        )}
        {/* <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button> */}
      </div>
    </Modal>
  );
}

export default Cart;
