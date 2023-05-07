import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function LinkRota(props) {
  return(
    <Link to={props.to} className="link">
      {props.children}
    </Link>
  )
}

export default LinkRota;