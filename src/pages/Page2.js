import React from "react";
import ImageContent from "../components/ImageContent";
import ImageItem from "../components/ImageItem";

const Page2 = () => {
  return (
    <>
      <main id="main" className="site-main main">
        <section className="section">
          <div className="container">
            <div className="row">
              <section className="hero hero--xs w-100 pt-0">
                <div className="container">
                  <h1 className="display-2 text-bold mb-3">
                    Themes Built for Developers.
                  </h1>
                  <h5 className="text-gray-soft text-regular">
                    Component-based frameworks designed and built by the best
                    Bootstrap creators in the world.
                  </h5>
                </div>
              </section>
              <section className="section pt-3 official-themes-page pb-0">
                <div className="screenshots-masonry">
                  <img
                    className="d-none d-lg-block"
                    src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/theme-masonry.jpg"
                  />
                  <img
                    className="d-block d-lg-none"
                    src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/theme-masonry-mobile.jpg"
                  />
                </div>
                <div className="container">
                  <div className="row align-items-center justify-content-center mb-1 mt-5 mb-md-5 text-center">
                    <div className="col-md-3 col-6 mb-5 mb-md-0 border-right">
                      <h6 className="mb-1">Average Rating</h6>
                      <div className="d-flex align-items-center justify-content-center">
                        <ul className="rating d-inline mb-0 mr-2">
                          <li className="rating__item rating__item--active"></li>
                          <li className="rating__item rating__item--active"></li>
                          <li className="rating__item rating__item--active"></li>
                          <li className="rating__item rating__item--active"></li>
                          <li className="rating__item rating__item--active"></li>
                        </ul>
                        <p className="fs-13 text-gray-soft d-inline">4.9/5</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-5 mb-md-0 border-right">
                      <h6 className="mb-1">Our Guarantee</h6>
                      <p className="fs-13 text-gray-soft">100% money back.</p>
                    </div>
                    <div className="col-md-3 col-6 mb-5 mb-md-0 border-right">
                      <h6 className="mb-1">Free Updates</h6>
                      <p className="fs-13 text-gray-soft">
                        Never pay for an update.
                      </p>
                    </div>
                    <div className="col-md-3 col-6 mb-5 mb-md-0">
                      <h6 className="mb-1">Free Support</h6>
                      <p className="fs-13 text-gray-soft">6 months included </p>
                    </div>
                  </div>

                  <div className="row align-items-center justify-content-between py-4 ">
                    <div className="col-xl-5 col-lg-6 pt-4">
                      <h1 className="mb-2 text-bold w-75">
                        Built as frameworks from the ground up.
                      </h1>
                      <p className="fs-16 text-gray-soft">
                        Each theme is architected as an extension of Bootstrap,
                        built for a specific set of problems. This means not
                        only extending the base components of Bootstrap, but
                        also adding completely new components, utilities, and
                        plugins.
                      </p>
                    </div>
                    <div className="col-lg-12 mb-5">
                      <img
                        className="img-fluid mx-auto framework-progression-graphic d-none d-lg-block"
                        src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/framework-progression.png"
                        alt=""
                      />
                      <img
                        className="img-fluid mx-auto framework-progression-graphic d-block d-lg-none"
                        src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/framework-progression-mobile.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  <ImageContent
                    index={0}
                    title="Every theme gets reviewed by us."
                    text="The Boostrap team reviews every new theme and update
                  against a set of guidelines we wrote. These cover tons
                  of factors including design, component flexibility,
                  className naming, directory structure, build tooling, plugin
                  reusability…the list goes on and on."
                    src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/review-process.svg"
                  />

                  <ImageContent
                    index={1}
                    title="Build tools and full documention."
                    text="Components, plugins, and build tools are all thoroughly
                    documented with live examples and markup for easier use
                    and customization—just like Bootstrap itself. Not
                    comfortable diving that deep? No worries, you just use
                    the compiled CSS and examples pages!"
                    src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/terminal.jpg"
                  />

                  <div className="row align-items-center justify-content-between mb-5 pt-5 mb-lg-3 text-center">
                    <ImageItem
                      src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/components-icon.svg"
                      title="Components and examples"
                      text="Each theme features new components built to match
                    Bootstrap's level of quality and re-usability."
                    />
                    <ImageItem
                      src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/sliders-icon.svg"
                      title="Tons of variables"
                      text="Themes inherit their style from custom variables, like
                    Bootstrap, so basic customization is easy."
                    />
                    <ImageItem
                      src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/official-themes/wrenches-icon.svg"
                      title="Source files"
                      text="Each theme includes all the source and compiled files,
                    making deep customization possible."
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page2;
