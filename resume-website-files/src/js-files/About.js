import '../css-files/About.css';

import Green from '../other-files/green_color.png';
import Arthur from '../other-files/sir_arthur_1.png';

import React, { useEffect, useState , useRef} from 'react';

const About = () => {

    const mainTextAboutParentRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);

    const handleResize = () => {
        if (mainTextAboutParentRef.current) {
            setDivWidth(mainTextAboutParentRef.current.clientWidth);
        }
    };

    useEffect(() => {
        if (mainTextAboutParentRef.current) {
            setDivWidth(mainTextAboutParentRef.current.clientWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mainTextAboutParentRef]);

    const calculateFontSize = (minFontSize, maxFontSize) => {
        const minContainerWidth = 750;
      
        // Adjust the scaleFactor based on your requirements
        const scaleFactor = (Math.max(minContainerWidth, divWidth) / 750) * 2.5; // Using 750 as the reference width
      
        const fontSize = minFontSize * scaleFactor; // Assuming the initial font size is 10px
      
        return Math.min(maxFontSize, Math.max(minFontSize, fontSize)) + 'px';
    };

    return (
        <div className= 'MainTextAboutParent' id="About" ref={mainTextAboutParentRef}>
            <div className='MainTextAboutTitle MainTextAnimation'>
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
                {/* About */}
            </div>
            <div className='MainTextAboutBody' style={{ fontSize: calculateFontSize(4, 20) }}>
                <div className='MainTextAboutBodyCardsParent'>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent '>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        My favorite holiday is Halloween.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCardFixed'>
                                <div className='MainTextAboutBodyCardChosenCard'>
                                    I was born and raised in Orlando, Florida.
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I have a cat named Sir Arthur. take a look! &rarr;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCardFixed'>
                                <div className='MainTextAboutBodyCardChosenCard'>
                                    Hi, I'm Anne, a software developer.
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I love creepy video games like 'Little Nightmares'.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText" style={{overflow: 'hidden'}}>
                                        <img src={Arthur} alt="Arthur" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        Glacier National Park is my favorite park.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I really do hate tomatoes.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCardFixed'>
                                <div className='MainTextAboutBodyCardChosenCard'>
                                    I'm a fast learner, and am always willing to learn a new skill.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCardFixed'>
                                <div className='MainTextAboutBodyCardChosenCard'>
                                    I enjoy working with others, and collaberating on projects.
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I was the valedictorian of my high school class.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        My favorite dessert is crepes with cream cheese filling.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I love reading, and the smell of a new book.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        My favorite coding project is Unfair Chess. You can find it below!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        One day, I would love to own a 1967 Chevy Impala.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        My favorite color is this specific shade of green. &rarr; 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I think most cakes are too dry.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCardFixed'>
                                <div className='MainTextAboutBodyCardChosenCard'>
                                    I deliver clean and efficient code in a timely manner.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        <img src={Green} alt="Green Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCardFixed'>
                                <div className='MainTextAboutBodyCardChosenCard'>I'm never afraid to take on a new challenge.</div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
                                        I love victorian architecture.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;