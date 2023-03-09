import Button from '../../UI/Button';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

function MealItemForm(props){
  return <form className={classes.form}>
  <Input label = "Amount" input = {{
    id: 'amount',
    max: 5,
    min: 1,
    step: 1,
    type: Number,
    defaultValue : 1
  }} />
  <Button content = "+ Add"/>
  </form>
}
export default MealItemForm;