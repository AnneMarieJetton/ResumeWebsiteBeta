//Files
import '../css-files/AboutCard.css';

//Resources

//Other
import React, { useEffect, useState , useRef} from 'react';

//Card in the about section. Will either be a regular card or a chosen card depending on the props.
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