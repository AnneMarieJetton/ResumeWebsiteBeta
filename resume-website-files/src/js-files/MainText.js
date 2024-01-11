import '../css-files/MainText.css';
import React, { useEffect, useState } from 'react';
import Moon from './Moon';
import Asteroid from './Asteroid';

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
                    Hey there! Im a software developer born and raised in Orlando, Florida. My Hobbies include Painting, Hiking, and BLANK.
                    I am also a cat enthusiest, owning a mischevious and sporatic cat named Sir Arthur.<br /><br /> 
                    My most recent personal coding project, and the one I am most excited about, is BLANK (link found below), where I discover <br />the best and most efficient ways to annoy a user.<br />
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
                        <ul className='MainTextSkillsBodyList'>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className='MainTextSkillsBodyRight'>
                        <span className='MainTextToolsSubtitle'>Tools</span>
                        <ul className='MainTextSkillsBodyList'>
                            <li>React.JS</li>
                            <li>THREE.JS</li>
                            <li>Vue</li>
                            <li>SQL</li>
                            <li>Jenkins</li>
                            <li>Artifactory</li>
                            <li>Git</li>
                            <li>JIRA</li>
                            <li>Firebase</li>
                            <li>Stripe</li>
                            <li>Pygame</li>
                            <li>Postman</li>
                        </ul>
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
                    <div className='MainTextExperienceBodySection1'>
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
                    <div className='MainTextExperienceBodySection2'>
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
                    <div className='MainTextExperienceBodySection3'>
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
