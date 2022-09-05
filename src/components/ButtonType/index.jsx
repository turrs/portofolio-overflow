import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const ButtonType = ({ type, text, suffix, style, href }) => {
  return (
    <Button type={type} style={style} suffix={suffix} href={href}>
      {text}
    </Button>
  );
};

ButtonType.propTypes = {
  type: PropTypes.string.isRequired,
  suffix: PropTypes.object,
  text: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string,
};

export default ButtonType;
