import React from "react"
import '../css-files/Header.css';
import moonLogo from '../other-files/transparent_moon.png';
import linkedinLogo from '../other-files/linkedin_white_logo.png'
import githubLogo from '../other-files/github_white_logo.png'
import emailLogo from '../other-files/email_white_logo.png'


function Header() {
    return (
        <nav className="header">

            <div className="logo__parent header__anim__1">
                <img className="header__logo" src={moonLogo} alt="moon" />
                <span className="header__logo__text__1">Anne</span>
                <span className="header__logo__text__2">Web Developer</span>
            </div>

            <div className="header__nav">

                <a className="header__link" onClick={() => scrollToElement('Home')}>
                    <div className="header__option header__anim__1">
                        <span>Home</span>
                    </div>
                </a>
                <a className="header__link" onClick={() => scrollToElement('About')}>
                    <div className="header__option header__anim__2">
                        <span>About</span>
                    </div>
                </a>
                <a className="header__link" onClick={() => scrollToElement('Skills')}>
                    <div className="header__option header__anim__3">
                        <span>Skills</span>
                    </div>
                </a>
                <a className="header__link" onClick={() => scrollToElement('Experience')}>
                    <div className="header__option header__anim__4">
                        <span>Experience</span>
                    </div>
                </a>
                <a className="header__link" onClick={() => scrollToElement('Contact')}>
                    <div className="header__option header__anim__5">
                        <span>Contact Me</span>
                    </div>
                </a>
                <div className="header__link">
                    <div className="header__option header__anim__6">
                        <div className="social-links">
                            <a href="https://github.com/AnneMarieJetton" className="github__link" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/anne-jetton/" className="linkedin__link" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" />
                            </a>
                            <a href="mailto:annemariejetton@gmail.com" className="email__link">
                                <img src={emailLogo} alt="Email" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
  
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
}

export default Header;