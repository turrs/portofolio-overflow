import { Typography } from "antd";
import React from "react";
import { useContext } from "react";
import { CardProject, LabelSection } from "../../components";
import CarouselProject from "../../components/CarouselProject";
import { AppContext } from "../../context";
import { Header, MenuLink } from "../../parts";
import ListStack from "../../parts/ListStack";

const Project = () => {
  const { Title } = Typography;
  const { url, show } = useContext(AppContext);

  return (
    <div className="bg-[#efefef] w-full h-full">
      <Header />
      {show && <CardProject />}
      <div className="flex justify-center">
        <div className="flex flex-col p-5">
          <div className="flex justify-center">
            <LabelSection label="My Recent Work" />
          </div>
          <CarouselProject />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col p-5 justify-center">
          <div className="flex justify-center">
            <LabelSection label="My Stack Project" />
          </div>
          <ListStack />
        </div>
      </div>
    </div>
  );
};

export default Project;
