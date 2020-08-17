import React from "react";

const DetailsThumb = ({ images, handleChangeImage }) => {
  if (images) {
    return (
      <div className="thumb">
        {images.map((img, index) => (
          <img
            src={img.imagePath}
            alt={img._id}
            key={index}
            onClick={() => handleChangeImage(img)}
          />
        ))}
      </div>
    );
  } else {
    return <div>Nqma nishto</div>;
  }
};

export default DetailsThumb;
