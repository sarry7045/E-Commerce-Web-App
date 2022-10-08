const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_DATA":
      const featureData = action.payload.filter((curEle) => {
        return curEle.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return {
        state,
      };
  }
};

export default ProductReducer;
