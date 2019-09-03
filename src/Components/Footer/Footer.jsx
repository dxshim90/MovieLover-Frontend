import React from "react";
import "./Footer.css";
import StickyFooter from "react-sticky-footer";

const Footer = props => {
  return (
    <StickyFooter
      stickyStyles={{
        backgroundColor: "rgba(255,255,255,.8)",
        padding: "2rem"
      }}
    >
      <div className="footer-con">
        <footer className="footer">
          <p className="footer-text">Created by Daniel Shimield</p>
        </footer>
      </div>
    </StickyFooter>
  );
};

export default Footer;
