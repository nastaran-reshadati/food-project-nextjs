import Image from "next/image";
import React from "react";

const ProductImageTitle = ({product}) => {
  return (
    <div className="Product__card-image">
      <Image
      
        src={product.primary_image}
        width={530}
        height={500}
        placeholder="blur"
        blurDataURL={product.primary_image_blurDataURL}
        layout="responsive"
      />
    </div>
  );
};

export default ProductImageTitle;
