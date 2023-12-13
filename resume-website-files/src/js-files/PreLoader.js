import React, { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import '../css-files/PreLoader.css';

const PreLoader = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  return (
    loading 
    
    ?

    <div className="preLoaderSpinner">
      <div>
        <BounceLoader
          size={100}
          color={"#080808"}
          loading={true}
        />
      </div>
    </div>

    :

    <div className="welcomeTextParent">
      <div className="welcomeText">
        Welcome
      </div>
    </div>
  )

};

export default PreLoader;