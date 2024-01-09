import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ href, src, id, title, subtitle, price, rating }) => {
  return (
    <div className="theme-card">
      <div className="theme-card__body">
        <a className="d-block" href={href}>
          <img
            data-src={src}
            data-sizes="auto"
            className="theme-card__img lazyautosizes ls-is-cached lazyloaded"
            sizes="450px"
            src={src}
          />
        </a>

        <a
          className="theme-card__body__overlay btn btn-brand btn-sm"
          target="_blank"
          href={`https://themes.getbootstrap.com/preview/?theme_id=${id}`}
        >
          Live preview
        </a>
      </div>
      <div className="theme-card__footer">
        <div className="theme-card__footer__item">
          <a
            className="theme-card__title mr-1"
            href="https://themes.getbootstrap.com/product/block-business-professional-template/"
          >
            {title}
          </a>
          <p className="theme-card__info"></p>
          <ul className="prod_cats_list">
            <li>
              <a href="https://themes.getbootstrap.com/product-category/landing-corporate/">
                {subtitle}
              </a>
            </li>
          </ul>{" "}
          <p></p>
        </div>
        <div className="theme-card__footer__item">
          <p className="theme-card__price">
            <span className="woocommerce-Price-amount amount">
              <span className="woocommerce-Price-currencySymbol">$</span>
              {price}
            </span>
          </p>
          <ul className="rating">
            {[0, 1, 2, 3, 4].map((item, index) => (
              <li
                key={index}
                className={`rating__item ${
                  index < rating ? "rating__item--active" : ""
                }`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
};

export default ImageCard;
