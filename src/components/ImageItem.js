import React from "react";
import PropTypes from "prop-types";

const ImageItem = ({ src, title, text }) => {
  return (
    <div className="col-sm-4 px-sm-4 pb-5">
      <img src={src} />
      <h5 className="my-2 text-bold">{title}</h5>
      <p className="text-gray-soft">{text}</p>
    </div>
  );
};

ImageItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default ImageItem;
