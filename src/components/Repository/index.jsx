import React from "react";
import Icon, { BookOutlined } from "@ant-design/icons";
import LinkGithub from "../LinkGithub";
import { Typography } from "antd";
import { Ibook } from "../../assets/images";
const Repository = ({ to, text, stack }) => {
  const { Text } = Typography;
  const ImageBook = () => <img src={Ibook} />;
  return (
    <div>
      <div className="border rounded-[5px]  border-solid border-gray">
        <div className="p-4">
          <did className="flex flex-col">
            <div className="flex flex-row">
              <div className=" flex justify-center items-center">
                <Icon component={ImageBook} />
              </div>
              <div>
                <LinkGithub to={to} text={text}></LinkGithub>
              </div>
            </div>
            <div className="pt-5 flex flex-row items-center">
              {stack.javascript && (
                <>
                  <div className="bg-[#f1e05a] rounded-[50%] w-[12px] h-[12px]"></div>
                  <div className="pl-1 pr-1">
                    <Text>JavaScript</Text>
                  </div>
                </>
              )}
              {stack.css && (
                <>
                  <div className="bg-[#cf222e] rounded-[50%] w-[12px] h-[12px]"></div>
                  <div className="pl-1 pr-1">
                    <Text>Css</Text>
                  </div>
                </>
              )}
            </div>
          </did>
        </div>
      </div>
    </div>
  );
};

export default Repository;
