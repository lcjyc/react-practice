import React from "react";
import ImageCard from "../components/ImageCard";

const Page1 = () => {
  return (
    <>
      <main id="main" className="site-main main">
        <section className="hero">
          <div className="container">
            <img
              src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png"
              srcset="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png 1x, https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack@2x.png 2x"
            />
            <h1 className="display-1 text-bold">Build anything</h1>
            <h5 className="text-gray-soft text-regular">
              Themes built by or reviewed by Bootstrap's creators.
            </h5>
            <a
              className="button button-brand btn-lg mb-5 mb-lg-2"
              href="/page2"
            >
              Why our themes?
            </a>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="theme-cards-holder">
              <div className="theme-cards__heading">
                <div>
                  <h5 className="theme-cards__title">Latest</h5>
                  <p className="text-gray-soft">
                    Most recently added to our collection.
                  </p>
                </div>
                <a
                  className="theme-cards__heading__button btn btn-outline-brand btn-sm"
                  href="https://themes.getbootstrap.com/shop/?orderby=date"
                >
                  View all
                </a>
              </div>
              <ul className="row">
                <li className="col-6">
                  <ImageCard
                    href="https://themes.getbootstrap.com/product/block-business-professional-template/"
                    src="https://themes.getbootstrap.com/wp-content/uploads/2023/10/Block-Business-Professional-Template-540x405.jpg"
                    id={143914}
                    title="Block – Business / Professional HTML Template"
                    subtitle="Landing &amp; Corporate"
                    price="49.00"
                    rating={5}
                  />
                </li>
                <li className="col-6">
                  <ImageCard
                    href="https://themes.getbootstrap.com/product/themebau-minimal-portfolio-react/"
                    src="https://themes.getbootstrap.com/wp-content/uploads/2023/09/themebau_preview-540x405.jpg"
                    id={143022}
                    title="Themebau – Portfolio &amp; Agency Template [React]"
                    subtitle="Portfolio &amp; Blog"
                    price="49.00"
                    rating={4}
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page1;
