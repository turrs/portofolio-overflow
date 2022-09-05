import { Typography, Avatar } from "antd";
import React from "react";

const { Text } = Typography;
import { Iavatar } from "../../assets/images";

const LeftContent = () => {
  return (
    <div className="flex md:pl-32 pl-0 md:pt-10 pt-0 flex-row md:flex-col static md:absolute">
      <div className="flex md:items-center pt-2 pr-5 pl-5 pb-5 ">
        <Avatar
          size={{ xs: 80, sm: 150, md: 150, lg: 150, xl: 300, xxl: 800 }}
          src={Iavatar}
        />
      </div>
      <div className="md:pt-10 md:pl-0 flex flex-col -mt-3 justify-center items-start  ">
        <div>
          <Text style={{ fontSize: 24 }}>Fatur Rahman</Text>
        </div>
        <div>
          <Text style={{ fontSize: 18 }} type="secondary">
            turrs
          </Text>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
