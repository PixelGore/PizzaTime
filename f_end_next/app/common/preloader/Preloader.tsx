import React from "react";
import Image from "next/image";

import preLoader from "../../../assets/common/preLoader.svg";
import "./preloader.scss";

//Preloader Component
let PreLoader: React.FC = () => {
  return (
    <div className="preLoader">
      <Image src={preLoader} alt="preloader" />
    </div>
  );
};

//Export
export default PreLoader;
