import React from "react"
import '../css-files/Header.css';
import moonLogo from '../other-files/transparent_moon.png';
// import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


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


                {/* <ScrollLink className="header__link"
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}
                >
                    <div className="header__option header__anim__2">
                        <span>About</span>
                    </div>
                </ScrollLink>
                <ScrollLink className="header__link"
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                >
                    <div className="header__option header__anim__3">
                        <span>Skills</span>
                    </div>
                </ScrollLink>
                <ScrollLink className="header__link"
                    activeClass="active"
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className="header__option header__anim__4">
                        <span>Experience</span>
                    </div>
                </ScrollLink>
                <ScrollLink className="header__link"
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className="header__option header__anim__5">
                        <span>Contact Me</span>
                    </div>
                </ScrollLink> */}
                
                {/* <Link to="/" className="header__link">
                        <div className="header__option header__anim__2">
                            <span>About</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option header__anim__3">
                            <span>Skills</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option header__anim__4">
                            <span>Experience</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option header__anim__5">
                            <span>Contact Me</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option header__anim__6">
                            <span>Link Symbols</span>
                        </div>
                </Link> */}
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