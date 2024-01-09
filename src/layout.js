import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="home blog woocommerce theme-dokan woocommerce-js dokan-theme-dokan">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
