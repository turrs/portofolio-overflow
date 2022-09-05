import { GithubOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ style }) => {
  return (
    <div className="border-gray rounded=[25px]">
      <Input style={style} suffix={<GithubOutlined />} />
    </div>
  );
};

export default SearchBar;
