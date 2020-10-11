import React from "react";
import ProductPreviewContainer from "../../modules/products/productPreview/ProductPreviewContainer";
import HomeStyle from "../home/Home.module.css";
import Layout from "../../layout/layout";

const ProductPreviewPage = (props) => {
  const productSlug = props.match.params.slug;

  return (
    <div>
      {" "}
      <Layout>
        <div className={HomeStyle.Container}>
          <ProductPreviewContainer productSlug={productSlug} />
        </div>
      </Layout>
    </div>
  );
};

export default ProductPreviewPage;
