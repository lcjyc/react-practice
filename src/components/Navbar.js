import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a href="/" className="navbar-brand">
          Bootstrap Themes
        </a>
        <div className="d-flex ml-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#globalNavbar"
            aria-controls="globalNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="globalNavbar">
          <form
            className="form-inline form-navbar my-2 my-lg-0 order-2"
            action="https://themes.getbootstrap.com/shop/"
          >
            <i className="bi bi-search" style={{ color: "gray" }}></i>
            <input
              className="form-control"
              name="s"
              type="text"
              placeholder="Search"
            />
          </form>
          <ul className="navbar-nav mr-auto order-1">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div className="navbar-collapse navbar-top-collapse">
                  <ul id="menu-top-menu" className="nav navbar-nav">
                    <li
                      id="menu-item-601"
                      className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-601"
                    >
                      <a
                        title="Admin &amp; Dashboard"
                        href="https://themes.getbootstrap.com/product-category/admin-dashboard/"
                      >
                        Admin &amp; Dashboard
                      </a>
                    </li>
                    <li
                      id="menu-item-603"
                      className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-603"
                    >
                      <a
                        title="Landing &amp; Corporate"
                        href="https://themes.getbootstrap.com/product-category/landing-corporate/"
                      >
                        Landing &amp; Corporate
                      </a>
                    </li>
                    <li
                      id="menu-item-1537"
                      className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1537"
                    >
                      <a
                        title="Application"
                        href="https://themes.getbootstrap.com/product-category/application/"
                      >
                        Application
                      </a>
                    </li>
                    <li
                      id="menu-item-602"
                      className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-602"
                    >
                      <a
                        title="E-Commerce &amp; Retail"
                        href="https://themes.getbootstrap.com/product-category/ecommerce-retail/"
                      >
                        E-Commerce &amp; Retail
                      </a>
                    </li>
                    <li
                      id="menu-item-1538"
                      className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1538"
                    >
                      <a
                        title="Portfolio &amp; Blog"
                        href="https://themes.getbootstrap.com/product-category/portfolio-blog/"
                      >
                        Portfolio &amp; Blog
                      </a>
                    </li>
                    <li
                      id="menu-item-1539"
                      className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1539"
                    >
                      <a
                        title="Specialty"
                        href="https://themes.getbootstrap.com/product-category/specialty/"
                      >
                        Specialty
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page2">
                Why Our Themes?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/page3">
                The Guide
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-none d-lg-flex ml-2 order-3">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://themes.getbootstrap.com/signin/"
              >
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://themes.getbootstrap.com/my-account/"
              >
                Sign up
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-lg-none">
            <li className="nav-item-divider"></li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://themes.getbootstrap.com/signin/"
              >
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://themes.getbootstrap.com/my-account/"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
