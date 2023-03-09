import { Fragment } from "react";

import classes from './Header.module.css'
import meals from '../../Assets/meals.jpg'

const Header = (props) => {
  return <Fragment>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
    </header>
    <div className = {classes['main-image']}>
      <img src = {meals}  alt = "A table full of meals!"></img>
    </div>
  </Fragment>
}

export default Header;