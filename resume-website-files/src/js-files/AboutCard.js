import '../css-files/AboutCard.css';

import Green from '../other-files/green_color.png';
import Arthur from '../other-files/sir_arthur_1.png';

import React, { useEffect, useState , useRef} from 'react';

const AboutCard = (props) => {
    const { CardBackText, Chosen } = props;

    const renderContent = () => {
        if (Chosen === true) {
            return (
                <div className='MainTextAboutBodyCardParent'>
                    <div className='MainTextAboutBodyCardFixed'>
                        <div className='MainTextAboutBodyCardChosenCard'>
                            {CardBackText}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='MainTextAboutBodyCardParent '>
                    <div className='MainTextAboutBodyCard'>
                        <div className='MainTextAboutBodyCardFront'></div>
                        <div className='MainTextAboutBodyCardBack'>
                            <div className="MainTextAboutBodyCardBackText">
                                {CardBackText}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return renderContent();
    
}

export default AboutCard;