import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();
const getLocalCartData = () => {
  let localCartdata = localStorage.getItem("ShopMartData");
  if (localCartdata === []) {
    return [];
  } else {
    return JSON.parse(localCartdata);
  }
};

const initialState = {
  //   cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const cartProductIncrement = (id) => {
    dispatch({
      type: "CART_PRODUCT_INCREMENT",
      payload: id,
    });
  };

  const cartProductDecrement = (id) => {
    dispatch({
      type: "CART_PRODUCT_DECREMENT",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    localStorage.setItem("ShopMartData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        cartProductIncrement,
        cartProductDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
