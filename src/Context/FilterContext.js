import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContact } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();
const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_Value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContact();

  const [state, dispatch] = useReducer(reducer, initialState);

  const gridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  const listView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [products, state.sorting_Value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, gridView, listView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterContextProvider, useFilterContext };
