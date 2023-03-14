import Button from "../Components/UI/Button";
import classes from "./Cart.module.css"

function Cart(){
  cartItems = <ul>
    {[{id: 'b1', name : "sushi", amount: 2, price: 55}].map(cartItem  => cartItem.name)}
  </ul>

  return <div>
    {}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>55.66</span>
    </div>
    <div className={classes.actions}>
      <Button className={classes['button--alt']}>Close</Button>
      <Button className={classes.button}>Order</Button>
    </div>
  </div>
}

export default Cart;