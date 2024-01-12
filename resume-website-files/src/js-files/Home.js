import React, { useEffect, useState } from 'react';
import Header from './Header';
import "../css-files/Home.css";
import PreLoader from './PreLoader';
import Moon from './Moon';
import StarsBackdrop from './StarsBackdrop';
import MainText from './MainText';
import Spaceship from './Spaceship';

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3500)
    }, [])

    return (
        <div className="home">
            {loading 
            
            ? 
            
            <PreLoader />
            
            :

            <div className='main__right__parent'>
              <Header />
              <div className='main__right'>
                <MainText/>
                <StarsBackdrop/>
                <Spaceship/>
              </div>
            </div>

            }
        </div>
    )        
}

export default Home