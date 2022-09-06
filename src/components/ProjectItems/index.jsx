import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
const { Meta } = Card;

const ProjectItems = ({ image, title, description, url }) => {
  const { setUrl } = useContext(AppContext);
  const onShow = url => {
    setUrl(url);
  };
  return (
    <div className="bg-white rounded-[10px] p-2">
      <Card
        style={{
          width: 200,
        }}
        cover={<img alt="example" src={image} />}
        actions={[<EyeOutlined key="show" onClick={() => onShow(url)} />]}
      >
        <Meta title={title} description={description} />
      </Card>
    </div>
  );
};
export default ProjectItems;
