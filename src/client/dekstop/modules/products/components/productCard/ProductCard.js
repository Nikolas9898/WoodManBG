import React from 'react';
import PropTypes from 'prop-types';
import ProductCardStyle from './ProductCard.module.css';
import {Link} from "react-router-dom";
import Datetime from 'react-datetime';
import moment from "moment";
const ProductCard = ({product}) => {
    return (
        <div className={ProductCardStyle.card_holder}>
            <img src={product.image} className={ProductCardStyle.card_image}/>

            <h1 className={ProductCardStyle.card_title}>
                {product.title}
            </h1>
            <div className={ProductCardStyle.date}>
                Добавен на:{" "}
                {moment(product.updateAt).format('DD/MM/YYYY')}
            </div>
        </div>
    );
};

ProductCard.propTypes = {

};

export default ProductCard;
