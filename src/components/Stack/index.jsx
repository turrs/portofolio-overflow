import { Button } from "antd";
import React from "react";
import { Idevtools, Ireact, Itailwindui } from "../../assets/images";
import { SearchOutlined, ToolOutlined } from "@ant-design/icons";
import LinkGithub from "../LinkGithub";
const Stack = ({ name, description, image, link, type }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-[10px] w-[380px] h-[300px] shadow-md shadow-blue">
      <div className="flex flex-row">
        <img src={image} className="w-10 h-10" />
        <p className="flex pl-2 text-blue font-extrabold text-[26px] font-mono">
          {name}
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center flex-wrap max-w-[300px]">
          <p className="text-center">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-[#ebf5ff] p-1 rounded">
        <img src={Idevtools} className="w-[15px] h-[15px]" />
        <LinkGithub to={link} text="Development"></LinkGithub>
      </div>
    </div>
  );
};

export default Stack;
