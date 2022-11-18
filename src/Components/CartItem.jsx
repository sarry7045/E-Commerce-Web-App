import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";
import FormatPrice from "../Helpers/FormatPrice";
import ProductQuantityIncDec from "./ProductQuantityIncDec";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, cartProductDecrement, cartProductIncrement } =
    useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <ProductQuantityIncDec
        amount={amount}
        setDecrease={() => cartProductDecrement(id)}
        setIncrease={() => cartProductIncrement(id)}
      />

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash
          color="red"
          className="remove_icon"
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

// export default React.memo(CartItem);
export default CartItem;
