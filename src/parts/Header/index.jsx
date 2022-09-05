import { Avatar, Image, Input } from "antd";
import { AlertOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Iavatar, IGithub } from "../../assets/images";
import { ButtonType, NavLink, SearchBar } from "../../components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row flex-wrap bg-[#1890ff] p-5 -m3 ">
      <div className="pl-5 pr-5 md:pt-0 pt-3">
        <Link to="/">
          <img
            className="w-[32px] rounded-[30px] bg-white h-[32px]"
            src={IGithub}
          />
        </Link>
      </div>
      <div className="md:w-[300px] w-[260px] p-3 md:p-0">
        <SearchBar style={{ borderRadius: 5, width: "100%" }} />
      </div>
      <div className="flex flex-row">
        {/* <NavLink
          style={{ color: "white" }}
          type="link"
          text="Pull request"
          href="/pull-request"
        /> */}
        <NavLink style={{ color: "white" }} type="link" text="Home" href="/" />
        <NavLink
          style={{ color: "white" }}
          type="link"
          text="Project"
          href="/project"
        />
        {/* <NavLink
          style={{ color: "white" }}
          type="link"
          text="Explore"
          href="/explore"
        /> */}
      </div>
      <div className="flex justify-end grow">
        <div className="pr-5">
          <AlertOutlined style={{ color: "white" }} />
        </div>
        <div className="pr-5">
          <PlusOutlined style={{ color: "white" }} />
        </div>
        <div>
          <Avatar src={<Image src={Iavatar}></Image>} />
        </div>
      </div>
    </div>
  );
};

export default Header;
