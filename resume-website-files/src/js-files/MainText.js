import '../css-files/MainText.css';
import React, { useEffect, useState } from 'react';
import Moon from './Moon';
import Asteroid from './Asteroid';
import Astronaught from '../other-files/true_astronaught_2_transparent.png';

import ReactLogo from '../other-files/react_white_logo.png';
import VueLogo from '../other-files/vue_white_logo.png';
import CppLogo from '../other-files/cpp_white_logo.png';
import SQLLogo from '../other-files/sql_white_logo.png';
import JavaLogo from '../other-files/java_white_logo.png';
import PythonLogo from '../other-files/python_white_logo.png';

import githubLogo from '../other-files/github_white_logo.png'
// import githubLogoPink from '../other-files/github_pink_logo.png'

const MainText = () => {

    const [email, setEmail] = useState('');
    const [emailContent, setEmailContent] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleContentChange = (event) => {
        setEmailContent(event.target.value);
    };

    const handleSendEmail = () => {
        // Implement the logic to send the email using the 'email' and 'emailContent' states
        console.log('Sending email:', email);
        console.log('Email content:', emailContent);
    };

    return(
        <div className='MainTextParent'>

            <div className= 'MainTextTitleParent' id="Home">
                <div className='MainTextTitleLeft'>
                    <div className='MainTextTitle MainTextAnimation'>
                        <span>H</span>
                        <span>e</span>
                        <span>l</span>
                        <span>l</span>
                        <span>o</span>
                        <span className='MainTextTitleUnderscore'>_</span>
                        {/* Hello. */}
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
                        {/* I'm Anne */}
                    </div>
                </div>
                <Moon/>
            </div>

            <div className= 'MainTextAboutParent' id="About">
                <div className='MainTextAboutTitle MainTextAnimation'>
                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span>
                    {/* Skills */}
                </div>
                <div className='MainTextAboutBody'>
                    {/* <ul>
                        <li>stuff</li>
                        <li>more stuff</li>
                        <li>even more stuff</li>
                    </ul> */}
                    {/* Hey there! Im a software developer born and raised in Orlando, Florida. My Hobbies include Painting, Hiking, and BLANK.
                    I am also a cat enthusiest, owning a mischevious and sporatic cat named Sir Arthur.<br /><br /> 
                    My most recent personal coding project, and the one I am most excited about, is BLANK (link found below), where I discover <br />the best and most efficient ways to annoy a user.<br /> */}
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
                </div>
                {/* <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={45}/> */}
            </div>

            <div className= 'MainTextSkillsParent' id="Skills">
                <div className='MainTextSkillsTitle MainTextAnimation'>
                    <span>S</span>
                    <span>k</span>
                    <span>i</span>
                    <span>l</span>
                    <span>l</span>
                    <span>s</span>
                    {/* Skills */}
                </div>
                <div className='MainTextSkillsBody'>
                    <div className='MainTextSkillsBodyLeft'>
                        <span className='MainTextLanguagesSubtitle'>Languages</span>
                        <span style={{ left: '13.33%' }}>Java</span>
                        <span style={{ left: '33.33%' }}>Python</span>
                        <span style={{ left: '83.33%' }}>C</span>
                        <span style={{ left: '63.33%' }}>C++</span>
                        <span style={{ left: '23.33%' }}>JavaScript</span>
                        <span style={{ left: '73.33%' }}>CSS</span>
                        <span style={{ left: '13.33%' }}>HTML</span>
                    </div>
                    <div className="AstronaughtParent">
                        <img className="Astronaught" src={Astronaught} alt="astronaught" />
                    </div>
                    <div className='MainTextSkillsBodyRight'>
                        <span className='MainTextToolsSubtitle'>Tools</span>
                        <span style={{ left: '73.33%' }}>React.JS</span>
                        <span style={{ left: '33.33%' }}>THREE.JS</span>
                        <span style={{ left: '83.33%' }}>Vue</span>
                        <span style={{ left: '43.33%' }}>SQL</span>
                        <span style={{ left: '63.33%' }}>Jenkins</span>
                        <span style={{ left: '13.33%' }}>Artifactory</span>
                        <span style={{ left: '43.33%' }}>Git</span>
                        <span style={{ left: '73.33%' }}>JIRA</span>
                        <span style={{ left: '53.33%' }}>Firebase</span>
                        <span style={{ left: '83.33%' }}>Stripe</span>
                        <span style={{ left: '33.33%' }}>Pygame</span>
                        <span style={{ left: '23.33%' }}>Postman</span>
                    </div>
                </div>
            </div>

            <div className= 'MainTextProjectsParent' id="Projects">
                <div className='MainTextProjectsTitle MainTextAnimation'>
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>c</span>
                    <span>t</span>
                    <span>s</span>
                    {/* projects */}
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
                                {/* <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogoPink} alt="GitHub" />
                                </a> */}
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
                                {/* <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogoPink} alt="GitHub" />
                                </a> */}
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
                                {/* <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogoPink} alt="GitHub" />
                                </a> */}
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
                                {/* <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogoPink} alt="GitHub" />
                                </a> */}
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
                                {/* <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogoPink} alt="GitHub" />
                                </a> */}
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
                                {/* <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogoPink} alt="GitHub" />
                                </a> */}
                                <a href="https://github.com/AnneMarieJetton" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className= 'MainTextExperienceParent' id="Experience">
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
                    {/* Experience */}
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
            </div>
            
            <div className= 'MainTextContactParent' id="Contact">
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
                    {/* Contact Me */}
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
            </div>
            {/* <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={145}/>
            <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={145}/> */}
        </div>
    )

}

export default MainText;
