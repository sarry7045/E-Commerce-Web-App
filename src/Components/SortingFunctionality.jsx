import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/FilterContext";

const SortingFunctionality = () => {
  const { filter_products, grid_view, gridView, listView, sorting } =
    useFilterContext();

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      {windowSize.innerWidth > 700 ? (
        <div className="sorting-list--grid">
          <button
            className={grid_view ? "active sort-btn" : "sort-btn"}
            onClick={gridView}
          >
            <BsFillGridFill className="icon" />
          </button>

          <button
            className={!grid_view ? "active sort-btn" : " sort-btn"}
            onClick={listView}
          >
            <BsList className="icon" />
          </button>
        </div>
      ) : null}
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price (Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Sequence (A-Z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Sequence (Z-A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.6rem;
    cursor: pointer;
    border: 1.5px solid rgb(98 84 243);
    width: 95%;
    .sort-select--option {
      padding: 0.4rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 15px;
    }
  }
`;

export default SortingFunctionality;
