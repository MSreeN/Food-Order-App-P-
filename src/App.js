import { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }

  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <Fragment>
       {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header openCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
