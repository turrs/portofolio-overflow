import React, { useContext } from "react";
import { Menu } from "antd";
import "./index.css";
import {
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { AppContext } from "../../context";

const MenuLink = () => {
  const { Item } = Menu;
  const { menuKey, setMenuKey } = useContext(AppContext);
  const componentsSwitch = key => {
    setMenuKey(key);
  };
  return (
    <div className="md:pt-10 pt-0">
      <Menu
        mode="horizontal"
        className="flex justify-center"
        defaultSelectedKeys={["overview"]}
        selectedKeys={menuKey}
        onClick={e => componentsSwitch(e.key)}
      >
        <Item key="overview" icon={<HomeOutlined />}>
          Overview
        </Item>
        <Item key="item2" icon={<UserOutlined />}>
          Profile
        </Item>
        <Item key="item3" icon={<AppstoreOutlined />}>
          Playground
        </Item>
      </Menu>
    </div>
  );
};

export default MenuLink;
