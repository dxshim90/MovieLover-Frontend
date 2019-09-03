import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Components/Header/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer/Footer";

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
