import React from "react";
import PropTypes from "prop-types";

const ImageContent = ({ index, title, text, src }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`row align-items-center justify-content-between ${
        !isEven ? "mt-5 my-lg-5 pt-5" : ""
      }`}
    >
      {isEven && (
        <div className="col-lg-6 mt-5 order-2 order-lg-1">
          <img className="img-fluid mx-auto d-block" src={src} alt="" />
        </div>
      )}
      <div
        className={`col-lg-5 ${isEven ? "order-1 order-lg-2" : "mb-3 mb-lg-5"}`}
      >
        <h1 className="mb-2 text-bold w-75">{title}</h1>
        <p className="fs-16 text-gray-soft">{text}</p>
        {index === 1 && (
          <a
            className="btn btn-brand"
            href="https://bootstrap-themes.github.io/dashboard/docs/"
          >
            Explore the Dashboard docs
          </a>
        )}
      </div>
      {!isEven && (
        <div className="col-lg-6 mb-4 mt-4">
          <img className="img-fluid mx-auto d-block" src={src} alt="" />
        </div>
      )}
    </div>
  );
};

ImageContent.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
};

export default ImageContent;
