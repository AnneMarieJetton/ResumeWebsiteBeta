import React, { useEffect } from "react";
import '../css-files/PreLoader.css';

const PreLoader = () => {
  return (
    <div className="preLoader">
        <img
          className="preLoader__gif"
          src="resume-website-files\src\other-files\Preloader plant gif without background.gif"
          alt=""
        />
        <img
          className="preLoader__gif2"
          src="https://monophy.com/media/DLlfuXewxLtjjiM4EK/monophy.gif"
          alt=""
        />
    </div>
  );
};

export default PreLoader;