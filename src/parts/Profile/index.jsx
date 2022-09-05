import { Typography } from "antd";
import React from "react";
import Organization from "../Organizational";

const Profile = () => {
  const { Text } = Typography;
  return (
    <div className="p-5 md:max-w-[600px]">
      <div>
        <Text>
          Hello! my name is Fatur Rahman, and i enjoy make program is functional
          for a live. my interest in web development focusing front end
          developer using javascript and react library for make a simple
          component and reusable.
        </Text>
      </div>
      <div className="pt-5">
        <Text>
          everyday i'am focus on learning and analyzing into javascript and
          making react useful for making technology either in web development or
          mobile development
        </Text>
      </div>
      <div className="pt-5">
        <Text>
          I'am an alumnus of hasanuddin university with a GPA of 3.43 ,and i'am
          originally from makassar and now domiciled in Bandung.
        </Text>
      </div>
      <div className="pt-5">
        <Text>Organizational Experience</Text>
        <div>
          <Organization />
        </div>
      </div>
    </div>
  );
};

export default Profile;
