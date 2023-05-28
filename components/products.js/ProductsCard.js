import React from "react";
import burgerimg from "../../public/images/b8.jpg";
import { SlBasket } from "react-icons/sl";
import StartRating from "./datails/StartRating";
import ProductsPrice from "./ProductsPrice";
import ProductImageTitle from "./ProductImageTitle";

const ProductsCard = ({ product }) => {
  return (
    <div className="Product__card my-3">
      <div className="Product__card-body">
        <ProductImageTitle product={product} />

        <div className="Product__card-title text-center my-2">
          {product.name}
        </div>
        <div className="text-center my-2">{product.description}</div>
        <div className="Product__card-info d-flex justify-content-between align-items-center">
          <ProductsPrice product={product} />

          <div className="product__card-icon">
            <SlBasket />
          </div>
        </div>
        <StartRating />
      </div>
    </div>
  );
};

export default ProductsCard;
