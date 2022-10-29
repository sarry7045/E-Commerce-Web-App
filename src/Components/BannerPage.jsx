import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Helpers/Button";
import { motion } from "framer-motion";

const MainPageCompo = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="navbar"
      >
        <div className="container">
          <div className="grid grid-two-column">
            <div className="hero-section-data">
              <p className="intro-data" style={{ marginBottom: "0.1rem" }}>
                Welcome to {name}
              </p>
              <h1 style={{ fontSize: "54px" }}>Shop-Mart</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio unde optio quo ipsum, beatae, minus et quam obcaecati
                nihil pariatur voluptatem quas cumque fugiat ex, maiores
                temporibus ipsam accusamus architecto iste voluptas. Itaque,
                iusto id,temporibus ipsam accusamus architecto iste voluptas.
              </p>
              <NavLink>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 1000, damping: 10 }}
                >
                  <Button>Shop Now</Button>
                </motion.div>
              </NavLink>
            </div>
            <div className="hero-section-image">
              <figure>
                <img
                  src="Images/Shopping.jpeg"
                  alt="Main Page"
                  className="img-style"
                />
              </figure>
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      // background-color: rgba(81, 56, 238, 0.4);
      background-color: rgb(98 84 243);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      // background-color: rgba(81, 56, 238, 0.4);
      background-color: rgb(98 84 243);
    }
  }
`;

export default MainPageCompo;
