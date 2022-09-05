import React from "react";
import { BookOutlined } from "@ant-design/icons";
import { Typography } from "antd";
const Repository = () => {
  const { Text } = Typography;
  return (
    <div>
      <div className="border rounded-[5px]  border-solid border-gray">
        <div className="p-4">
          <did className="flex flex-col">
            <div>
              <BookOutlined />
              <Text style={{ padding: 5 }}>Training Data On</Text>
            </div>
            <div className="pt-5">Css</div>
          </did>
        </div>
      </div>
    </div>
  );
};

export default Repository;
