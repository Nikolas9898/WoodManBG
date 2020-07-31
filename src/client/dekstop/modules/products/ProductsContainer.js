import React from "react";
// import image from "../../../../images/res_2de1e8afba5e34a3be85c09e61bfe9ad_450x450_nfdr.jpg";
import ProductsContainerStyle from "./ProductsContainer.module.css";
import ProductCard from "./components/productCard/ProductCard";

const image =
  "data:image/jpeg;base64,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";
const products = [
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
   },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
   },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
     },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
    },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
   },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro fffffff ffffffff fffff ffffffff ffffffffff ffffffffffff fffffffff ffffffffff",
    updateAt:'2020-07-31T17:56:32.863z'
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  }
  ,
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  }
  ,
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  },
  {
    id: 1,
    image: image,
    title: "Laptop Acer NItro",
  }
];
const ProductsContainer = (props) => {
  return (
    <div className={ProductsContainerStyle.ProductContainerHolder}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}

      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
      {/*<div className={ProductsContainerStyle.ProductCardHolder}>*/}
      {/*  <img src={image} />*/}
      {/*  <h1>Laptop Acer Nitro 5</h1>*/}
      {/*  <p>Кратко описание</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductsContainer;
