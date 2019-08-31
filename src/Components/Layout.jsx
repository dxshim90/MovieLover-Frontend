import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  );
};

export default Layout;
