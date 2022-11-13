import React, { useEffect } from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { MdSecurity } from "react-icons/md";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import { useProductContact } from "../Context/ProductContext";
import ImageSlider from "../Components/ImageSlider";
import { Container } from "../Helpers/Container";
import FormatPrice from "../Helpers/FormatPrice";
import StarsRatingFunctionality from "../Components/StarsRatingFunctionality";
import SinglePageFooterComp from "../Components/SinglePageFooterComp";
// import PageNavigation from "./PageNavigation";

const SINGLE_PRODUCT_API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContact();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${SINGLE_PRODUCT_API}?id=${id}`);
  }, []);

  // console.log("singleProduct", singleProduct);

  const {
    id: align,
    name,
    company,
    description,
    price,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  if (isSingleLoading) {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Loader type="Puff" color="rgb(98 84 243)" height={550} width={80} />
        </div>
      </>
    );
  }

  return (
    <Wrapper>
      {/* <PageNavigation title={name} /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.9 }}
        className="navbar"
      >
        <Container className="container">
          <div className="grid grid-two-column">
            <div className="product_images">
              <ImageSlider imgs={image} />
            </div>
            <div className="product-data">
              <h2 style={{ fontSize: "3rem" }}>{name}</h2>
              <StarsRatingFunctionality stars={stars} reviews={reviews} />
              <p className="product-data-price">
                MRP:
                <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Suraj Delivered </p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>

              <div className="product-data-info">
                <p>
                  Available:
                  <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span> {id} </span>
                </p>
                <p>
                  Brand :<span> {company} </span>
                </p>
              </div>
              {stock > 0 && <SinglePageFooterComp product={singleProduct} />}
            </div>
          </div>
        </Container>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 100%;
      /* height: 0.2rem; */
      border: 1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
