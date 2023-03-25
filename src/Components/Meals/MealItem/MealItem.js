import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

function MealItem(props){

  const cartContext = useContext(CartContext);

  function onAddToCart(enteredAmount){
    cartContext.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount : enteredAmount
    });
  }

  return <li className={classes.meal}>
    <div >
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{Number(props.price).toFixed(2)}</div>
    </div>
    <div>
      <MealItemForm onAddToCart = {onAddToCart} id = {props.id}/>
    </div>
  </li>
}

export default MealItem;