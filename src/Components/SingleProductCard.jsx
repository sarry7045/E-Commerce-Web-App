import React from "react";
import { NavLink } from "react-router-dom";
import FormamatPrice from "../Helpers/FormatPrice";

const SingleProductCard = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div style={{ paddingBottom: "1rem" }} className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              {<FormamatPrice price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default React.memo(SingleProductCard);
