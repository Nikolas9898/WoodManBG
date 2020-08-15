import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "./service/Service";

import CategoryStyle from "./CategoryContainer.module.css";
import ProductCard from "../products/components/productCard/ProductCard";
const CategoryContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsByCategory(props.categorySlug).then((products) =>
      setProducts(products.products)
    );
  }, [props.categorySlug]);

  return (
    <div className={CategoryStyle.CategoryContainerHolder}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default CategoryContainer;
