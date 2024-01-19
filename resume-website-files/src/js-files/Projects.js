import '../css-files/Projects.css';

import React, { useEffect, useState } from 'react';

import ReactLogo from '../other-files/react_white_logo.png';
import VueLogo from '../other-files/vue_white_logo.png';
import CppLogo from '../other-files/cpp_white_logo.png';
import SQLLogo from '../other-files/sql_white_logo.png';
import JavaLogo from '../other-files/java_white_logo.png';
import PythonLogo from '../other-files/python_white_logo.png';

import githubLogo from '../other-files/github_white_logo.png'

const Projects = () => {
    return (
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
    )
}

export default Projects;