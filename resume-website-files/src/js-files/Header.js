import React from "react"
import '../css-files/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                {/* <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/> */}
                <img className="header__logo" src="https://i.pinimg.com/originals/80/7b/5c/807b5c4b02e765bb4930b7c66662ef4b.gif" alt=""/>
            </Link>

            <div className="header__nav">
                <Link to="/" className="header__link">
                        <div className="header__option">
                            <span>Home</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option">
                            <span>Skills</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option">
                            <span>Experience</span>
                        </div>
                </Link>
                <Link to="/" className="header__link">
                        <div className="header__option">
                            <span>Contact Me</span>
                        </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;