import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__item">
            <form
              action="//getbootstrap.us13.list-manage.com/subscribe/post?u=e3428dd6b8fda73bc5ba8b6e6&amp;id=198881a019"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              novalidate=""
            >
              <div className="d-md-flex justify-content-between align-items-center">
                <div className="form-group">
                  <h5 className="mb-1">Get new themes in your inbox!</h5>
                  <div className="form-text mt-0">
                    New themes or big discounts. Never spam.
                  </div>
                </div>
                <div id="signup_footer" className="d-flex align-items-start">
                  <div className="form-group w-100 mr-2">
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_e3428dd6b8fda73bc5ba8b6e6_198881a019"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <input
                      id="mce-EMAIL"
                      className="footer__email-input form-control form-control--muted"
                      name="EMAIL"
                      type="email"
                      aria-describedby="footerEmail"
                      placeholder="Email address"
                    />
                  </div>
                  <input
                    className="btn btn-brand"
                    type="submit"
                    value="Subscribe"
                    name="subscibe"
                    id="mc-embedded-subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="footer__item d-lg-flex justify-content-lg-between align-items-lg-center">
            <ul id="menu-seller-footer" className="nav sub-nav footer__sub-nav">
              <li
                id="menu-item-1333"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1333"
              >
                <a
                  title="Help Center"
                  href="https://themes.zendesk.com/hc/en-us"
                >
                  Help Center
                </a>
              </li>
              <li
                id="menu-item-1335"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1335"
              >
                <a
                  title="Terms of Service"
                  href="https://themes.getbootstrap.com/terms/"
                >
                  Terms of Service
                </a>
              </li>
              <li
                id="menu-item-1334"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1334"
              >
                <a
                  title="Licenses"
                  href="https://themes.getbootstrap.com/licenses/"
                >
                  Licenses
                </a>
              </li>
              <li
                id="menu-item-49443"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49443"
              >
                <a
                  title="Sell Themes"
                  href="https://themes.getbootstrap.com/sell/"
                >
                  Sell Themes
                </a>
              </li>
            </ul>{" "}
            <p className="hidden-sm-down d-none d-lg-block">
              Trying to redownload a theme? Use our{" "}
              <a href="https://themes.getbootstrap.com/redownload/">
                redownload page.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
