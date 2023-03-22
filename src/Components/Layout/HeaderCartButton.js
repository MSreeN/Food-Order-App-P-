import CartIcon from "../Cart/CartIcon"
import Button from "../UI/Button";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

  return <Button button ={{
    "className" : classes.button ,
     "type" : "",
     onClick: props.onClick
  }} >
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
  </Button>
}

export default HeaderCartButton;