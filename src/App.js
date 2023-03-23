import { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }

  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <CartProvider>
       {cartIsShown && <Cart onClose = {hideCartHandler}/>}
      <Header openCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
