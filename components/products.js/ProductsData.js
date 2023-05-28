import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsData = ({ products, index }) => {
  return (
    <div className="row" key={index}>
      {products.map((item, index) => (
        <div
          key={index}
          className="col-xs-12 col-s-12 col-md-4 col-lg-4 col-xl-4"
        >
          <ProductsCard product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductsData;
