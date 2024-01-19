import '../css-files/MainText.css';

import Title from './Title';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

import React, { useEffect, useState } from 'react';
import Moon from './Moon';
import Asteroid from './Asteroid';
import Astronaught from '../other-files/true_astronaught_2_transparent.png';
import UFO from '../other-files/ufo_again.png';
import Laser from './Laser';

import ReactLogo from '../other-files/react_white_logo.png';
import VueLogo from '../other-files/vue_white_logo.png';
import CppLogo from '../other-files/cpp_white_logo.png';
import SQLLogo from '../other-files/sql_white_logo.png';
import JavaLogo from '../other-files/java_white_logo.png';
import PythonLogo from '../other-files/python_white_logo.png';

import githubLogo from '../other-files/github_white_logo.png'
// import githubLogoPink from '../other-files/github_pink_logo.png'

// const startCoordinates = { x: 20, y: 30 };
// const startCoordinates2 = { x: 40, y: 50 };

// const endCoordinates = { x: 60, y: 80 };
// const endCoordinates2 = { x: 100, y: 110 };

// console.log("startCoordinates:", startCoordinates);
// console.log("startCoordinates2:", startCoordinates2);

const MainText = () => {

    //-----------------email logic----------------------------------

    // const [email, setEmail] = useState('');
    // const [emailContent, setEmailContent] = useState('');

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handleContentChange = (event) => {
    //     setEmailContent(event.target.value);
    // };

    // const handleSendEmail = () => {
    //     // Implement the logic to send the email using the 'email' and 'emailContent' states
    //     console.log('Sending email:', email);
    //     console.log('Email content:', emailContent);
    // };

    //-----------------Laser logic----------------------------------

    // const [startCoordinates, setStartCoordinates] = useState({ x: 0, y: 0 });
    // const [endCoordinates, setEndCoordinates] = useState({ x: 200, y: 200 });

    // useEffect(() => {
    //     // Set the positions of start and end images (replace with your logic)
    //     const startImage = document.getElementById('UFO');
    //     const endImage = document.getElementById('UFO2');

    //     const startCoordinatesRect = startImage.getBoundingClientRect();
    //     const endCoordinatesRect = endImage.getBoundingClientRect();

    //     setStartCoordinates({ x: startCoordinatesRect.x, y: startCoordinatesRect.y });
    //     setEndCoordinates({ x: endCoordinatesRect.x, y: endCoordinatesRect.y });
    // }, []);
    // const startCoordinates = { x: 20, y: 30 };
    // const startCoordinates2 = { x: 40, y: 50 };

    return(
        <div className='MainTextParent'>

            {/* <div className= 'MainTextTitleParent' id="Home">
                <div className='MainTextTitleLeft'>
                    <div className='MainTextTitle MainTextAnimation'>
                        <span>H</span>
                        <span>e</span>
                        <span>l</span>
                        <span>l</span>
                        <span>o</span>
                        <span className='MainTextTitleUnderscore'>_</span>
                    </div>
                    <div className='MainTextSubtitle MainTextAnimation'>
                        <span>I</span>
                        <span>'</span>
                        <span>m</span>
                        <span>&nbsp;</span>
                        <span>A</span>
                        <span>n</span>
                        <span>n</span>
                        <span>e</span>
                    </div>
                </div>
                <Moon/>
            </div> */}
            <Title/>

            {/* <div className= 'MainTextAboutParent' id="About">
                <div className='MainTextAboutTitle MainTextAnimation'>
                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span>
                </div>
                <div className='MainTextAboutBody'>
                    <div className='MainTextAboutBodyCardsParent'>
                        <div className='MainTextAboutBodyCardColumn'>
                            <div className='MainTextAboutBodyCardParent '>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCardFixed'>
                                    <div className='MainTextAboutBodyCardChosenCard'>CHOSEN</div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardColumn'>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCardFixed'>
                                    <div className='MainTextAboutBodyCardChosenCard'>CHOSEN</div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
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
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCardFixed'>
                                    <div className='MainTextAboutBodyCardChosenCard'>CHOSEN</div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardColumn'>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCardFixed'>
                                    <div className='MainTextAboutBodyCardChosenCard'>CHOSEN</div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
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
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
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
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCardFixed'>
                                    <div className='MainTextAboutBodyCardChosenCard'>CHOSEN</div>
                                </div>
                            </div>
                        </div>
                        <div className='MainTextAboutBodyCardColumn'>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCardFixed'>
                                    <div className='MainTextAboutBodyCardChosenCard'>CHOSEN</div>
                                </div>
                            </div>
                            <div className='MainTextAboutBodyCardParent'>
                                <div className='MainTextAboutBodyCard'>
                                    <div className='MainTextAboutBodyCardFront'></div>
                                    <div className='MainTextAboutBodyCardBack'>
                                        <div className="MainTextAboutBodyCardBackText">
                                            text
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
            <About/>

            {/* <div className= 'MainTextSkillsParent' id="Skills">
                <div className='MainTextSkillsTitle MainTextAnimation'>
                    <span>S</span>
                    <span>k</span>
                    <span>i</span>
                    <span>l</span>
                    <span>l</span>
                    <span>s</span>
                </div>
                <div className='MainTextSkillsBody'>
                    <div className='MainTextSkillsBodyLeft'>
                        <span className='MainTextLanguagesSubtitle' style={{ left: '36%' }}>Languages</span>
                        <span style={{ left: '13.33%', top: '10%' }}>Java</span>
                        <span style={{ left: '33.33%', top: '25%' }}>Python</span>
                        <span style={{ left: '83.33%', top: '40%' }}>C</span>
                        <span style={{ left: '63.33%', top: '55%' }}>C++</span>
                        <span style={{ left: '23.33%', top: '70%' }}>JavaScript</span>
                        <span style={{ left: '73.33%', top: '85%' }}>CSS</span>
                        <span style={{ left: '13.33%', top: '100%' }}>HTML</span>
                    </div>
                    <div className="AstronaughtParent">
                        <img className="Astronaught" src={Astronaught} alt="astronaught" />
                    </div>
                    <div className='MainTextSkillsBodyRight'>
                        <span className='MainTextToolsSubtitle' style={{ left: '43%' }}>Tools</span>
                        <span style={{ left: '33.33%', top: '10%' }}>React.JS</span>
                        <span style={{ left: '63.33%', top: '18%' }}>THREE.JS</span>
                        <span style={{ left: '23.33%', top: '26%' }}>Vue</span>
                        <span style={{ left: '73.33%', top: '34%' }}>SQL</span>
                        <span style={{ left: '13.33%', top: '42%' }}>Jenkins</span>
                        <span style={{ left: '63.33%', top: '50%' }}>Artifactory</span>
                        <span style={{ left: '33.33%', top: '58%' }}>Git</span>
                        <span style={{ left: '83.33%', top: '66%' }}>JIRA</span>
                        <span style={{ left: '53.33%', top: '74%' }}>Firebase</span>
                        <span style={{ left: '73.33%', top: '82%' }}>Stripe</span>
                        <span style={{ left: '13.33%', top: '90%' }}>Pygame</span>
                        <span style={{ left: '63.33%', top: '98%' }}>Postman</span>
                    </div>
                </div>
            </div> */}
            <Skills/>

            {/* <div className= 'MainTextProjectsParent' id="Projects">
                <div className='MainTextProjectsTitle MainTextAnimation'>
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>c</span>
                    <span>t</span>
                    <span>s</span>
                </div>
                <div className='MainTextProjectsBody'>
                    <div className='MainTextProjectsBodyLeft'>
                        <div className='ProjectContainer'>
                            <div className='ProjectContainerImage'>
                                <img className="" src={VueLogo} alt="VueLogo" />
                            </div>
                            <div className='ProjectContainerText'>
                                <span className='ProjectContainerTextTitle'>Vue Project</span>
                                <ul className='ProjectContainerTextList'>
                                    <li>
                                        What the project is
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        Proof of Vue Knowledge
                                    </li>
                                </ul>
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className='ProjectContainer'>
                            <div className='ProjectContainerImage'>
                                <img className="" src={CppLogo} alt="CppLogo" />
                            </div>
                            <div className='ProjectContainerText'>
                                <span className='ProjectContainerTextTitle'>C++ Project</span>
                                <ul className='ProjectContainerTextList'>
                                    <li>
                                        What the project is
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        Proof of C++ Knowledge
                                    </li>
                                </ul>
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className='ProjectContainer'>
                            <div className='ProjectContainerImage'>
                                <img className="" src={SQLLogo} alt="SQLLogo" />
                            </div>
                            <div className='ProjectContainerText'>
                                <span className='ProjectContainerTextTitle'>SQL Project</span>
                                <ul className='ProjectContainerTextList'>
                                    <li>
                                        What the project is
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        Proof of SQL Knowledge
                                    </li>
                                </ul>
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='MainTextProjectsBodyRight'>
                        <div className='ProjectContainer'>
                            <div className='ProjectContainerImage'>
                                <img className="" src={JavaLogo} alt="JavaLogo" />
                            </div>
                            <div className='ProjectContainerText'>
                                <span className='ProjectContainerTextTitle'>Java Project</span>
                                <ul className='ProjectContainerTextList'>
                                    <li>
                                        What the project is
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        Proof of Java Knowledge
                                    </li>
                                </ul>
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className='ProjectContainer'>
                            <div className='ProjectContainerImage'>
                                <img className="" src={PythonLogo} alt="PythonLogo" />
                            </div>
                            <div className='ProjectContainerText'>
                                <span className='ProjectContainerTextTitle'>Python Project</span>
                                <ul className='ProjectContainerTextList'>
                                    <li>
                                        What the project is
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        Proof of Python Knowledge
                                    </li>
                                </ul>
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className='ProjectContainer'>
                            <div className='ProjectContainerImage'>
                                <img className="" src={ReactLogo} alt="ReactLogo" />
                            </div>
                            <div className='ProjectContainerText'>
                                <span className='ProjectContainerTextTitle'>React Project</span>
                                <ul className='ProjectContainerTextList'>
                                    <li>
                                        What the project is
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        bla
                                    </li>
                                    <li>
                                        Proof of React Knowledge
                                    </li>
                                </ul>
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Projects/>

            {/* <div className= 'MainTextExperienceParent' id="Experience">
                <div className='MainTextExperienceTitle MainTextAnimation'>
                    <span>E</span>
                    <span>x</span>
                    <span>p</span>
                    <span>e</span>
                    <span>r</span>
                    <span>i</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>e</span>
                </div>
                <div className='MainTextExperienceBody'>
                    <div className='MainTextExperienceBodySection'>
                        <div className='MainTextExperienceBodyTitles'>
                            <span className='MainTextExperienceBodyCompanyName'>company name</span>
                            <span className='MainTextExperienceBodyDate'>March 2023 - Current</span>
                        </div>
                        <span className='MainTextExperienceBodyJobTitle'>Junior Software Developer<br /></span>
                        <span className='MainTextExperienceBodyJobDescription'>BLANK is a small start up located in BLANK, Utah. Their goal is to incorporate AI into the Psychology <br />space, to help veterens and public workers with their mental health.<br /><br /></span>
                        <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                        <ul className='MainTextExperienceBodyRespAndAcomList'>
                            <li>Redesigned Website to give it a professional look</li>
                            <li>Developed tools to assist with document storage</li>
                            <li>Assisted in upgrading storage system and setting up SQL system</li>
                        </ul>
                    </div>
                    <div className='MainTextExperienceBodySection'>
                        <div className='MainTextExperienceBodyTitles'>
                            <span className='MainTextExperienceBodyCompanyName'>Cubic Transportation Systems</span>
                            <span className='MainTextExperienceBodyDate'>March 2022 - March 2023</span>
                        </div>
                        <span className='MainTextExperienceBodyJobTitle'>Computer Science Intern<br /></span>
                        <span className='MainTextExperienceBodyJobDescription'>Cubic is a transportation company based out of San Diego, California. As an intern, I worked with a scrum <br />team to develop internal tools that were used by senior developers for larger development projects, as <br />well as debugging and documenting pre-existing code.<br /><br /></span>
                        <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                        <ul className='MainTextExperienceBodyRespAndAcomList'>
                            <li>Daily Scrum Meetings</li>
                            <li>Led the development of a YAML document generation tool that increased the speed of YAML tasks by 99%</li>
                            <li>Upgraded pre-existing high level software</li>
                        </ul>
                    </div>
                    <div className='MainTextExperienceBodySection'>
                        <div className='MainTextExperienceBodyTitles'>
                            <span className='MainTextExperienceBodyCompanyName'>Utah State University</span>
                            <span className='MainTextExperienceBodyDate'>August 2018 - March 2022</span>
                        </div>
                        <span className='MainTextExperienceBodyJobTitle'>Computer Science Tutor<br /></span>
                        <span className='MainTextExperienceBodyJobDescription'>During my years at USU, I worked as a tutor among my peers and lower classmen to teach subject material, <br />complete assignments, and study for tests.<br /><br /></span>
                        <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                        <ul className='MainTextExperienceBodyRespAndAcomList'>
                            <li>Scheduled and kept appointments for tutoring</li>
                            <li>Instructed in groups for team learning</li>
                            <li>Worked alongside other tutors</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <Experience/>
            
            {/* <div className='MainTextEducationParent' id="Education">
                <div className='MainTextEducationTitle MainTextAnimation'>
                    <span>E</span>
                    <span>d</span>
                    <span>u</span>
                    <span>c</span>
                    <span>a</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                </div>
                <div className='MainTextEducationBody'>
                    <div className='MainTextEducationBodyRow1'>
                        <div className="UFOParent">
                            <img className="UFO" id="UFO" src={UFO} alt="UFO" />
                        </div>
                        <div className='MainTextEducationBodyText'>
                            <span className='MainTextEducationBodyTextSubtitle'>Utah State University</span>
                            <span className='MainTextEducationBodyTextSubtitle2'>Bachelor of Computer Science</span>
                            <span className='MainTextEducationBodyTextSubtitle2'>Minor In Mathematics</span>
                            <span className='MainTextEducationBodyTextSubtitle2'>Magna Cum Laude</span>
                        </div>
                        <div className="UFOParent">
                            <img className="UFO2" id="UFO2" src={UFO} alt="UFO" />
                        </div>
                    </div>
                </div>
            </div> */}
            <Education/>

            {/* <div className= 'MainTextContactParent' id="Contact">
                <div className='MainTextContactTitle MainTextAnimation'>
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span>&nbsp;</span>
                    <span>M</span>
                    <span>e</span>
                </div>
                <div className='MainTextContactBody'>
                    <div className='MainTextEmailParent'>
                        <div className='MainTextEmailDestinationInput'>
                            <label className='EmailInputLabel' htmlFor="recipientEmailInput">To: </label>
                            <input
                                type="email"
                                id="recipientEmailInput"
                                className="EmailInput"
                                value='annemariejetton@gmail.com'
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className='MainTextEmailDestinationInput'>
                            <label className='EmailInputLabel' htmlFor="senderEmailInput">From: </label>
                            <input
                                type="email"
                                id="senderEmailInput"
                                className="EmailInput"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div className='MainTextEmailContentInput'>
                            <textarea
                                id="contentInput"
                                className="ContentInput"
                                value={emailContent}
                                onChange={handleContentChange}
                            />
                        </div>

                        <button onClick={handleSendEmail}>Send</button>
                    </div>

                    <div className='MainTextContactMessage'>
                        Interested in contacting me? click any of the three links on the side bar, or you can write me an email right here! Happy Coding {'<'}3
                    </div>

                </div>
            </div> */}
            <Contact/>
            {/* <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={145}/>
            <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={145}/> */}
        </div>
    )

}

export default MainText;
