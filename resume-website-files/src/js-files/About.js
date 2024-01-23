import '../css-files/About.css';

import Green from '../other-files/green_color.png';
import Arthur from '../other-files/sir_arthur_1.png';

import React, { useEffect, useState } from 'react';

const About = () => {
    return (
        <div className= 'MainTextAboutParent' id="About">
            <div className='MainTextAboutTitle MainTextAnimation'>
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
                {/* About */}
            </div>
            <div className='MainTextAboutBody'>
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
                                        I love creepy video games like 'Little Nightmares' and 'Subnautica'.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardParent'>
                            <div className='MainTextAboutBodyCard'>
                                <div className='MainTextAboutBodyCardFront'></div>
                                <div className='MainTextAboutBodyCardBack'>
                                    <div className="MainTextAboutBodyCardBackText">
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
                                        My favorite dessert is crepes with cream cheese filling. Delicious!
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
                                        I love reading. there is nothing quite like the smell of a new book.
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
                                        My favorite color is green, but not just any green, This specific shade &rarr; 
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