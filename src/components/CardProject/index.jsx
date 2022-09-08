import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context";
import { CloseSquareOutlined, ExpandAltOutlined } from "@ant-design/icons";
const CardProject = () => {
  const { url, setShow } = useContext(AppContext);
  const closeShow = () => {
    setShow(false);
  };
  const goLink = url => {
    window.open(`${url}`, "_blank");
  };
  return (
    <div className="w-full h-full">
      <div className="p-[16px]">
        <div className="flex justify-end w-full">
          <div className="p-1">
            <div
              className="bg-white rounded-[5px] p-1 flex items-center justify-center hover:bg-sky-700"
              onClick={() => goLink(url)}
            >
              <ExpandAltOutlined
                style={{
                  color: "#1890ff",
                  fontSize: 20,
                }}
              />
            </div>
          </div>
          <div className="p-1">
            <div
              className="bg-white rounded-[5px] p-1 flex items-center justify-center hover:bg-sky-700"
              onClick={closeShow}
            >
              <CloseSquareOutlined style={{ color: "red", fontSize: 20 }} />
            </div>
          </div>
        </div>
        <iframe className="w-full h-[500px]" src={url}></iframe>
      </div>
    </div>
  );
};

export default CardProject;
