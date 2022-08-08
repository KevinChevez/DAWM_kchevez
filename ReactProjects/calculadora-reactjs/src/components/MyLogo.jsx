import React from "react";
import myLogo from "../images/my-logo.png";
import "../stylesheets/MyLogo.css"

const MyLogo = () => (
  <div className="my-logo-container">
    <img src={myLogo} alt="Mi Logo" className="my-logo" />
  </div>
);

export default MyLogo;