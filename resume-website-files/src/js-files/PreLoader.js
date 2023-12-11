import React, { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import '../css-files/PreLoader.css';

const PreLoader = () => {

  return (
    // <ClipLoader
    //   size={50}
    //   color={"#FFFFFF"}
    //   loading={loading}
    // />
    <div className="preLoader">
      <div className="PreLoaderAnimation">
        <BounceLoader
          size={100}
          color={"#FFFFFF"}
          loading={true}
        />
      </div>
    </div>
  )

};

export default PreLoader;