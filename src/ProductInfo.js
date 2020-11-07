import React from "react";
import "./ProductInfo.css";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import { Link } from "@material-ui/core";

function ProductInfo({ image, title, price }) {
  const [{ product }, dispatch] = useStateValue();

  if (!product) {
    return <Link to="/" />;
  }

  return (
    <div className="product">
      <Product
        id={product.id}
        title={product.title}
        image={product.image}
        price={product.price}
      />

      <div className="product__info">
        <p>
          Product info Product info Product info Product info Product info
          Product info Product info Product info Product info Product info
          Product info Product info Product info Product info Product info
          Product info Product info Product info Product info Product info
          Product info Product info Product info Product info Product info
          Product info Product info Product info Product info Product info
          Product info Product info Product info Product info Product info
          Product info Product info
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;
