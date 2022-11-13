import styled from "styled-components";
import FilterFunctionality from "../Components/FilterFunctionality";
import SortingFunctionality from "../Components/SortingFunctionality";
import ProductsGridList from "../Components/ProductsGrid-List";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterFunctionality />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <SortingFunctionality />
          </div>
          <div className="main-product">
            <ProductsGridList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
