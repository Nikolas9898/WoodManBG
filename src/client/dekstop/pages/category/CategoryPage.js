import React from "react";
import Layout from "../../layout/layout";
import ProductsContainer from "../../modules/products/ProductsContainer";
import CategoryStyle from "./CategoryPage.module.css";

const CategoryPage = (props) => {
  return (
    <div className={CategoryStyle.CategoryPageHolder}>
      {" "}
      <Layout>
        <div className={CategoryStyle.Container}>
          <h1>Home</h1>
          <ProductsContainer />
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPage;
