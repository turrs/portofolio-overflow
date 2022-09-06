import React from "react";
import "./index.css";
const LabelSection = ({ label }) => {
  return (
    <div className=" flex justify-left ">
      <p className="shadow-md shadow-[#1890ff] font-bold bg-white rounded-[5px] p-2">
        {label}
      </p>
    </div>
  );
};

export default LabelSection;
