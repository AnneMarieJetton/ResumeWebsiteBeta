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
                            <span className='ProjectContainerTextTitle'>BagIt.com</span>
                            <ul className='ProjectContainerTextList'>
                                <li>
                                    An online grocery shopping experience Created using Vue.js.
                                </li>
                                <li>
                                    Use of reusable components
                                </li>
                                <li>
                                    Use of APIs
                                </li>
                                <li>
                                    Proof of Vue Knowledge
                                </li>
                            </ul>
                            <a href="https://github.com/AnneMarieJetton/BagIt" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className='ProjectContainer'>
                        <div className='ProjectContainerImage'>
                            <img className="" src={CppLogo} alt="CppLogo" />
                        </div>
                        <div className='ProjectContainerText'>
                            <span className='ProjectContainerTextTitle'>C++ Todo List Application</span>
                            <ul className='ProjectContainerTextList'>
                                <li>
                                    A Todo list created with C++
                                </li>
                                <li>
                                    Use of external files
                                </li>
                                <li>
                                    Use of GUI tools
                                </li>
                                <li>
                                    Proof of C++ Knowledge
                                </li>
                            </ul>
                            <a href="https://github.com/AnneMarieJetton/CppTodoList" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className='ProjectContainer'>
                        <div className='ProjectContainerImage'>
                            <img className="" src={SQLLogo} alt="SQLLogo" />
                        </div>
                        <div className='ProjectContainerText'>
                            <span className='ProjectContainerTextTitle'>SQL Covid Data Exploration</span>
                            <ul className='ProjectContainerTextList'>
                                <li>
                                    A deep dive into the covid data from 2020, This project makes use of SQL to understand and learn from the data.
                                </li>
                                <li>
                                    Use of Tableau
                                </li>
                                <li>
                                    Proof of SQL Knowledge
                                </li>
                            </ul>
                            <a href="https://github.com/AnneMarieJetton/SQLCovidDataExploration" className="github__project__link" target="_blank" rel="noopener noreferrer">
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
                            <span className='ProjectContainerTextTitle'>Whats the password?</span>
                            <ul className='ProjectContainerTextList'>
                                <li>
                                    A fun password generator...where there are far too many rules.
                                </li>
                                <li>
                                    Use of Apis
                                </li>
                                <li>
                                    Use of GUI tools
                                </li>
                                <li>
                                    Proof of Java Knowledge
                                </li>
                            </ul>
                            <a href="https://github.com/AnneMarieJetton/WhatsThePassword" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className='ProjectContainer'>
                        <div className='ProjectContainerImage'>
                            <img className="" src={PythonLogo} alt="PythonLogo" />
                        </div>
                        <div className='ProjectContainerText'>
                            <span className='ProjectContainerTextTitle'>Unfair Chess</span>
                            <ul className='ProjectContainerTextList'>
                                <li>
                                    The classic game, with a bit of a twist, written in python.
                                </li>
                                <li>
                                    Use of Pygame
                                </li>
                                <li>
                                    Use of GUI tools
                                </li>
                                <li>
                                    Proof of Python Knowledge
                                </li>
                            </ul>
                            <a href="https://github.com/AnneMarieJetton/UnfairChess" className="github__project__link" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className='ProjectContainer'>
                        <div className='ProjectContainerImage'>
                            <img className="" src={ReactLogo} alt="ReactLogo" />
                        </div>
                        <div className='ProjectContainerText'>
                            <span className='ProjectContainerTextTitle'>Arthur's chat room</span>
                            <ul className='ProjectContainerTextList'>
                                <li>
                                    A website created by Sir Arthur's own two paws, This is a chat room where you can chat with others. (and Arthur) 
                                </li>
                                <li>
                                    Use of Firebase
                                </li>
                                <li>
                                    Proof of React Knowledge
                                </li>
                            </ul>
                            <a href="https://github.com/AnneMarieJetton/ArthursChatRoom" className="github__project__link" target="_blank" rel="noopener noreferrer">
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