import React, { useEffect, useState } from "react";
import "./ProductPreviewContainer.css";
import DetailsThumb from "./components/DetailsThumb";
import { getProductBySlug } from "./service/Service";

const ProductPreviewContainer = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductBySlug(props.productSlug).then((product) => {
      setProduct(product.product);
    });
  }, [props.productSlug]);

  function handleChangeMainImage(image) {
    setProduct((prevState) => ({
      ...prevState,
      mainImagePath: image.imagePath,
    }));
  }

  return (
    <div className="app">
      <div className="details" key={1}>
        <div className="big-img">
          <img src={product.mainImagePath} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{product.title}</h2>
          </div>
          {/*<Colors colors={item.colors} />*/}

          <p>{product.description}</p>

          <DetailsThumb
            images={product.galleryImagesPaths}
            handleChangeImage={handleChangeMainImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewContainer;
