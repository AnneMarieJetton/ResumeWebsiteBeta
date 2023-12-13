import React from "react"
import '../css-files/Header.css';
import moonLogo from '../other-files/transparent_moon.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">

            <div className="logo__parent header__anim__1">
                <img className="header__logo" src={moonLogo} alt="moon" />
                <span className="header__logo__text__1">Anne</span>
                <span className="header__logo__text__2">Web Developer</span>
            </div>

            <div className="header__nav">
                <Link to="/" className="header__link">
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
                </Link>
            </div>
        </nav>
    )
}

export default Header;