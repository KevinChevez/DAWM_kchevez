import React from "react";
import "../stylesheets/BotonClear.css";

const BotonClear = (props) => (
  <div className="btn-clear" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default BotonClear;
