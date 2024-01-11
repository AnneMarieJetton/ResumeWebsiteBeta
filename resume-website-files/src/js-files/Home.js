import React, { useEffect, useState } from 'react';
import Header from './Header';
import "../css-files/Home.css";
import PreLoader from './PreLoader';
import Moon from './Moon';
import StarsBackdrop from './StarsBackdrop';
import MainText from './MainText';
import Spaceship from './Spaceship';

function Home() {
    // const [loading, setLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 7000)

    //   const loadImageAsync = (src) => {
    //     return new Promise((resolve, reject) => {
    //         console.log(src);
    //         const image = new Image();
    //         image.onload = () => resolve();
    //         image.onerror = (errorEvent) => {
    //             console.error(`Error loading image from ${src}:`, errorEvent);
    //             reject(new Error(`Error loading image from ${src}: ${errorEvent.message || 'Unknown error'}`));
    //         };
    //         image.src = src;
    //     });
    // };

    //   const loadAssets = async () => {
    //     try {
    //         await loadImageAsync("../other-files/transparent_moon.png");
    //         // await loadImageAsync("../other-files/linkedin_white_logo.png");
    //         // await loadImageAsync("../other-files/github_white_logo.png");
    //         // await loadImageAsync("../other-files/email_white_logo.png");
    
    //         // Set loading to false when everything is loaded
    //         setLoading(false);
    //     } catch (error) {
    //         console.error(error);
    //         // Handle the error, you might want to set loading to false even on error
    //         setLoading(false);
    //     }
    //   };

    //   loadAssets();
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