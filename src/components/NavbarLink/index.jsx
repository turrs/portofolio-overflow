import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavLink = ({ text, suffix, style, href }) => {
  return (
    <div className="px-2 pt-1">
      <Link style={style} suffix={suffix} to={href}>
        {text}
      </Link>
    </div>
  );
};

export default NavLink;
