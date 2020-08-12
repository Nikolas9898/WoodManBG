import React, { useState, useEffect } from "react";
import ProductsContainerStyle from "./ProductsContainer.module.css";
import ProductCard from "./components/productCard/ProductCard";
import axios from "axios";

const ProductsContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/product").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className={ProductsContainerStyle.ProductContainerHolder}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
