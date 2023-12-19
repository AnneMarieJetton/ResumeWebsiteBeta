import React, { useEffect, useState } from 'react';
import Header from './Header';
import "../css-files/Home.css";
import PreLoader from './PreLoader';
import Moon from './Moon';
// import MainText from './MainText'
// import StarsBackdrop from './StarsBackdrop'

function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 7000)
    }, [])

    return (
        <div className="home">
            {loading 
            
            ? 
            
            <PreLoader />
            
            :

            <div>
              <Header />
              <div className='main__right'>
                {/* <MainText /> */}
                {/* <StarsBackdrop /> */}
                <Moon />
              </div>
            </div>

            }
        </div>
    )        
}

export default Home