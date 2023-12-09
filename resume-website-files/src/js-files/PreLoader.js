import React, { useState, useEffect } from "react";
import '../css-files/PreLoader.css';

const PreLoader = () => {

  const [showPot, setShowPot] = useState(false);

  useEffect(() => {

    const timeoutId1 = setTimeout(() => {
      setShowPot(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId1);
    };

  })

  return (
    <div className="preLoader">
        {showPot && <Pot/>}
    </div>
  );
};

const Pot = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        margin: '20px',
      }}
    >
      This is a square!
    </div>
  )
}

export default PreLoader;