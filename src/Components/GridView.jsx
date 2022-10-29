import React from "react";
import styled from "styled-components";
import SingleProductCard from "./SingleProductCard";
import { motion } from "framer-motion";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="navbar"
      >
        <div className="container grid grid-three-column">
          {products.map((curElem) => {
            return <SingleProductCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  .container {
    max-width: 115rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      // background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 95%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.3s linear;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;
