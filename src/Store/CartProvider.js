import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat();
    // const hasItem = updatedItems.find(item => {
    //   item.name === action.item.name;
    // })
    // if(!hasItem){
    //   updatedItems.push(item);
    // }
    // else{
    //   hasItem.amount = hasItem.amount+1
    // }

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if(existingItem){
        const updatedItem = {
        ...existingItem,
        amount : existingItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    else{
      updatedItems = [...state.items].concat(action.item)
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItemFromCartHandler(id) {}
  // console.log(cartState);
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
