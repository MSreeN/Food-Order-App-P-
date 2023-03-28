import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import Button from "../UI/Button";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  ///using the cartContext

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartContext = useContext(CartContext);
  const {items} = cartContext;
  const noOfCartItems = items.reduce((acc, cVal) => {
    return acc + cVal.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`
  useEffect(() => {
    if(items.length < 1) return
    setBtnIsHighlighted(true);
    const timeOutId = setTimeout(function(){
      setBtnIsHighlighted(false);
    },300);
    return () => {
      clearTimeout(timeOutId);
    }
     

  }, [items])
  return (
    <Button
      button={{
        className: btnClasses,
        type: "",
        onClick: props.onClick,
      }}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </Button>
  );
};

export default HeaderCartButton;
