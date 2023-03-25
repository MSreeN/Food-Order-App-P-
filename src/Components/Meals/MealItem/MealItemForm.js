import { useContext, useRef } from "react";
import CartContext from "../../../Store/cart-context";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const cartContext = useContext(CartContext);
  const amountRef = useRef();
  function submitHandler(e){
    e.preventDefault();
    
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
    </form>
  );
}
export default MealItemForm;
