import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavLink = ({ text, suffix, style, href }) => {
  return (
    <div className="p-2 hover:p-2 hover:border-solid hover:rounded-[5px] hover:border-blue hover:shadow-lg hover:shadow-cyan-500/50">
      <Link style={style} suffix={suffix} to={href}>
        {text}
      </Link>
    </div>
  );
};

export default NavLink;
