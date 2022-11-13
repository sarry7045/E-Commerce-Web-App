import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import ProductQuantityIncDec from "./ProductQuantityIncDec";
import { useCartContext } from "../Context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setcolor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount > stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:{" "}
          {colors.map((curColor, index) => {
            return (
              <button
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                style={{ backgroundColor: curColor }}
                key={index}
                onClick={() => setcolor(curColor)}
              >
                {color === curColor ? (
                  <FaCheck className="checkStyle" size={13} />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>
      <ProductQuantityIncDec
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <motion.div
          className="box"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 1000, damping: 10 }}
        >
          <button className="addToCartButton" style={{ Size: "10rem" }}>
            Add To Cart
          </button>
        </motion.div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default React.memo(AddToCart);
