import React from "react";
import PropTypes from "prop-types";
import ProductCardStyle from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ProductCard = ({ product }) => {
  return (
    <div className={ProductCardStyle.card_holder}>
      {console.log(product)}
      <img
        src={product.mainImagePath}
        className={ProductCardStyle.card_image}
      />
      <h1 className={ProductCardStyle.card_title}>{product.title}</h1>
      <div className={ProductCardStyle.category}>
          <FontAwesomeIcon icon={faTag} />
        Кухня
      </div>
      <div className={ProductCardStyle.date}>
        Добавен: {moment(product.updateAt).format("DD/MM/YYYY")}
      </div>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
