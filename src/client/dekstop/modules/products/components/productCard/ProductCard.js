import React from "react";
import ProductCardStyle from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ProductCard = ({ product }) => {
  return (
    <div className={ProductCardStyle.card_holder}>
      <img
        src={product.mainImagePath}
        alt={"ProductImage"}
        className={ProductCardStyle.card_image}
      />
      <h1 className={ProductCardStyle.card_title}>{product.title}</h1>
      <div className={ProductCardStyle.category}>
        <FontAwesomeIcon icon={faTag} />
        {product.category}
      </div>
      <div className={ProductCardStyle.date}>
        Добавен: {moment(product.updateAt).format("DD/MM/YYYY")}
      </div>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
