import React from "react"
import '../css-files/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            {/* <Link to="/">
                <img className="header__logo" src="https://i.pinimg.com/originals/80/7b/5c/807b5c4b02e765bb4930b7c66662ef4b.gif" alt=""/>
            </Link> */}
            <div className="initials header__anim__1">
                AJ
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