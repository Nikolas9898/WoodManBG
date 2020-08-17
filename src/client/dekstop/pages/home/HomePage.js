import React from "react";
import Layout from "../../layout/layout";
import HomeStyle from "./Home.module.css";
import ProductsContainer from "../../modules/products/productsList/ProductsContainer";

const HomePage = (props) => {
  return (
    <div className={HomeStyle.PageHolder}>
      {" "}
      <Layout>
        <div className={HomeStyle.Container}>
          <ProductsContainer />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
