import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context";

const CardProject = () => {
  const { url } = useContext(AppContext);

  return (
    <div className="w-full h-full">
      <div className="p-[16px]">
        <iframe className="w-full h-[500px]" src={url}></iframe>
      </div>
    </div>
  );
};

export default CardProject;
