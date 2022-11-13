import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductQuantityIncDec = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus size={14} />
        </button>
        <div className="amount-style">
          <h5>{amount}</h5>
        </div>
        <button onClick={() => setIncrease()}>
          <FaPlus size={14} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductQuantityIncDec);
