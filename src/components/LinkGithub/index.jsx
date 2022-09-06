import React from "react";
import { Typography } from "antd";
const LinkGithub = ({ to, text }) => {
  const Text = Typography;
  return (
    <a target="_blank" rel="noreferrer" href={to}>
      <Text style={{ padding: 5, color: "#1890ff", fontWeight: 600 }}>
        {text}
      </Text>
    </a>
  );
};

export default LinkGithub;
