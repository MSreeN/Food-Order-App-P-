import { useContext, useRef, useState } from "react";
import CartContext from "../../../Store/cart-context";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const cartContext = useContext(CartContext);
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  function submitHandler(e){
    e.preventDefault();
    const enteredAmount = +amountRef.current.value;
    if(enteredAmount <0 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  }
  return (
    <form className={classes.form} onSubmit = {submitHandler}>
      <Input ref = {amountRef}
        label="Amount"
        input={{
          id: "amount_"+props.id,
          max: '5',
          min: '1',
          step: '1',
          type: "number",
          defaultValue: '1',
        }}
      />
      <Button button = {{
        content: "+Add"
      }} />
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
}
export default MealItemForm;
