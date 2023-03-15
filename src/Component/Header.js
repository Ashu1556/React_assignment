import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="main_container11">
          <h3 style={{ fontSize: "20px", color: "black" }}>
            Flex Business Pro
          </h3>
          <p style={{ color: "gray" }}>Clean and Modern Business Theme</p>
        </div>
        <div className="main_container1">
          <div>Home</div>
          <div>About Us</div>
          <div>Styleguide</div>
          <div>Blog</div>
          <div>Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
