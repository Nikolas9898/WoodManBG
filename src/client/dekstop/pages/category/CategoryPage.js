import React from "react";
import Layout from "../../layout/layout";
import CategoryStyle from "./CategoryPage.module.css";
import CategoryContainer from "../../modules/categories/CategoryContainer";

const CategoryPage = (props) => {
  const slug = props.match.params.slug;

  return (
    <div className={CategoryStyle.CategoryPageHolder}>
      {" "}
      <Layout>
        <div className={CategoryStyle.Container}>
          <CategoryContainer categorySlug={slug} />
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPage;
