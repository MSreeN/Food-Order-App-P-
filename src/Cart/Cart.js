import Button from "../Components/UI/Button";
import Modal from "../Components/UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "b1", name: "sushi", amount: 2, price: 55 }].map((cartItem) => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );
  console.log(cartItems);

  return (
    <Modal onClick = {props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>55.66</span>
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
