import React from "react";
import Image from "next/image";

import "./Loading.scss";

//Preloader Component
const Loading = () => {
  return (
    <div className="preLoader">
      <Image
        src="/assets/common/preloader.svg"
        alt="preloader"
        width={1000}
        height={1000}
      />
    </div>
  );
};

//Export
export default Loading;
