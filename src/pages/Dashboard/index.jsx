import { Button } from "antd";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
import { Header, LeftContent, MenuLink, Overview, Profile } from "../../parts";

const Dashboard = () => {
  const { menuKey } = useContext(AppContext);
  const componentsSwitch = key => {
    switch (key) {
      case "overview":
        return <Overview />;
      case "item2":
        return <Profile />;
      case "item3":
        return <h3>Coming soon </h3>;
      default:
        break;
    }
  };
  return (
    <div>
      <Header />
      <LeftContent />
      <MenuLink />
      <div className="flex  md:pt-50 pt-0 pr-0 pl-0 md:pr-[120px] md:pl-[200px] sm:pr-[120px] sm:pl-[200px] flex-row">
        <div className="md:w-1/4 w-0"></div>
        <div className="md:w-3/4 w-full">{componentsSwitch(menuKey)}</div>
      </div>
    </div>
  );
};

export default Dashboard;
