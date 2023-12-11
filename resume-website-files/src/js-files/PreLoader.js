import React, { useState, useEffect } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import '../css-files/PreLoader.css';

const PreLoader = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    loading 
    
    ?

    <div className="preLoaderSpinner">
      <div>
        <BounceLoader
          size={100}
          color={"#013621"}
          loading={true}
        />
      </div>
    </div>

    :

    <div className="welcomeText">
      Welcome
    </div>
  )

};

export default PreLoader;